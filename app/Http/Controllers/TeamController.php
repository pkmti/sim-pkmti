<?php

namespace App\Http\Controllers;

use App\Models\Team;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Str;

class TeamController extends Controller
{
    const MAX_PARTICIPANTS = 5;

    public function show($teamId)
    {   
        if (!Auth::getUser()->team_id && Auth::getUser()->role != 'admin') {
            return to_route('teams.not-teamed');
        }

        $team = Team::with('leader', 'members', 'proposal')->find($teamId);

        if (!$team) abort(404);

        return Inertia::render('Teams/Show', compact('team'));
    }
    

    public function create(Request $request)
    {
        if (Auth::getUser()->team_id) {
            return to_route('teams.show', Auth::getUser()->team_id);
        }

        $request->validate([
            'team_name' => 'required|string|max:255|unique:'.Team::class,
        ], [
            'team_name.required' => 'Mohon masukkan nama tim',
        ]);

        $token = Str::random(8);

        $team = Team::create([
            'team_name' => $request->team_name,
            'token' => $token,
            'leader_id' => Auth::id(),
        ]);

        $user = User::find(Auth::id());
        $user->team_id = $team->id;
        $user->save();

        return to_route('teams.show', $team->id);
    }

    public function join($token)
    { 
        $team = Team::where('token', $token)->first();
        if (!$team) return back()->with('msg', 'Tim tidak ditemukan.');

        $teamId = $team->id;
        $teamMembersCount = User::where('team_id', $teamId)->count();

        if ($teamMembersCount == self::MAX_PARTICIPANTS) {
            return back()->with('msg', 'Tim sudah penuh!');
        }

        User::find(Auth::id())->update(['team_id' => $teamId]);

        return to_route('teams.show', $teamId)->with('msg', 'Selamat bergabung!');
    }

    public function leave($teamId)
    {
        $user = User::find(Auth::id());
        $teamMembersCount = User::where('team_id', $teamId)->count();
        $pastTeam = Team::with('members')->find($teamId);

        if ($teamMembersCount == 1) {
            // logic if he/she was alone
            $pastTeam->delete();
        } else {
            // logic if he/she was a leader at the team 
            if ($pastTeam->leader_id == $user->id) {
                $pastTeam->update(['leader_id' =>  $pastTeam->members()->first()->id]);
            }
        }
        
        $user->update(['team_id' => null]);
            
        return to_route('dashboard')->with('msg', 'Kamu berhasil keluar dari tim.');
    }

    public function kickMember($teamId, $userId)
    {
        $pastTeam = Team::with('members')->find($teamId);
        $teamMembersCount = User::where('team_id', $teamId)->count();
        $pastTeam = Team::with('members')->find($teamId);

        if ($teamMembersCount == 1) {
            // logic if he/she was alone
            $pastTeam->delete();
            return to_route('dashboard')->with('msg', 'Tim dibubarkan.');
        } else {
            // logic if he/she was a leader at the team 
            if ($pastTeam->leader_id == $userId) {
                $pastTeam->update(['leader_id' =>  $pastTeam->members()->first()->id]);
            }
        }

        User::find($userId)->update(['team_id' => null]);

        return back()->with('msg', 'Anggota tim berhasil dikeluarkan.');
    }

    public function changeLeader($teamId, $userId)
    {
        Team::find($teamId)->update(['leader_id' => $userId]);

        return redirect()->back()->with('msg', 'Ketua tim berhasil diganti.');
    }

    public function update(Request $request, $teamId)
    {
        $request->validate([
            'team_name' => 'required|string|max:255',
        ], [
            'team_name.required' => 'Nama tim tidak boleh kosong',
        ]);

        Team::find($teamId)->update($request->all());

        return to_route('teams.show', $request->id)->with('msg', 'Informasi tim berhasil diubah.');
    }

    public function destroy($teamId)
    {
        Team::find($teamId)->delete();

        return to_route('dashboard')->with('msg', 'Tim berhasil dibubarkan.');
    }
}

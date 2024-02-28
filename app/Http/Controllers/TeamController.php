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

    public function index($id)
    {   
        if (!Auth::getUser()->team_id) {
            return to_route('team.notTeamed');
        }

        $team = Team::with('leader', 'members', 'proposal')->find($id);
        if (!$team) abort(404);
        return Inertia::render('Team/Index', compact('team'));
    }

    public function showTeams()
    {
        $teams = Team::with('members', 'proposal')->get();
        return Inertia::render('Admin/Teams', compact('teams'));
    }

    public function create(Request $request)
    {
        if (Auth::getUser()->team_id) {
            $token = Team::find(Auth::getUser()->team_id)->token;
            return to_route('team.index', $token);
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

        return to_route('team.index', $team->id);
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

        return to_route('team.index', $teamId)->with('msg', 'Selamat bergabung!');
    }

    public function leave()
    {
        $user = User::find(Auth::id());
        $teamId = $user->team_id;
        
        $teamMembersCount = User::where('team_id', $teamId)->count();
        $user->team_id = null;
        $user->save();

        if ($teamMembersCount == 1) {
            // logic if he/she was alone
            Team::find(Auth::user()->team_id)->delete();
        } else {
            // logic if he/she was a leader at the team 
            $pastTeam = Team::with('members')->find($teamId);
            
            if ($pastTeam->leader_id == $user->id) {
                $pastTeam->leader_id = $pastTeam->members()->first()->id;
                $pastTeam->save();
            }
        }
            
        return to_route('dashboard')->with('msg', 'Kamu berhasil keluar dari tim.');
    }

    public function kickMember($userId)
    {
        User::find($userId)->update(['team_id' => null]);

        return redirect()->back()->with('msg', 'Anggota tim berhasil dikeluarkan.');
    }

    public function changeLeader($id, $userId)
    {
        Team::find($id)->update(['leader_id' => $userId]);

        return redirect()->back()->with('msg', 'Ketua tim berhasil diganti.');
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'team_name' => 'required|string|max:255',
        ], [
            'team_name.required' => 'Nama tim tidak boleh kosong',
        ]);

        Team::find($id)->update($request->all());

        return to_route('team.index', $request->id)->with('msg', 'Informasi tim berhasil diubah.');
    }

    public function disband($id)
    {
        Team::find($id)->delete();

        return to_route('dashboard')->with('msg', 'Tim berhasil dibubarkan.');
    }
}

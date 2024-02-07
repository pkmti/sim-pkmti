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

    public function showTeam($token)
    {
        $team = Team::with('members', 'proposal')->find($token);
        return Inertia::render('Team/Show', compact('team'));
    }

    public function showTeams()
    {
        $teams = Team::with('members', 'proposal')->get();
        return Inertia::render('Team/Index', compact('teams'));
    }

    public function create(Request $request)
    {
        $request->validate([
            'team_name' => 'required|string|max:255',
        ], [
            'team_name.required' => 'Mohon masukkan nama tim',
        ]);

        $token = 'PKM-TI-' . Str::random(6);

        $team = Team::create([
            'team_name' => $request->team_name,
            'token' => $token,
            'leader_id' => Auth::id(),
        ]);

        User::find(Auth::id())->update(['team_id' => $team->id]);

        return to_route('team.index', $token);
    }

    public function search(Request $request)
    {
        $request->validate([
            'token' => 'required|string|max:255',
        ], [
            'token.required' => 'Mohon masukkan token tim',
        ]);

        $team = Team::with('members')->where('token', $request->token)->first();
        if(!$team) return back()->with('error', 'Tim tidak ditemukan');

        return to_route('team.result', $team)->with('success', 'Tim ditemukan');
    }

    public function join($token)
    {
        $teamId = Team::where('token', $token)->first()->id;
        $teamMembersCount = User::where('team_id', $teamId)->count();

        if ($teamMembersCount == self::MAX_PARTICIPANTS) {
            return back()->with('error', 'Tim sudah penuh!');
        }

        User::find(Auth::id())->update(['team_id' => $teamId]);

        return to_route('team.index', $token)->with('success', 'Selamat bergabung!');
    }

    public function leave()
    {
        User::find(Auth::id())->update(['team_id' => null]);

        return to_route('dashboard')->with('success', 'Kamu berhasil keluar dari tim');
    }

    public function kickMember($userId)
    {
        User::find($userId)->update(['team_id' => null]);

        return back()->with('success', 'Anggota tim berhasil dikeluarkan');
    }

    public function changeLeader($id, Request $request)
    {
        $request->validate([
            'leader_id' => 'required|integer|exists:users,id',
        ], [
            'leader_id.required' => 'Mohon pilih ketua tim',
        ]);

        Team::find($id)->update(['leader_id' => $request->leader_id]);

        return back()->with('success', 'Ketua tim berhasil diubah');
    }

    public function update($id, Request $request)
    {
        $request->validate([
            'team_name' => 'required|string|max:255',
        ], [
            'team_name.required' => 'Nama tim tidak boleh kosong',
        ]);

        $team = Team::find($id);
        $team->update(request()->all());

        return back()->with('success', 'Tim berhasil diupdate');
    }

    public function disband($id) // or delete
    {
        Team::find($id)->delete();

        return to_route('dashboard')->with('success', 'Tim berhasil dibubarkan 🥲');
    }
}

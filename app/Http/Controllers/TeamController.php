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

    public function showTeam($id)
    {
        $team = Team::with('members', 'proposal')->find($id);
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

        // set your redirect page here
    }

    public function join($token)
    {
        $teamId = Team::where('token', $token)->first()->id;
        $teamMembersCount = User::where('team_id', $teamId)->count();

        if ($teamMembersCount == self::MAX_PARTICIPANTS) {
            return back()->with('error', 'Tim sudah penuh!');
        }

        User::find(Auth::id())->update(['team_id' => $teamId]);

        // set your redirect page here
    }

    public function leave()
    {
        User::find(Auth::id())->update(['team_id' => null]);

        // set your redirect page here
    }

    public function kickMember($userId)
    {
        User::find($userId)->update(['team_id' => null]);

        // set your redirect page here
    }

    public function changeLeader($id, Request $request)
    {
        $request->validate([
            'leader_id' => 'required|integer|exists:users,id',
        ], [
            'leader_id.required' => 'Mohon pilih ketua tim',
        ]);

        Team::find($id)->update(['leader_id' => $request->leader_id]);

        // set your redirect page here
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

        // set your redirect page here
    }

    public function disband($id) // or delete
    {
        Team::find($id)->delete();

        // set your redirect page here
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Proposal;
use App\Models\Team;
use App\Models\User;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function showUsers() {
        $users = User::with('team', 'team.proposal', 'team.assistanceProofs')->get();

        foreach ($users as $user) {
            // check user has team or not
            // check user team has proposal or not
            // check the status of the team's proposal whether it is accepted or not
            // check whether the number of team assist proofs is greater than or equal to 3
            if ($user->team_id && 
                $user->team->proposal && 
                $user->team->proposal->status == 'approved' &&
                $user->team->assistanceProofs->count() >= 3) {
                    $user["status"] = 'passed'; 
            } else {
                $user["status"]  = 'failed';
            }
        }

        return Inertia::render('Admin/ShowUsers', compact('users'));
    }

    public function showTeams() {
        $teams = Team::with('members', 'leader', 'lecturer')->get();

        return Inertia::render('Admin/ShowTeams', compact('teams'));
    }

    public function showProposals() {
        $proposals = Proposal::with('team', 'team.assistanceProofs', 'team.lecturer')->get();

        return Inertia::render('Admin/ShowProposals', compact('proposals'));
    }
}

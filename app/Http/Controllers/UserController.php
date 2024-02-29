<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function showUsers()
    {
        $users = User::with(['team.proposal', 'team.assistanceProofs.lecturer'])->get();

        // query final status
        // ?? proposal approved
        // ?? submitted min 3 assistance proofs

        dd($users);
    }
}

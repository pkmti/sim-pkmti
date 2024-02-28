<?php

namespace App\Http\Middleware;

use App\Models\Team;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class Role
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, $role): Response
    {
        $currentUser = auth()->user();

        // check primary role
        if ($request->user()->role == $role) {
            return $next($request);
        }

        // check semi role (leader)
        if ($currentUser->id == Team::find($currentUser->team_id)->leader_id) {
            return $next($request);
        }

        // check semi role (member)
        if ($currentUser->team_id) {
            $members = Team::with("members")->find($currentUser->team_id)->members()->get();
            foreach ($members as $member) {
                if ($currentUser->id == $member->id) return $next($request);
            }
        }


        abort(403);
    }
}

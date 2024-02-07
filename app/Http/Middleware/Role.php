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
        // check primary role
        if ($request->user()->role == $role) {
            return $next($request);
        }

        // check semi role (leader)
        if ($role == 'leader' && auth()->user()->id == Team::find(auth()->user()->team_id)->leader_id) {
            return $next($request);
        }

        abort(403);
    }
}

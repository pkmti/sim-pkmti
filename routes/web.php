<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProposalController;
use App\Http\Controllers\TeamController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use function Termwind\render;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/teams', function () {
        if (Auth::getUser()->team_id) return to_route('team.index', Auth::getUser()->team_id);
        return Inertia::render('Team/NotTeamed');
    })->name('team.myTeam');

    Route::middleware(['role:not-teamed'])->group(function () {
        Route::post('/teams', [TeamController::class, 'create'])->name('team.create');
        Route::get('/teams/{token}/join', [TeamController::class, 'join'])->name('team.join');
    });

    Route::middleware(['role:admin,member'])->group(function () {
        Route::get('/teams/{id}', [TeamController::class, 'index'])->name('team.index');
        Route::delete('/teams/{id}/leave', [TeamController::class, 'leave'])->name('team.leave');
    });

    Route::middleware(['role:leader,admin'])->group(function () {
        Route::delete('/teams/{id}/kick/{userId}', [TeamController::class, 'kickMember'])->name('team.kick');
        Route::patch('/teams/{id}/leader/{userId}', [TeamController::class, 'changeLeader'])->name('team.changeLeader');
        Route::patch('/teams/{id}', [TeamController::class, 'update'])->name('team.update');
        Route::delete('/teams/{id}', [TeamController::class, 'disband'])->name('team.disband');
    });

    Route::get('/proposals', [ProposalController::class, 'showProposals'])->name('proposals.index');
    Route::post('/proposals', [ProposalController::class, 'submit'])->name('proposal.submit');

    Route::middleware(['role:admin,lecturer'])->group(function () {
        Route::patch('/proposals/{id}/accept', [ProposalController::class, 'accept'])->name('proposal.accept');
        Route::patch('/proposals/{id}/reject', [ProposalController::class, 'reject'])->name('proposal.reject');
    });

    Route::patch('/proposals/{id}', [ProposalController::class, 'update'])->name('proposal.update');
    Route::delete('/proposals/{id}', [ProposalController::class, 'delete'])->name('proposal.delete');
});

Route::middleware(['auth', 'role:admin'])->prefix('admin')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Admin/Dashboard');
    })->name('admin.dashboard');
    Route::get('/participants', function () {
        return Inertia::render('Admin/Participants');
    })->name('admin.participants');
    Route::get('/teams', [TeamController::class, 'showTeams'])->name('admin.teams');
    Route::get('/proposals', function () {
        return Inertia::render('Admin/Proposals');
    })->name('admin.proposals');
});

require __DIR__.'/auth.php';

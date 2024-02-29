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

    Route::middleware(['role:not-teamed'])->group(function () {
        Route::get('/teams', fn () => Inertia::render('Teams/NotTeamed'))->name('teams.myTeam');
        Route::post('/teams', [TeamController::class, 'create'])->name('teams.create');
        Route::get('/teams/{token}/join', [TeamController::class, 'join'])->name('teams.join');
    });

    Route::middleware(['role:admin,member'])->group(function () {
        Route::get('/teams/{teamId}', [TeamController::class, 'show'])->name('teams.show');
        Route::delete('/teams/{teamId}/leave', [TeamController::class, 'leave'])->name('teams.leave');
    });

    Route::middleware(['role:admin,leader'])->group(function () {
        Route::delete('/teams/{teamId}/kick/{userId}', [TeamController::class, 'kickMember'])->name('teams.kick');
        Route::patch('/teams/{teamId}/leader/{userId}', [TeamController::class, 'changeLeader'])->name('teams.changeLeader');
        Route::patch('/teams/{teamId}', [TeamController::class, 'update'])->name('teams.update');
        Route::delete('/teams/{teamId}', [TeamController::class, 'destroy'])->name('teams.destroy');
    });

    Route::prefix('/teams')->middleware(['role:admin,member'])->group(function () {
        Route::get('/{teamId}/proposals', [ProposalController::class, 'show'])->name('proposals.show');
        Route::post('/{teamId}/proposals', [ProposalController::class, 'create'])->middleware('have-no-proposal')->name('proposals.create');
        Route::patch('/{teamId}/proposals', [ProposalController::class, 'update'])->name('proposals.update');
        Route::delete('/{teamId}/proposals', [ProposalController::class, 'destroy'])->name('proposals.destroy');
    });

    Route::middleware(['role:admin,lecturer'])->group(function () {
        Route::patch('/proposals/{proposalId}/accept', [ProposalController::class, 'accept'])->name('proposals.accept');
        Route::patch('/proposals/{proposalId}/reject', [ProposalController::class, 'reject'])->name('proposals.reject');
    });
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

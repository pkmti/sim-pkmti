<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProposalController;
use App\Http\Controllers\TeamController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

    Route::get('/teams/{id}', [TeamController::class, 'showTeam'])->name('team.index');
    Route::get('/teams', [TeamController::class, 'showTeams'])->name('teams.index');
    Route::post('/teams', [TeamController::class, 'create'])->name('team.create');
    Route::get('/teams/{token}/join', [TeamController::class, 'join'])->name('team.join');
    Route::delete('/teams/leave', [TeamController::class, 'leave'])->name('team.leave');
    Route::delete('/teams/kick/{userId}', [TeamController::class, 'kickMember'])->name('team.kick');
    Route::patch('/teams/{id}/leader', [TeamController::class, 'changeLeader'])->name('team.changeLeader');
    Route::patch('/teams/{id}', [TeamController::class, 'update'])->name('team.update');
    Route::delete('/teams/{id}', [TeamController::class, 'disband'])->name('team.disband');

    Route::get('/proposals', [ProposalController::class, 'showProposals'])->name('proposals.index');
    Route::post('/proposals', [ProposalController::class, 'submit'])->name('proposal.submit');

    Route::middleware(['role:admin|lecturer'])->group(function () {
        Route::patch('/proposals/{id}/accept', [ProposalController::class, 'accept'])->name('proposal.accept');
        Route::patch('/proposals/{id}/reject', [ProposalController::class, 'reject'])->name('proposal.reject');
    });

    Route::patch('/proposals/{id}', [ProposalController::class, 'update'])->name('proposal.update');
    Route::delete('/proposals/{id}', [ProposalController::class, 'delete'])->name('proposal.delete');
});

require __DIR__ . '/auth.php';

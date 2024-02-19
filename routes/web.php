<?php

use App\Http\Controllers\AssistanceProofController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProposalController;
use App\Http\Controllers\TeamController;
use App\Jobs\SendEmailJob;
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

Route::get('/test-email', function () {
    $emailArgs = [
        'email' => 'ptadityamahendrap@gmail.com',
        'subject' => 'Selamat Datang di PKM TI',
        'view' => 'emails.reject-proposal',
        'data' => [
            'name' => 'Aditya Mahendra',
            'proposal_title' => 'HAHAHA',
            'note' => 'Skill Issue'
        ],
        'attachments' => []
    ];
    dispatch(new SendEmailJob($emailArgs));
});

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

    Route::get('/teams/{token}', [TeamController::class, 'showTeam'])->name('team.index');
    Route::get('/teams', [TeamController::class, 'showTeams'])->name('teams.index');
    Route::post('/teams', [TeamController::class, 'create'])->name('team.create');
    Route::get('/teams/{token}/join', [TeamController::class, 'join'])->name('team.join');
    Route::delete('/teams/leave', [TeamController::class, 'leave'])->name('team.leave');
    Route::middleware(['role:admin|leader'])->group(function () {
        Route::delete('/teams/kick/{userId}', [TeamController::class, 'kickMember'])->name('team.kick');
        Route::patch('/teams/{id}/leader', [TeamController::class, 'changeLeader'])->name('team.changeLeader');
        Route::patch('/teams/{id}', [TeamController::class, 'update'])->name('team.update');
        Route::delete('/teams/{id}', [TeamController::class, 'disband'])->name('team.disband');
    });

    Route::get('/proposals', [ProposalController::class, 'showProposals'])->name('proposals.index');
    Route::middleware(['role:admin|leader'])->group(function () {
        Route::post('/proposals', [ProposalController::class, 'submit'])->name('proposal.submit');
        Route::patch('/proposals/{id}', [ProposalController::class, 'update'])->name('proposal.update');
        Route::delete('/proposals/{id}', [ProposalController::class, 'delete'])->name('proposal.delete');
    });
    Route::middleware(['role:admin|lecturer'])->group(function () {
        Route::patch('/proposals/{id}/accept', [ProposalController::class, 'accept'])->name('proposal.accept');
        Route::patch('/proposals/{id}/reject', [ProposalController::class, 'reject'])->name('proposal.reject');
    });

    Route::get('/assistance-proofs/me', [AssistanceProofController::class, 'showByMyTeam'])->name('assistance-proofs.my-team');
    Route::middleware(['role:admin'])->group(function () {
        Route::get('/assistance-proofs/{teamId}', [AssistanceProofController::class, 'showByTeam'])->name('assistance-proofs.team');
        Route::get('/assistance-proofs', [AssistanceProofController::class, 'showByTeams'])->name('assistance-proofs.teams');
    });
    Route::middleware(['role:admin|lecturer|leader'])->group(function () {
        Route::post('/assistance-proofs', [AssistanceProofController::class, 'add'])->name('assistance-proofs.add');
        Route::delete('/assistance-proofs', [AssistanceProofController::class, 'delete'])->name('assistance-proofs.delete');
        Route::patch('/assistance-proofs/{id}', [AssistanceProofController::class, 'update'])->name('assistance-proofs.update');
    });
});

Route::middleware('auth')->prefix('test/admin')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Admin/Dashboard');
    });
    Route::get('/participants', function () {
        return Inertia::render('Admin/Participants');
    });
    Route::get('/teams', function () {
        return Inertia::render('Admin/Teams');
    });
    Route::get('/proposals', function () {
        return Inertia::render('Admin/Proposals');
    });
});

require __DIR__ . '/auth.php';

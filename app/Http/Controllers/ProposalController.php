<?php

namespace App\Http\Controllers;

use App\Mail\AcceptProposal;
use App\Mail\RejectProposal;
use App\Models\Proposal;
use App\Models\User;
use App\Rules\MaxWordCount;
use App\Rules\ValidProposalScheme;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class ProposalController extends Controller
{
    public function show($teamId)
    {
        $proposal = Proposal::with('team')->where('team_id', $teamId)->first();
        return Inertia::render('Proposals/Show', compact('proposal'));
    }

    public function create(Request $request, $teamId)
    {
        $request->validate([
            'scheme' => ['required', 'string', 'max:255', new ValidProposalScheme],
            'title' => ['required', 'string', 'max:255', new MaxWordCount(20)],
            'description' => ['string', 'max:512', 'nullable'],
        ], [
            'scheme.required' => 'Mohon pilih bidang PKM',
            'title.required' => 'Mohon masukkan judul proposal',
        ]);

        // allow submit when team member count is more than 3
        $teamMembersCount = User::where('team_id', $teamId)->count();
        if ($teamMembersCount < 3) {
            return back()->with('msg', 'Tim terdiri dari minimal 3 orang untuk mengajukan proposal');
        }

        Proposal::create([
            'team_id' => $teamId,
            'scheme' => $request->scheme,
            'title' => $request->title,
            'description' => $request->description,
            'status' => 'pending',
        ]);

        return back()->with('msg', 'Timmu telah berhasil mengajukan proposal');
    }

    public function update(Request $request, $teamId)
    {
        $request->validate([
            'scheme' => ['required', 'string', 'max:255', new ValidProposalScheme],
            'title' => ['required', 'string', 'max:255', new MaxWordCount(20)],
            'description' => ['string', 'max:255', 'nullable'],
            'draft_proposal_url' => ['url', 'nullable'],
            'final_proposal_url' => ['url', 'nullable'],
            'note' => ['string', 'nullable']
        ], [
            'scheme.required' => 'Mohon pilih bidang PKM',
            'title.required' => 'Mohon masukkan judul proposal',
        ]);

        Proposal::where('team_id', $teamId)->first()->update($request->all());

        // if updated by participant, set status to pending
        if ($request->user()->role == 'participant') {
            Proposal::where('team_id', $teamId)->first()->update(['status' => 'pending']);
        }

        return back()->with('msg', 'Proposal telah diperbarui');
    }

    public function accept($proposalId)
    {
        Proposal::find($proposalId)->update(['status' => 'accepted']);

        // send email to team leader
        $proposalTitle = Proposal::find($proposalId)->title;
        $leaderId = Proposal::with('team')->find($proposalId)->team->leader_id;
        $leader = User::find($leaderId)->first();
        Mail::to($leader->email)->send(new AcceptProposal($leader->name, $proposalTitle));

        return back()->with('msg', 'Proposal telah disetujui');
    }

    public function reject($proposalId, Request $request)
    {
        $request->validate([
            'note' => 'required|string',
        ], [
            'note.required' => 'Mohon masukkan alasan penolakan',
        ]);

        Proposal::find($proposalId)->update([
            'status' => 'rejected',
            'note' => $request->note,
        ]);

        // send email to team leader
        $proposalTitle = Proposal::find($proposalId)->title;
        $leaderId = Proposal::with('team')->find($proposalId)->team->leader_id;
        $leader = User::find($leaderId)->first();
        Mail::to($leader->email)->send(new RejectProposal($leader->name, $proposalTitle, $request->note));

        return back()->with('msg', 'Proposal telah ditolak');
    }

    public function destroy($teamId)
    {
        Proposal::where('team_id', $teamId)->first()->delete();

        return back()->with('msg', 'Proposalmu telah dihapus');
    }
}

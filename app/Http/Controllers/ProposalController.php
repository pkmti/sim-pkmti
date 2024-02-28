<?php

namespace App\Http\Controllers;

use App\Mail\AcceptProposal;
use App\Mail\RejectProposal;
use App\Models\Proposal;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class ProposalController extends Controller
{
    public function show($teamId)
    {
        $proposals = Proposal::with('team')->where('team_id', $teamId)->first();
        return Inertia::render('Proposals/Show', compact('proposals'));
    }

    public function submit(Request $request)
    {
        $request->validate([
            'team_id' => 'required|exists:teams,id',
            'scheme' => 'required|string|max:255',
            'title' => 'required|string|max:255',
            'draft_proposal_url' => 'required|url',
        ], [
            'scheme.required' => 'Mohon pilih bidang PKM',
            'title.required' => 'Mohon masukkan judul proposal',
            'draft_proposal_url.required' => 'Mohon masukkan URL proposal draft',
        ]);

        // allow submit when team member count if more than 3
        $teamMembersCount = User::where('team_id', $request->team_id)->count();
        if ($teamMembersCount < 3) {
            return back()->with('error', 'Tim terdiri dari minimal 3 orang untuk mengajukan proposal');
        }

        Proposal::create([
            'team_id' => $request->team_id,
            'scheme' => $request->scheme,
            'title' => $request->title,
            'description' => $request->description,
            'draft_proposal_url' => $request->draft_proposal_url,
            'status' => 'pending',
        ]);

        return back()->with('success', 'Tim-mu telah berhasil mengajukan proposal');
    }

    public function accept($id)
    {
        Proposal::find($id)->update(['status' => 'accepted']);

        // send email to team leader
        $proposalTitle = Proposal::find($id)->title;
        $leaderId = Proposal::with('team')->find($id)->team->leader_id;
        $leader = User::find($leaderId)->first();
        Mail::to($leader->email)->send(new AcceptProposal($leader->name, $proposalTitle));

        return back()->with('success', 'Proposal telah disetujui');
    }

    public function reject($id, Request $request)
    {
        $request->validate([
            'note' => 'required|string',
        ], [
            'note.required' => 'Mohon masukkan alasan penolakan',
        ]);

        Proposal::find($id)->update([
            'status' => 'rejected',
            'note' => $request->note,
        ]);

        // send email to team leader
        $proposalTitle = Proposal::find($id)->title;
        $leaderId = Proposal::with('team')->find($id)->team->leader_id;
        $leader = User::find($leaderId)->first();
        Mail::to($leader->email)->send(new RejectProposal($leader->name, $proposalTitle, $request->note));

        return back()->with('success', 'Proposal telah ditolak');
    }


    public function update(Request $request, $teamId)
    {
        Proposal::where('team_id', $teamId)->first()->update($request->all());

        // if updated by participant, set status to pending
        if ($request->user()->role == 'participant') {
            Proposal::where('team_id', $teamId)->first()->update(['status' => 'pending']);
        }

        return back()->with('success', 'Proposal telah diperbarui');
    }

    public function delete($teamId)
    {
        Proposal::where('team_id', $teamId)->first()->delete();

        return back()->with('success', 'Proposal telah dihapus');
    }
}

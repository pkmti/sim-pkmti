<?php

namespace App\Http\Controllers;

use App\Jobs\SendEmailJob;
use App\Models\Proposal;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProposalController extends Controller
{
    public function showProposals()
    {
        $proposals = Proposal::with('team')->get();
        return Inertia::render('Proposal/Show', compact('proposal'));
    }

    public function submit(Request $request)
    {
        $request->validate([
            'team_id' => 'required|exists:teams,id',
            'scheme' => 'required|string|max:255',
            'title' => 'required|string|max:255',
            'description' => '',
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
        $emailArgs = [
            'email' => $leader->email,
            'subject' => 'Selamat! Proposal PKM Kalian Telah Disetujui! 🎉',
            'view' => 'emails.accept-proposal',
            'data' => [
                'name' => $leader->name,
                'proposal_title' => $proposalTitle,
            ],
            'attachments' => []
        ];
        dispatch(new SendEmailJob($emailArgs));

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
        $emailArgs = [
            'email' => $leader->email,
            'subject' => 'Yuk, Semangat! Proposal PKM Kalian Masih Bisa Direvisi! 💪',
            'view' => 'emails.reject-proposal',
            'data' => [
                'name' => $leader->name,
                'proposal_title' => $proposalTitle,
                'note' => $request->note,
            ],
            'attachments' => []
        ];
        dispatch(new SendEmailJob($emailArgs));

        return back()->with('success', 'Proposal telah ditolak');
    }


    public function update(Request $request, $id)
    {
        Proposal::find($id)->update($request->all());

        // if updated by participant, set status to pending
        if ($request->user()->role == 'participant') {
            Proposal::find($id)->update(['status' => 'pending']);
        }

        return back()->with('success', 'Proposal telah diperbarui');
    }

    public function delete($id)
    {
        Proposal::find($id)->delete();

        return back()->with('success', 'Proposal telah dihapus');
    }
}

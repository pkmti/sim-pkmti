<?php

namespace App\Http\Controllers;

use App\Models\Proposal;
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

        Proposal::create([
            'team_id' => $request->team_id,
            'scheme' => $request->scheme,
            'title' => $request->title,
            'description' => $request->description,
            'draft_proposal_url' => $request->draft_proposal_url,
            'status' => 'pending',
        ]);

        // set your redirect page here
    }

    public function accept($id)
    {
        Proposal::find($id)->update(['status' => 'accepted']);

        // send notif email here

        // set your redirect page here
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

        // send notif email here

        // set your redirect page here
    }


    public function update(Request $request, $id)
    {
        $proposal = Proposal::find($id);
        $proposal->update($request->all());

        // set your redirect page here
    }

    public function delete($id)
    {
        Proposal::find($id)->delete();

        // set your redirect page here
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\AssistanceProof;
use Illuminate\Http\Request;

class AssistanceProofController extends Controller
{
    public function showByMyTeam()
    {
        $teamId = auth()->user()->team_id;
        if(!$teamId) {
            return back()->with('error', 'Kamu belum tergabung dalam tim');
        }

        $proofs = AssistanceProof::with('lecturer')->where('team_id', $teamId)->orderBy('assistance_date', 'asc')->get();

        dd($proofs);
    }

    public function showByTeam($teamId)
    {
        $proofs = AssistanceProof::with('lecturer')->where('team_id', $teamId)->orderBy('assistance_date', 'asc')->get();

        dd($proofs);
    }

    public function showByTeams()
    {
        $proofs = AssistanceProof::with('lecturer')->orderBy('assistance_date', 'asc')->get();

        dd($proofs);
    }

    public function add(Request $request)
    {
        $request->validate([
            'proof_url' => 'required|url',
            'team_id' => 'required',
            'lecturer_id' => 'required',
            'assistance_date' => 'required|date',
        ], [
            'proof_url.required' => 'Mohon masukkan bukti asistensi',
            'team_id.required' => 'Invalid DTO',
            'lecturer_id.required' => 'Mohon pilih dosen pembimbing',
            'assistance_date.required' => 'Mohon pilih tanggal saat asistensi dilakukan',
        ]);

        AssistanceProof::create([
            'proof_url' => $request->proof_url,
            'team_id' => $request->team_id,
            'lecturer_id' => $request->lecturer_id,
            'assistance_date' => $request->assistance_date,
        ]);

        return back()->with('success', 'Bukti asistensi berhasil diunggah');
    }

    public function delete(Request $request)
    {
        $request->validate([
            'id' => 'required',
        ]);

        AssistanceProof::find($request->id)->delete();

        return back()->with('success', 'Bukti asistensi berhasil dihapus');
    }

    public function update(Request $request)
    {
        $request->validate([
            'id' => 'required',
            'proof_url' => 'required|url',
            'team_id' => 'required',
            'lecturer_id' => 'required',
            'assistance_date' => 'required|date',
        ]);

        AssistanceProof::find($request->id)->update($request->all());

        return back()->with('success', 'Bukti asistensi berhasil diubah');
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Team;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class UserController extends Controller
{
    public function update(Request $request, string $id)
    {
        $selectedRequest = [
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'nim' => $request->input('nim'),
            'phone' => $request->input('phone'),
            'line_id' => $request->input('line_id'),
        ];

        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => [
                'required',
                'email',
                Rule::unique('users')->ignore($id, 'id')
            ],
            'nim' => [
                'required',
                'string',
                'min:10',
                'max:10',
                Rule::unique('users')->ignore($id, 'id')
            ],
            'phone' => 'required|regex:/^08[0-9]+$/',
            'line_id' => 'required|string',
        ]);

        if ($validator->fails()) {
            return back()
                ->withErrors($validator)
                ->withInput();
        }
        
        User::find($id)->update($selectedRequest);
        return back()->with('msg', 'Pengguna berhasil diperbarui');
    }

    public function destroy(string $id)
    {
        $userId = $id;

        // logic if he/she has a team
        $user = User::find($userId);

        if ($user->team_id) {
            $teamId = $user->team_id;
            $pastTeam = Team::with('members')->find($teamId);
            $teamMembersCount = User::where('team_id', $teamId)->count();

            if ($teamMembersCount == 1) { 
                // logic if he/she was alone
                $pastTeam->delete();
            } else { 
                // logic if he/she was a leader at the team 
                if ($pastTeam->leader_id == $userId) {
                    $pastTeam->update(['leader_id' =>  $pastTeam->members()->first()->id]);
                }
            }
        }
        
        $user->delete();

        return back()->with('msg', 'Pengguna berhasil dihapus');
    }
}

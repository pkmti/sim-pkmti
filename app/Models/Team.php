<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    use HasFactory;

    protected $fillable = [
        'team_name',
        'token',
        'leader_id', 
    ];

    public function members()
    {
        return $this->hasMany(User::class);
    }

    public function leader()
    {
        return $this->belongsTo(User::class);
    }

    public function proposal()
    {
        return $this->hasOne(Proposal::class);
    }
}

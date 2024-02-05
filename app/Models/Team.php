<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    use HasFactory;

    protected $protected = [];

    public function members()
    {
        return $this->hasMany(User::class);
    }

    public function proposal()
    {
        return $this->hasOne(Proposal::class);
    }
}

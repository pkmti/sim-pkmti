<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AssistanceProof extends Model
{
    use HasFactory;

    protected $protected = [];

    public function team()
    {
        return $this->belongsTo(Team::class);
    }

    public function lecturer()
    {
        return $this->belongsTo(Lecturer::class);
    }
}

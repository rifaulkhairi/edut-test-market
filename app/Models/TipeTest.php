<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TipeTest extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
    ];
    protected $table = 'tipe_test_tbl';
}

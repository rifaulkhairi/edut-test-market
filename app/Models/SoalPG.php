<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SoalPG extends Model
{
    use HasFactory;

    protected $fillable = [
        'paketsoal_id',
        'nilai',
        'jawaban_betul',
        'status',
        'tipetest_id',
        'created_by',
        'updated_by',
        'soal',
        'opsiA',
        'opsiB',
        'opsiC',
        'opsiD',
        'opsiE',
        'pembahasan',
    ];
    protected $table = 'soalpg_tbl';
}

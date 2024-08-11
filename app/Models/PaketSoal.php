<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PaketSoal extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'link_cover',
        'price',
        'discount',
        'terjual',
        'rating',
        'jam',
        'menit',
        'detik',
        'created_by',
        'updated_by',
        'created_at',
        'updated_at'
    ];
    protected $table = 'paket_soal_tbl';
}

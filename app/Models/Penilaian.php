<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Penilaian extends Model
{
    use HasFactory;

    protected $fillable = ['comment', 'rating', 'created_by', 'id_paket_soal'];

    protected $table = "penilaian_tbl";

    public function replies()
    {
        return $this->hasMany(Reply::class);
    }

    public function paketsoal()
    {
        return $this->belongsTo(PaketSoal::class, 'id_paket_soal');
    }
}

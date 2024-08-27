<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PercobaanUjian extends Model
{
    use HasFactory;

    protected $fillable = ['paketsoal_id', 'email_user', 'status', 'total_nilai', 'diselesaikan_pada'];

    protected $table = 'percobaan_ujian_tbl';

    public function paketsoal()
    {
        return $this->belongsTo(PaketSoal::class, 'paketsoal_id');
    }

    public function useranswer()
    {
        return $this->hasMany(UserAnswer::class, 'percobaan_id');
    }
}

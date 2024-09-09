<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

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
        'status',
        'created_by',
        'updated_by',
        'created_at',
        'updated_at'
    ];
    protected $table = 'paket_soal_tbl';

    public function penilaian()
    {
        return $this->hasMany(Penilaian::class, 'id_paket_soal');
    }
    public function questions()
    {
        return $this->hasMany(Question::class, 'paketsoal_id');
    }
}

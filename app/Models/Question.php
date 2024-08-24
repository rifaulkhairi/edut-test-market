<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory;

    protected $fillable   = ['question', 'paketsoal_id', 'tipetest_id', 'created_by', 'tipe_soal', 'pembahasan'];

    protected $table = 'questions_tbl';

    public function options()
    {
        return $this->hasMany(Option::class);
    }

    public function author()
    {
        return $this->belongsTo(User::class, 'created_by', 'email');
    }
    public function paketsoal()
    {
        return $this->belongsTo(PaketSoal::class, 'paketsoal_id', 'id');
    }

    public function tipetest()
    {
        return $this->belongsTo(TipeTest::class, 'tipetest_id', 'id');
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserAnswer extends Model
{
    use HasFactory;

    protected $fillable = ['question_id', 'percobaan_id', 'answer', 'option_id'];

    protected $table = 'user_answer_tbl';

    public function percobaan_ujian()
    {
        return $this->belongsTo(PercobaanUjian::class, 'percobaan_id');
    }
    public function soal()
    {
        return $this->belongsTo(Question::class, 'question_id');
    }
}

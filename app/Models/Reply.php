<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reply extends Model
{
    use HasFactory;

    protected $fillable = ['comment', 'penilaian_id'];

    protected $table = "reply_penilaian_tbl";

    public function penilaian()
    {
        return $this->belongsTo(Penilaian::class);
    }
}

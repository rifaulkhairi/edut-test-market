<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    use HasFactory;

    protected $fillable = ['email_user', 'paketsoal_id'];

    protected $table = 'cart_tbl';

    public function user()
    {
        return $this->belongsTo(User::class, 'email_user', 'email');
    }

    public function paketsoal()
    {
        return $this->belongsTo(PaketSoal::class, 'paketsoal_id', 'id');
    }
}

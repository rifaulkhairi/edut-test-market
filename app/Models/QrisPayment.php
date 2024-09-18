<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QrisPayment extends Model
{
    use HasFactory;

    protected $fillable = ['order_id', 'expiry_time', 'qr_code_link'];

    protected  $table = 'qris_payment_tbl';

    public function order()
    {
        return $this->belongsTo(Order::class);
    }
}

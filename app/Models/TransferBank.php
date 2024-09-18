<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TransferBank extends Model
{
    use HasFactory;

    protected $fillable = ['order_id', 'expiry_time', 'bank', 'virtual_account'];

    protected $table = 'transfer_bank_payment_tbl';

    public function order()
    {
        return $this->belongsTo(Order::class);
    }
}

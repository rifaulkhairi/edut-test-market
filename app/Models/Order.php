<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = ['email_user', 'status', "qr_code_link", 'payment_type', 'invoice', 'gross_amount', 'invoice', 'expiry_time'];
    protected $table = 'order_tbl';

    public function order_items()
    {
        return $this->hasMany(OrderItem::class);
    }

    public function bankTransfer()
    {
        return $this->hasOne(TransferBank::class);
    }

    public function qrisPayment()
    {
        return $this->hasOne(QrisPayment::class);
    }
}

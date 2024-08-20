<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = ['email_user', 'status', 'pytment_type', 'invoice', 'gross_amount'];
    protected $table = ['order_tbl'];

    public function order_items()
    {
        return $this->hasMany(OrderItem::class);
    }
}
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderItem extends Model
{
    use HasFactory;

    protected $fillable = ['paketsoal_id', 'order_id'];

    protected $table = 'orderitem_tbl';

    public function order()
    {
        return $this->belongsTo(Order::class, 'order_id', 'id');
    }

    public function paketsoal()
    {
        return $this->belongsTo(PaketSoal::class, 'paketsoal_id', 'id');
    }
}

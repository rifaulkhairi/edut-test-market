<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserData extends Model
{
    use HasFactory;

    protected $table = 'user_data_tbl';

    protected $fillable = ['email', 'provinsi', 'kabupaten', 'nohp'];
}

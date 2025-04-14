<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Donatur extends Model
{
    use HasFactory;

    // Pastikan kolom yang bisa diisi sesuai dengan kolom yang ada di database
    protected $fillable = [
        'id', 'branch_id', 'employee_id', 'identification_number', 'name'
    ];

    protected $keyType = 'string';
    public $incrementing = false; 
}

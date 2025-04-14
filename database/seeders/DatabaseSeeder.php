<?php

declare(strict_types=1);

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // Menggunakan User::factory() untuk membuat data user
        User::factory()->create([
            'name' => 'Administrator',
            'email' => 'admin@fromhome.dev',
            'is_super_admin' => true,
        ]);

        User::factory()->create([
            'name' => 'Muhammad Ismail',
            'email' => 'ismail@gmail.com',
            'is_super_admin' => true,
        ]);
    }
}

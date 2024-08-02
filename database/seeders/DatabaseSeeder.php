<?php

namespace Database\Seeders;

use App\Models\PaketSoal;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        DB::table('users')->delete();

        $users = [
            ['name' => 'admin', 'email' => 'admin@gmail.com', 'userType' => 'admin'],
            ['name' => 'editor', 'email' => 'editor@gmail.com', 'userType' => 'editor'],
            ['name' => 'user1', 'email' => 'user1@gmail.com'],
            ['name' => 'user2', 'email' => 'user2@gmail.com'],

        ];
        foreach ($users as $user) {
            User::factory()->create($user);
        }

        PaketSoal::factory(1)->create();
    }
}

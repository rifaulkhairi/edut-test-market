<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\PaketSoal>
 */
class PaketSoalFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => 'Soal SKD Kendinasan 202' . rand(0, 4),
            'description' => fake()->text(500),
            'price' => rand(100000, 200000),
            'terjual' => rand(0, 1000),
            'discount' => rand(0, 100) / 100,
            'link_cover' => 'cover/D9t9R2hfHmh0bxv3jRpgMW0EuPHwb51l7ZYZu6ZQ.png',


        ];
    }
}

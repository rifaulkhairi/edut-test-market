<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Question>
 */
class QuestionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'question' => fake()->text(40),
            'tipetest_id' => rand(0, 2),
            'paketsoal_id' => 0,
            'tipe_soal' => 'pg',
            'pembahasan' => fake()->text(40),
        ];
    }
}

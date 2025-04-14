<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\Donatur;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Donatur>
 */
class DonaturFactory extends Factory
{
    /**
     * Nama model yang terkait dengan factory
     * 
     * @var string
     */
    protected $model = Donatur::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    
    public function definition(): array
    {
        return [
            'id' => $this->faker->uuid(),
            'branch_id' => $this->faker->uuid(),
            'employee_id' => $this->faker->uuid(),
            'identification_number' => $this->faker->phoneNumber(),
            'name' => $this->faker->name(),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}

<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

final class EmployeesController extends Controller
{
    public function index()
    {
        return Inertia::render('Employees', [
            'employees' => [
                ['name' => 'John Doe', 'position' => 'Manager'],
                ['name' => 'Jane Smith', 'position' => 'Developer'],
            ],
        ]);
    }
}

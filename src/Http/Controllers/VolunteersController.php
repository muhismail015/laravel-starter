<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class VolunteersController extends Controller
{
    public function index()
    {
        return Inertia::render('Volunteers', [
            'volunteers' => [
                ['name' => 'Alice Johnson', 'role' => 'Coordinator'],
                ['name' => 'Bob Brown', 'role' => 'Assistant'],
            ],
        ]);
    }
}

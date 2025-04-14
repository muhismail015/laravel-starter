<?php

namespace App\Http\Controllers;

use App\Models\Donatur;
use Inertia\Inertia;

class DonaturController extends Controller
{
    public function index()
    {
        $donatur = Donatur::all();
        return Inertia::render('Donatur', [
            'donatur' => $donatur,
        ]);
    }
}

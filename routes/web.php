<?php

declare(strict_types=1);

use Laravel\Fortify\Features;
use Illuminate\Routing\Router;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DonaturController;
use App\Http\Controllers\EmployeesController;
use App\Http\Controllers\PencatatanAktivitasController;
use App\Http\Controllers\ProfileInformationController;
use App\Http\Controllers\VolunteersController;

Route::prefix('/')->group(static function (Router $router): void {
    $router->middleware('auth')->group(static function (Router $router): void {
        $router->redirect('/', '/dashboard');
        $router->get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
        // Menus
        $router->get('/employees', [EmployeesController::class, 'index'])->name('employees');
        $router->get('/volunteers', [VolunteersController::class, 'index'])->name('volunteers');
        $router->get('/donatur', [DonaturController::class, 'index'])->name('donatur');
        // Actions
        $router->get('/pencatatan-aktivitas', [PencatatanAktivitasController::class, 'index'])->name('pencatatan-aktivitas');

        if (Features::enabled(Features::updateProfileInformation())) {
            $router->get('/profile', [ProfileInformationController::class, 'show']);
        }
    });
});


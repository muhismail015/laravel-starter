<?php

declare(strict_types=1);

namespace App\Providers;

use App\Navigation\Navigation;
use App\Navigation\NavigationItem;
use App\Navigation\NavigationGroup;
use App\Navigation\NavigationManager;
use Illuminate\Support\ServiceProvider;

final class NavigationServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->singleton(NavigationManager::class);

        $this->registerNavigationGroups();
    }

    private function registerNavigationGroups(): void
    {
        Navigation::registerNavigationGroups([
            NavigationGroup::new()->menus([
                NavigationItem::new()
                    ->label('Dashboard')
                    ->href('/')
                    ->icon('gauge'),
            ]),
            NavigationGroup::new()->label('Menus')->icon('square-menu')->menus([
                NavigationItem::new()
                    ->label('Employees')
                    ->href('/employees')
                    ->icon('users'),
                NavigationItem::new()
                    ->label('Volunteers')
                    ->href('/volunteers')
                    ->icon('heart-handshake'),
            ]),
            NavigationGroup::new()->label('Actions')->icon('square-pen')->menus([
                NavigationItem::new()
                    ->label('Donatur')
                    ->href('/donatur')
                    ->icon('square-menu'),
                NavigationItem::new()
                    ->label('Pencatatan Aktivitas')
                    ->href('/pencatatan-aktivitas')
                    ->icon('notebook-pen'),
            ]),
        ]);
    }
}

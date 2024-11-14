<?php

use App\Http\Controllers\AboutMeController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\ProjectsController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});

Route::get('/about', [AboutMeController::class, 'index'])->name('about');
Route::get('/project', [ProjectsController::class, 'index'])->name('project');
Route::get('/blog', [BlogController::class, 'index'])->name('blog');

require __DIR__ . '/admin.php';

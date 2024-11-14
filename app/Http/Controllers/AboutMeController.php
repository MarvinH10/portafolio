<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class AboutMeController extends Controller
{
    public function index()
    {
        return Inertia::render("Portafolio/About/index");
    }
}
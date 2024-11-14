<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class ProjectsController extends Controller
{
    public function index()
    {
        return Inertia::render("Portafolio/Project/index");
    }
}

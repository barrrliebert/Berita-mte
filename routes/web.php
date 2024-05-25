<?php
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    $response = Http::get('https://api-berita-indonesia.vercel.app/antara/dunia');
    $data = $response->json();
    
    return Inertia::render('Test', [
        'data' => $data['data']
    ]);
});



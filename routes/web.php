<?php

use App\Http\Controllers\ConcertController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});

Route::get('/koncertek',[ConcertController::class,'index']);
Route::post('/koncertek',[ConcertController::class,'store']);
Route::put('/koncertek/{id}',[ConcertController::class,'update']);
Route::delete('/koncertek/{id}',[ConcertController::class,'destroy']);
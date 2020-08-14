<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/login', ['uses' => 'AuthController@login']);
Route::post('/register', ['uses' => 'AuthController@register']);

Route::get('/countries', ['uses' => 'API\CountriesController@index'])->middleware('auth:api');;



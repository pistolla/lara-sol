<?php

use App\Http\Controllers\Api\CountiesApiController;
use App\Http\Controllers\Api\DashboardApiController;
use App\Http\Controllers\Api\FarmerApiController;
use App\Http\Controllers\Api\FarmTypesApiController;
use App\Http\Controllers\Api\PermissionApiController;
use App\Http\Controllers\Api\ProducesApiController;
use App\Http\Controllers\Api\RoleApiController;
use App\Http\Controllers\Api\WardsApiController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('counties', CountiesApiController::class);
Route::resource('farmers', FarmerApiController::class);
Route::resource('farm-types', FarmTypesApiController::class);
Route::resource('permissions', PermissionApiController::class);
Route::resource('produces', ProducesApiController::class);
Route::resource('roles', RoleApiController::class);
Route::resource('wards', WardsApiController::class);
Route::resource('dashboard', DashboardApiController::class);
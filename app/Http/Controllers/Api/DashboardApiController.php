<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Farmer;
use Carbon\Carbon;
use Illuminate\Http\Request;

class DashboardApiController extends Controller
{
    public $types = [
        'Arable',
        'Pastoral',
        'Poultry',
        'Mixed',
        'Commercial',
        'Subsistence',
        'Extensive_intensive',
        'Sedentary',
        'Nomadic',
        'Organic',
        'Aquaculture'
    ];
    
    /**
     * @OA\Get(path="/api/dashboard", 
     *   description="Get all Dashboard",       
     *   operationId="getDashboard",
     *   tags={"Dashboard"},
     *    @OA\Parameter(
     *          name="filter",
     *          description="Filter column",
     *          required=true,
     *          in="query",
     *          @OA\Schema(
     *              type="string"
     *          )
     *     ),
     *    @OA\Parameter(
     *          name="specify",
     *          description="Specify value",
     *          required=false,
     *          in="query",
     *          @OA\Schema(
     *              type="string"
     *          )
     *     ),
     *   @OA\Response(response=200, 
     *     description="OK",
     *     @OA\JsonContent()
     *   ),
     *   @OA\Response(response=401, description="Unauthorized"),
     *   @OA\Response(response=404, description="Not Found")
     * )
     */
    public function index()
    {
        $data = [];
        if(request()->get('filter')){
            $county = request()->get('filter');
            if($county == 'county'){
                $data = Farmer::whereIn('farm_type', $this->types)->get()->groupBy('county')->reduce(function($a = [], $group) {
                    $count = $group->count();
                    $county = $group->first()->county;
                    $a[$county] = $count;
                    return $a;
                });
            } else if($county == 'dob'){
                $today = Carbon::now();
                $sub18 = $today->subYears(18);
                $today = Carbon::now();
                $sub35 = $today->subYears(35);
                $data = Farmer::whereDate('dob', '<=', $sub18)->whereDate('dob', '>=', $sub35)->get()->groupBy('county')->reduce(function($a = [], $group) {
                    $count = $group->count();
                    $county = $group->first()->county;
                    $a[$county] = $count;
                    return $a;
                });
            } else if($county == 'farm_type'){
                $data = Farmer::whereIn('farm_type', $this->types)->get()->groupBy('farm_type')->reduce(function($a = [], $group) {
                    $count = $group->count();
                    $farm_type = $group->first()->farm_type;
                    $a[$farm_type] = $count;
                    return $a;
                });
            } else if($county == 'status'){
                $data = Farmer::whereIn('farm_type', $this->types)->get()->groupBy('status')->reduce(function($a = [], $group) {
                    $count = $group->count();
                    $status = $group->first()->status;
                    $a[$status] = $count;
                    return $a;
                });
            }
        }
        return $data;
    }
}

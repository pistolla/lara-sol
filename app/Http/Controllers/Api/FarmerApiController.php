<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\FarmerResource;
use App\Models\Farmer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class FarmerApiController extends Controller
{
    
    /**
     * @OA\Get(path="/api/farmers", 
     *   description="Get all Farmers",       
     *   operationId="getFarmersList",
     *   tags={"Farmers"},
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
        $farmers =  (new Farmer)->newCollection();
        if(request()->get('search')){
            $searchToken = request()->get('search');
            $filterCol = request()->get('filter');
            $filterValue = request()->get('value');
            if($filterCol == 'status' && $filterValue) {
                $farmers = DB::table('farmers')
                ->where('national_id','LIKE','%'.$searchToken.'%')
                ->addWhere('status','=',$filterValue)
                ->orWhere('first_name','LIKE','%'.$searchToken.'%')
                ->orWhere('last_name','LIKE','%'.$searchToken.'%')
                ->orWhere('phone','LIKE','%'.$searchToken.'%')
                ->orWhere('email','LIKE','%'.$searchToken.'%')
                ->get();
            } else {
                $farmers = DB::table('farmers')
                    ->where('national_id','LIKE','%'.$searchToken.'%')
                    ->orWhere('first_name','LIKE','%'.$searchToken.'%')
                    ->orWhere('last_name','LIKE','%'.$searchToken.'%')
                    ->orWhere('phone','LIKE','%'.$searchToken.'%')
                    ->orWhere('email','LIKE','%'.$searchToken.'%')
                    ->get();
            }
        } else {
            $filterCol = request()->get('filter');
            $filterValue = request()->get('value');
            if($filterCol == 'status' && $filterValue) {
                $farmers = DB::table('farmers')
                    ->where('status','=',$filterValue)
                    ->get();
            } else {
                $farmers = Farmer::paginate(50);
            }
        }
        return FarmerResource::collection($farmers);
    }

    /**
     * @OA\Post(
     *      path="/api/farmers",
     *      operationId="storeFarmers",
     *      tags={"Farmers"},
     *      summary="Store new Farmer",
     *      description="Returns farmer data",
     *      @OA\RequestBody(
     *          required=true,
     *          @OA\JsonContent(ref="#/components/schemas/StoreFarmerRequest")
     *      ),
     *      @OA\Response(
     *          response=201,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/Farmer")
     *       ),
     *      @OA\Response(
     *          response=400,
     *          description="Bad Request"
     *      ),
     *      @OA\Response(
     *          response=401,
     *          description="Unauthenticated",
     *      ),
     *      @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *      )
     * )
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * @OA\Get(
     *      path="/api/farmers/{id}",
     *      operationId="getFarmerById",
     *      tags={"Farmers"},
     *      summary="Get farmer information",
     *      description="Returns farmer data",
     *      @OA\Parameter(
     *          name="id",
     *          description="Farmer id",
     *          required=true,
     *          in="path",
     *          @OA\Schema(
     *              type="integer"
     *          )
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/Farmer")
     *       ),
     *      @OA\Response(
     *          response=400,
     *          description="Bad Request"
     *      ),
     *      @OA\Response(
     *          response=401,
     *          description="Unauthenticated",
     *      ),
     *      @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *      )
     * )
     */
    public function show($id)
    {
        //
    }

    /**
     * @OA\Put(
     *      path="/api/farmers/{id}",
     *      operationId="updateFarmers",
     *      tags={"Farmers"},
     *      summary="Update existing farmer",
     *      description="Returns updated farmer data",
     *      @OA\Parameter(
     *          name="id",
     *          description="County id",
     *          required=true,
     *          in="path",
     *          @OA\Schema(
     *              type="integer"
     *          )
     *      ),
     *      @OA\RequestBody(
     *          required=true,
     *          @OA\JsonContent(ref="#/components/schemas/UpdateFarmerRequest")
     *      ),
     *      @OA\Response(
     *          response=202,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/Farmer")
     *       ),
     *      @OA\Response(
     *          response=400,
     *          description="Bad Request"
     *      ),
     *      @OA\Response(
     *          response=401,
     *          description="Unauthenticated",
     *      ),
     *      @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *      ),
     *      @OA\Response(
     *          response=404,
     *          description="Resource Not Found"
     *      )
     * )
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * @OA\Delete(
     *      path="/api/farmers/{id}",
     *      operationId="deleteFarmer",
     *      tags={"Farmers"},
     *      summary="Delete existing farmer",
     *      description="Deletes a record and returns no content",
     *      @OA\Parameter(
     *          name="id",
     *          description="Farmer id",
     *          required=true,
     *          in="path",
     *          @OA\Schema(
     *              type="integer"
     *          )
     *      ),
     *      @OA\Response(
     *          response=204,
     *          description="Successful operation",
     *          @OA\JsonContent()
     *       ),
     *      @OA\Response(
     *          response=401,
     *          description="Unauthenticated",
     *      ),
     *      @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *      ),
     *      @OA\Response(
     *          response=404,
     *          description="Resource Not Found"
     *      )
     * )
     */
    public function destroy($id)
    {
        //
    }
}

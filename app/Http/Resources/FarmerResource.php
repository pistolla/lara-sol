<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class FarmerResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'national_id' => $this->national_id,
            'first_name' => $this->first_name,
            'last_name' => $this->last_name,
            'gender' => $this->gender,
            'dob' => $this->dob,
            'email' => $this->email,
            'phone' => $this->phone,
            'status' => $this->status,
            'county' => $this->county,
            'ward' => $this->ward,
            'village' => $this->village,
            'farm_type' => $this->farm_type,
            'produce' => $this->produce,
            'farm_house' => $this->farm_house,
            'terms' => $this->terms
        ];
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Concert;
use Illuminate\Http\Request;

class ConcertController extends Controller
{
    public function index(){
        $concert =  Concert::all();
        return $concert;
    }
    
    public function show($id)
    {
        $concert = Concert::find($id);
        return $concert;
    }
    public function destroy($id)
    {
        Concert::find($id)->delete();
    }
    public function store(Request $request)
    {
        $concert = new Concert();
        $concert->eloado = $request->eloado;
        $concert->hely = $request->hely;
        $concert->datum = $request->datum;
        $concert->vanejegy = $request->vanejegy;
        $concert->save();
    }

    public function update(Request $request, $id)
    {
        $concert = Concert::find($id);
        $concert->eloado = $request->eloado;
        $concert->hely = $request->hely;
        $concert->datum = $request->datum;
        $concert->vanejegy = $request->vanejegy;
    }

}

<?php

use App\Models\Concert;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('concerts', function (Blueprint $table) {
            $table->id();
            $table->longText('eloado');
            $table->longText('hely');
            $table->date('datum');
            $table->boolean('vanejegy');
            $table->integer('jegyar')->nullable();
            $table->timestamps();
        });

        Concert::create(['eloado'=>'Bullet For My Valentine', 'hely'=> 'Barba Negra Red Stage','datum'=>'2022.02.10','vanejegy'=>0,'jegyar'=>'13990']);
        Concert::create(['eloado'=>'Alestorm', 'hely'=> 'Barba Negra Red Stage','datum'=>'2022.01.09','vanejegy'=>1,'jegyar'=>'7990']);
        Concert::create(['eloado'=>'Palaye Royal', 'hely'=> 'Barba Negra Red Stage','datum'=>'2022.02.24','vanejegy'=>0,'jegyar'=>'13990']);
        Concert::create(['eloado'=>'Russkaja', 'hely'=> 'Barba Negra Red Stage','datum'=>'2022.04.10','vanejegy'=>0,'jegyar'=>'9990']);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('concerts');
    }
};

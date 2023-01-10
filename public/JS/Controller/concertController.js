import concertModel from "../model/concertModel.js";
import concertsView from "../view/concertsView.js";

class concertController {
    constructor() {
        console.log("concertController");
        const token = $('meta[name="csrf-token"]').attr("content");
        this.vegpont = "/koncertek";
        const concertmodel = new concertModel(token);
        console.log(this.vegpont,"controller");

        $("#nincsmas").on("click", ()=>{
            concertmodel.adatBe(this.vegpont,this.concertEsemeny)
        })


        $(window).on("modositElem",(event)=>{
            //console.log("controllerben modosit", event.detail);
            concertmodel.adaModosit(this.vegpont,event.detail);
        })

        $(window).on("megveszElem",(event)=>{
            //console.log("Controllerbe módosit",event.detail);
            concertmodel.adahelp(this.vegpont,event.detail);
        })
    }

    concertEsemeny(tomb) {
        console.log(tomb);
        const szuloelem=$("main");
        new concertsView(tomb,szuloelem); 
    }

}
export default concertController;
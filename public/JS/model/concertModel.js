class concertModel {
    #koncertekTomb = [];
    constructor(token) { this.token = token; }

    adatBe(vegpont,calllback){
        fetch(vegpont,{
            method: "GET",
            headers:{
                "Content-Type":"application/json",
                //"X-CSRF-TOKEN": this.token,
            },
          
        })
        .then((response)=>response.json())
        .then((data)=>{
            console.log("Új adat"+data);
            calllback(data);
        })
        .catch((error)=>{
            console.error("Error:", error)
        })
    }

    adatModosit(vegpont,adat){
        console.log(adat);
        console.log("Módosít"+ vegpont);
        vegpont += "/" + adat.id;
        fetch(vegpont,{
            method: "PUT",
            headers:{
                "Content-Type":"application/json",
                "X-CSRF-TOKEN": this.token,
            },
            body:JSON.stringify(adat),
        })
        .then((response)=>response.json())
        .then((data)=>{
            console.log("MÓDOSÍTottam"+data.updatedAt);
        })
        .catch((error)=>{
            console.error("Error:", error)
        })
    }
    adatTorol(vegpont,adat){
        console.log("TÖRÖLTEM: ");
        console.log(adat);
        vegpont += "/" + this.adatModosit.id;
        console.log(vegpont);
        fetch(vegpont,{
            method: "DELETE",
            headers:{
                "X-CSRF-TOKEN": this.token,
            },
            body:JSON.stringify(adat),
        })
        .then()
        .then(()=>{
            console.log("Sikeres törlés");
        })
        .catch((error)=>{
            console.error("Error:", error)
        })
    }

   

    adaModosit(adat){
        console.log(adat,"modell");
    }
    adaTorol(adat){
        console.log(adat);
    }

    adahelp(adat){
        console.log(adat);
    }
}

export default concertModel;
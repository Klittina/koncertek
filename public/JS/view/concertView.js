console.log("Conew");

class concertView {

    #elem;
    constructor(elem, szuloElem) {
        this.#elem = elem;
        //egy sort megkell jeleníteni
        szuloElem.append(`<tr>
        <td>ID: ${elem.id}</td>
        <td>Előadó: ${elem.eloado}</td>
        <td>Helyszín: ${elem.hely}</td>
        <td>Dátum: ${elem.datum}</td>
        <td>Van e jegyem: ${elem.vanejegy}</td>
        <td>JegyÁr: ${elem.jegyar}</td>
        <td><button id="mod${elem.id}">Módosít</button></td>
        <td><button id="del${elem.id}">Töröl</button></td>
        </tr>`);
        this.tablaElem = szuloElem.children("table:last-child");
    
        //gombok eseménykezelői

        this.sorElem=szuloElem.children("tr:last-child");
        this.modositElem=$(`#mod${elem.id}`);
        this.torolElem=$(`#del${elem.id}`);

        this.modositElem.on("click", ()=>{
            console.log("hi");
            this.kattintasTrigger("modositElem");
        })

        this.torolElem.on("click",()=>{
            console.log("Töröltem");
            this.kattintasTrigger("torolElem");
        })
        
    }

    kattintasTrigger(esemenynev){
        console.log("modosit a triggerbe",esemenynev);
        const esemeny=new CustomEvent(esemenynev,{detail:this.#elem});
        window.dispatchEvent(esemeny);
    }


}

export default concertView;
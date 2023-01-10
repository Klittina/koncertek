import concertView from "./concertView.js";
console.log("Concertsview");
class concertsView {
    
    constructor(tomb, szuloElem) {
        szuloElem.html(`<div class="foDiv"><header>Koncertek</header></div>`);
        this.divElem = szuloElem.children("div:last-child");

        
        tomb.forEach(koncert => {
            const koncertem = new concertView(koncert,this.divElem);
        });
    }
    
}

export default concertsView;
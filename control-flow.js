//IF -> se la condizione è true (per forza boolean) esegue il codice fra le graffe altrimenti no

// const pippo = 5;
// const pluto = 8;

// if (pippo > pluto) {
//     console.log("evvivaaaaaaaaa");
// }


// IF ELSE -> funziona uguale ma se la condizione è false esegue il codice nelle graffe dell"else'

// const pippo = 5;
// const pluto = 3;


// if (pippo < pluto) {
//     console.log("wella");
    
// } else {
//     console.log("nooooo");
    
// }


//IF - ELSE If - ELSE -> 

// const candy = prompt("quante caramelle hai mangiato ieri?");

// const candyNumber = Number(candy);



// if (candyNumber === 0) {
//     alert("sei a dieta?")
// } else if (candyNumber < 5) {
//     alert("ebbrav!!")
// } else if (candyNumber < 20) {
//     alert("non spaziare")
// } else if (candyNumber < 100) {
//     alert("scimunito")
// } else {
//     alert("diabete pieno")
// }
   

const eta = prompt("quanti anni hai?");

const etaNumber = Number(eta);

if (eta === 0) {
    alert("devi ancora nascere?")
} else if (eta < 15) {
    alert("pischello")
} else if (eta > 29) {
    alert("ti ricordi netlog?")
} else if (eta > 60) {
    alert("boomerone")
} else {
    alert("come sai usare un computer?")
}
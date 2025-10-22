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


// const eta = prompt("quanti anni hai?");

// const etaNumber = Number(eta);

// if (eta < 1) {
//     alert("devi ancora nascere?")
// } else if (eta <= 15) {
//     alert("pischellissimo")
// } else if (eta <= 29) {
//     alert("pischello")
// } else if (eta <= 60) {
//     alert("ti ricordi myspace?")
// } if (eta > 60) {
//     alert("come sai usare un computer?")
// }



//CICLI servono per ripetere un certo blocco di codice per un certo numero di volte


//WHILE

// let counter = 0;

// while (counter < 20) { //finchè la condizione è vera il codice dentro le graffe verrà ripetuto

//     console.log('ciao! ' + counter);

//     counter++;

// }

// console.log("sono uscito dal while");



// let outputString = '';

// while(outputString.length < 100){
//     outputString = outputString + 'pippo'; //boh non so a cosa possa servire
// }

// console.log(outputString);



// while (true) {

//     const number = prompt("indovina il numero che ho pensato");
//     const numberConverted = Number(number);

//     if (numberConverted === 20) {
//         alert("hai vinto!!!");
//         break; //impedisce al codice di ripetersi di nuovo
//     } else {
//         alert("hai perso, prova di nuovo");
//     }
// }

// console.log("gioco finito");


//DOWHILE //non si usa spesso

// let counter = 0;

// do {

//     console.log('ciao! ' + counter);

//     counter++;

// } while (counter < 0);

// console.log("sono uscito dal do while"); 

////si usa il dowhile quando bisogna eseguire il codice almeno una volta anche se la condizione è falsa



//FOR - quello più usato, sintassi più corta

// for (let i = 0; i < 20; i++) {
//     console.log("ciao! " + i);
// }

// console.log("sono uscito dal ciclo for");


// for (let i = 20; i > 0 ; i--) {
//     console.log("ciao! " + i); 
// } //stessa cosa ma codice gira all'inverso


// for (let i = 0; i <= 100; i += 5) {
//     console.log("ciao! " + i);
// } //stesso discorso ma a step invece che 1 alla volta


// for (;;) { // ";;" funge da while

//     const number = prompt("indovina il numero che ho pensato");
//     const numberConverted = Number(number);

//     if (numberConverted === 20) {
//         alert("hai vinto!!!");
//         break; //impedisce al codice di ripetersi di nuovo
//     } else {
//         alert("hai perso, prova di nuovo");
//     }

// }

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {

        console.log("riga: " + j + " colonna: " + i);

    } //FOR nestati dentro altri for, il 'for' nestato verrà calcolato prima del primo 'for'
} //finito il codice dentro al 'for' nestato verrà eseguito quello del primo 'for', per poi ritornare al 'for' nestato (pensala come uno spazio bidimensionale)







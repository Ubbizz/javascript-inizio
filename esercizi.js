//1) chiedete all'utente il nome e fategli gli auguri di compleanno
//2) chiedete all'utente la base e l'esponente e calcolate la potenza
//3) chiedete all'utente un numero e ditegli se è pari o dispari (operatore modulo)
//4) fate inserire all'utente l'età e se è maggiore o uguale a 18 rispondete "puoi entrare"
//5) fate inserire all'utente una stringa e convertitela in maiuscolo (cercare su internet)

//1

// const firstName = prompt("Come ti chiami?");
// alert("Tanti auguri a " + firstName);


//2

// const numberOne = prompt("Dimmi la base");
// const numberTwo = prompt("Dimmi l'esponente");

// const n1Converted = Number(numberOne);
// const n2Converted = Number(numberTwo);

// const result = n1Converted**n2Converted; 
// alert("Il risultato è " + result);


//3

// const numb = prompt("Dimmi un numero");

// const numbConverted = Number(numb);

// const isEven = numbConverted%2 === 0;

// if (isEven === true) {
//     alert("Il tuo numero è pari")
// } else {
//     alert("il tuo numero è dispari")
// }


//4

// const age = prompt("Quanti anni hai?");

// const ageNumber = Number(age);

// if (ageNumber >= 18 ) {
//     alert("Puoi entrare")
// } else {
//     alert("Non puoi entrare")
// }


//5

// let words = prompt("Dimmi qualcosa a babbo");

// let wordsUpperCase = words.toUpperCase();
//// let wordsUpperCase = words.toLocaleUpperCase(); //Locale prende in considerazione il luogo fisico, magari in altri paesi la conversione in maiuscolo funziona diversamente es. giappo

// alert(wordsUpperCase);


//6 fai un ciclo for che stampi il quadrato dei numeri da 1 a 100

// for (let i = 1; i <= 100; i++) {

//     const square = i ** 2;
//     console.log(square);

// }


//7 fai un ciclo per i numeri da 1 a 100 stampi pari se il numero è pari, e dispari se il numero è dispari

// for (let i = 1; i < 101; i++) {

//     if (i % 2 === 0) {
//         console.log("pari " + i);
//     } else {
//         console.log("dispari " + i);
//     }

// }


//ESERCIZI IN AUTONOMIA GUARDALI SULLA REPO DEL PROF

//* 22/10 Leggiti il primo e il secondo capitolo di Eloquent Javascript, in fondo al secondo capitolo ci sono 3 esercizi, falli
//* ripeti esercizi 6 e 7 con while o dowhile 
//* 8) usando un ciclo logga i numeri da 1 a 100 mettendo un asterisco vicino ai multipli di 7
//* 9) usando un ciclo logga i numeri da 1 a 100 mettendo un asterisco vicino ai quadrati perfetti
//* 10) chiedi all'utente un numero (positivo) di partenza e poi logga tutti i numeri dal numero dato fino a 0
//* 11) chiedi all'utente due numeri e logga tutti i numeri pari compresi tra i numeri forniti dall'utente
//* 12) chiedi all'utente quanti anni ha e digli quante ore ha gia' vissuto


// 16) (27/10) Scrivere una funzione che mi dice se un numero è pari

// function checkEven(inputNumber){
//     const isEven = inputNumber % 2 === 0;
//     return isEven;
// }

// const checkEvenLambda = inputNumber => inputNumber % 2 === 0; //notazione più corta se ci son più input mettili (num1, num2)

// const res1 = checkEvenLambda(22);
// console.log(res1);
// const res2 = checkEvenLambda(21);
// console.log(res2);




//sito fiero: javascript.info
//libro Eloquent Javascript
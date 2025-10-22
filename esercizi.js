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
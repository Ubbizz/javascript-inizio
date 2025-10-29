//sito fiero: javascript.info
//libro Eloquent Javascript


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


// 17) scrivere una funzione che moltiplichi una stringa per un numero
// es: se inserisco "cacca" e 3, l'output sarà "caccacaccacacca"


// function multiplyString(inputString, multiplier) {

//     let multipliedString = "";

//     for (let i = 0; i < multiplier; i++) {
//         multipliedString += inputString;
//     }

//     return multipliedString;
// }

// const res3 = multiplyString("cacca", 100);
// console.log(res3);

// //ver con lambda

// const multiplyStringLambda = (inputString, multiplier) => inputString.repeat(multiplier);

// const res4 = multiplyStringLambda("schifo", 100);

// console.log(res4);


//18) Scrivi una funzione che dato un numero mi dice se è intero oppure no


// function checkInteger(n) {
//     const isInteger = n % 1 === 0;
//     return isInteger;
// }


// const checkIntegerLambda = n => n % 1 === 0; //controlla se un numero è intero

// const res5 = checkIntegerLambda(0.5)
// console.log(res5);


//19) Scrivere una funzione che dati in input due numeri ritorni il maggiore


// const num1 = 10;
// const num2 = 9;

// function findMax(num1, num2) {
//     return Math.max(num1, num2);
// }

// console.log(findMax(num1, num2));


//20) Funzione che date in input due stringhe ritorni la più corta


// const str1 = "Ciaoooo";
// const str2 = "Ciaone";

// function shorter(str1, str2) {
//   return (str1.length < str2.length) ? str1 : str2; // ? operatore ternario, funge da if else
// }

// console.log(shorter(str1, str2));


//21) Scrivere una funzione che data in input una stringa ritorni la sua iniziale;


// const str = "Uella"

// function firstLetter(str) {
//   return str[0]; //0 riporta il primo carattere, 1 il secondo etc.
// }

// console.log(firstLetter(str));


//22) Scrivere una funzione una stringa e un numero, loggando la stringa tante volte quante il numero dato


// const str = "papparappaaaa "
// const num = 5

// function repeatString(str, num) {
//   console.log(str.repeat(num));
// }

// repeatString(str, num);

//23) You can get the Nth character, or letter, from a string by writing [N] after the string (for example, string[2]). The resulting value will be a string containing only one character (for example, "b"). The first character has position 0, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.
//Write a function called countBs that takes a string as its only argument and returns a number that indicates how many uppercase B characters there are in the string.
//Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase B characters). Rewrite countBs to make use of this new function.

//24) Inversione di un numero
//Scrivi una funzione invertiNumero che prenda un numero come parametro e restituisca il numero con le cifre invertite (es. 123 → 321).


// function invertiNumero(numero){

//     const numeroStringa = numero.toString();

//     const numeroInvertitoStringa = numeroStringa.split("").reverse().join(""); // "split" separa ogni cifra "reverse" ne inverte l'ordine "join" ricompone la stringa

//     const numeroInvertito = parseInt(numeroInvertitoStringa); //parseInt converte di nuovo in numero

//     return numeroInvertito;
// }

// console.log(invertiNumero(123)); //chiedi perchè non funziona se metto es: 4500


//25) Tabellina
//Scrivi una funzione tabellina che prenda un numero come parametro e stampi in console la tabellina di quel numero fino a 10.


// function tabellina(numero) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${numero} x ${i} = ${numero * i}`); //${} serve per inserire variabili o espressioni dentro una stringa
//   }
// }

// tabellina(7);



//26) Fibonacci
//Scrivi una funzione fibonacci che prenda un numero N come parametro e restituisca l’N-esimo numero della sequenza di Fibonacci.


// function fibonacci(N) {
//   if (N <= 0) return 0;
//   if (N === 1) return 1;

//   let a = 0, b = 1;
//   for (let i = 2; i <= N; i++) { 
//     let temp = a + b;
//     a = b;
//     b = temp;
//   }
//   return b; // Ogni numero è la somma dei due precedenti:
// }


// console.log(fibonacci(0)); // 0
// console.log(fibonacci(1)); // 1
// console.log(fibonacci(6)); // 8  (sequenza: 0, 1, 1, 2, 3, 5, 8)


//27)  Conteggio vocali
//Scrivi una funzione contaVocali che prenda una stringa come parametro e restituisca il numero di vocali presenti.


// function contaVocali(str) {
  
//   const vocali = 'aeiouAEIOU';
//   let conteggio = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (vocali.includes(str[i])) {
//       conteggio++;
//     }
//   }

//   return conteggio;
// }


// console.log(contaVocali("Ciao mondo")); 


//28) Sconto
//Scrivi una funzione applicaSconto che prenda due numeri come parametri (prezzo e percentuale di sconto) e restituisca il prezzo scontato.


// function applicaSconto(prezzo, sconto) {
//   const prezzoScontato = prezzo - (prezzo * sconto / 100);
//   return prezzoScontato;
// }

// console.log(applicaSconto(100, 20)); // Output: 80


//29) Conversione gradi
//Scrivi una funzione convertiGradi che prenda un numero come parametro (gradi Celsius) e restituisca la conversione in Fahrenheit


// function convertiGradi(celsius) {
//   const fahrenheit = (celsius * 9 / 5) + 32;
//   return fahrenheit;
// }

// console.log(convertiGradi(0));   // Output: 32
// console.log(convertiGradi(25));  // Output: 77
// console.log(convertiGradi(-10)); // Output: 14


//30 verifica password
// - scrivi una funzione verificaPassword che prenda una stringa e restituisca true se:
// - almeno 8 caratteri
// - contiene almeno una maiuscola
// - almeno un carattere speciale tra questi "!#@$"
// - non deve contenere la parola cazzo


// function verificaPassword(password) {
//   // Controlla lunghezza minima
//   if (password.length < 8) return false;

//   const haMaiuscola = /[A-Z]/.test(password); // "/[A-Z]/.test controlla la presenza di una maiuscola"

//   const haSpeciale = /[!#@$]/.test(password); //stesso di sopra coi caratteri speciali

//   // Controlla che NON contenga la parola "cazzo" (in qualsiasi combinazione di maiuscole/minuscole)
//   const contieneCazzo = /cazzo/i.test(password); // "/cazzo/i" sta per case insensitive

//   // Tutte le condizioni devono essere vere (tranne l'ultima)
//   return haMaiuscola && haSpeciale && !contieneCazzo; //! operatore di negazione ricorda gli operatoriiiiiiiiiiii
// }

// console.log(verificaPassword("Ciao@2024"));     // true
// console.log(verificaPassword("ciao@2024"));     // false
// console.log(verificaPassword("Ciao2024"));      // false
// console.log(verificaPassword("Cazzo@123"));     // false
// console.log(verificaPassword("Abc!defg"));      // true




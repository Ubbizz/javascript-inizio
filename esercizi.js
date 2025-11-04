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


// function countBs(str){

//     let counter = 0;

//     for (let i = 0; i < str.length; i++) {
        
//         const selectedChar = str[i];
//         const lowerChar = selectedChar.toLowerCase();

//         if (selectedChar === "b") {
//             counter++
            
//         }
        
//     }

//     return counter;
// }

// console.log(countBs("BabbbBeo")); // -> 3
// console.log(countBs("Leonardo")); // -> 0


// function countChar(str, char){

//     let counter = 0;

//     for (let i = 0; i < str.length; i++) {

//         const selectedChar = str[i];
//         const lowerChar = selectedChar.toLowerCase();

//         if (lowerChar === char) {
//             counter++
//         }
//     }

//     return counter

// }

// console.log(countChar("mammamia", "m")); // -> 4
// console.log(countChar("mammamia", "i")); // -> 1


// function countChar(str, char){

//     let counter = 0;

//     for (let i = 0; i < str.length; i++) {

//         const selectedChar = str[i];

//         const selectedLower = selectedChar.toLowerCase();
//         const charLower = char.toLowerCase();

//         if (selectedLower === charLower) {
//             counter++
//         }
//     }

//     return counter

// }

// console.log(countChar("mammamia", "m")); // -> 4
// console.log(countChar("mammamia", "i")); // -> 1
// console.log(countChar("leonardo", "L")); //-> 1


///// ce n'è un altra versione casesensitive sulla repo del prof copiala


//24) Inversione di un numero
//Scrivi una funzione invertiNumero che prenda un numero come parametro e restituisca il numero con le cifre invertite (es. 123 → 321).


// function invertiNumero(numero){

//     const numeroStringa = numero.toString();

//     const numeroInvertitoStringa = numeroStringa.split("").reverse().join(""); // "split" separa ogni cifra "reverse" ne inverte l'ordine "join" ricompone la stringa

//     const numeroInvertito = parseInt(numeroInvertitoStringa); //parseInt converte di nuovo in numero

//     return numeroInvertito;
// }

// console.log(invertiNumero(123)); //chiedi perchè non funziona se metto es: 4500


//// soluzione senza array


// function reverseNumber(nbr) {

//     const nbrToString = String(nbr);

//     let reversed = "";

//     for (let i = nbrToString.length - 1 ; i >= 0 ; i--) {

//         const char = nbrToString[i];

//         reversed += char;
        
//     }

//     const reversedToNumber = Number(reversed);
//     return reversedToNumber;

// }

// console.log(reverseNumber(123345));



//25) Tabellina
//Scrivi una funzione tabellina che prenda un numero come parametro e stampi in console la tabellina di quel numero fino a 10.


// function tabellina(numero) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${numero} x ${i} = ${numero * i}`); //${} serve per inserire variabili o espressioni dentro una stringa
//   }
// }

// tabellina(7);


// function tabellinaEasy(nbr){
//     for (let i = 1; i < 11; i++) {
//         console.log(nbr * i);
//     }
// }

// tabellinaEasy(3);
// tabellinaEasy(9);


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


// function fibo(pos) {

//     let first = 0;
//     let second = 1;

//     if (pos === 1) {
//         return first;
//     } else if (pos === 2){
//         return second;
//     } else if (pos > 2) {

//         let fib;
//         for (let i = 3; i <= pos; i++) {
//             fib = first + second;
//             first = second;
//             second = fib;  
//         }

//         return fib;

//     } else {
//         console.log("ERRORORROROE!!");
        
//     }
    
// }

// console.log(fibo(7));


// console.log(fibonacci(0)); // 0
// console.log(fibonacci(1)); // 1
// console.log(fibonacci(6)); // 8  (sequenza: 0, 1, 1, 2, 3, 5, 8)


// function fiboRecursive(pos) {
    
//     if (pos === 0) {
//         return 0;
//     } else if (pos === 1){
//         return 1;
//     } else {
//         return fiboRecursive(pos - 1) + fiboRecursive(pos - 2);
//     }

// }


//27) Conteggio vocali
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


// function checkPassword(password) {
//   // Controlla lunghezza minima
//   if (password.length < 8) return false;

//   const haMaiuscola = /[A-Z]/.test(password); // "/[A-Z]/.test controlla la presenza di una maiuscola"

//   const haSpeciale = /[!#@$]/.test(password); //stesso di sopra coi caratteri speciali

//   // Controlla che NON contenga la parola "cazzo" (in qualsiasi combinazione di maiuscole/minuscole)
//   const contieneCazzo = /cazzo/i.test(password); // "/cazzo/i" sta per case insensitive

//   // Tutte le condizioni devono essere vere (tranne l'ultima)
//   return haMaiuscola && haSpeciale && !contieneCazzo; //! operatore di negazione ricorda gli operatoriiiiiiiiiiii
// }

// console.log(checkPassword("Ciao@2024"));     // true
// console.log(checkPassword("ciao@2024"));     // false
// console.log(checkPassword("Ciao2024"));      // false
// console.log(checkPassword("Cazzo@123"));     // false
// console.log(checkPassword("Abc!defg"));      // true


/////// ESERCIZI 29/10 ////////


// 31) Somma dei numeri fino a n
// Scrivi una funzione sommaFinoAN(n) che restituisce la somma dei numeri da 1 a n.
// sommaFinoAN(5) -> 1 + 2 + 3 + 4 + 5 -> 15


// function sommaFinoAN(n) {
//   let somma = 0;
//   for (let i = 1; i <= n; i++) {
//     somma += i;
//   }
//   return somma;
// }

//////oppure più efficiente

// function sommaFinoAN(n) {
//   return (n * (n + 1)) / 2;
// }


// console.log(sommaFinoAN(7));


// 32) Conteggio cifre
// Scrivi una funzione contaCifre(num) che restituisce il numero di cifre di un numero
// contaCifre(5) -> 1
// contaCifre(1245) -> 4


// function countNumbers(n) {

//     n = Math.abs(n);

// if (n === 0) return 1;

// return n.toString().length;
// }

// console.log(countNumbers(1234325));


// 33) Somma delle cifre
// Scrivi una funzione sommaCifre(num) che restituisce la somma delle cifre di un numero
// sommaCifre(5) -> 5
// sommaCifre(1245) -> 12


// function sumOfNumbers(n) {

//     num = Math.abs(n); //ritorna il valore assoluto di un numero

//     let sum = 0;

//     for (let digit of n.toString()) { //of significa "di" letteralmente si riferisce a n.toString
//         sum += parseInt(digit); //parseInt converte digit (che è una stringa contenente numeri) in un integer
//     }

//     return sum;
// }

// console.log(sumOfNumbers(1984));


// 34) Conversione valuta
// Scrivi una funzione euroToDollaro(euro) che converte un importo in euro in dollari (1 euro = 1.15 dollari).


// function eurToUsd(eur) {

//     const exchangeRate = 1.15;
//     return eur * exchangeRate;

// }

// console.log(eurToUsd(10));


// 35) Calcolo area rettangolo
// Scrivi una funzione areaRettangolo(base, altezza) che restituisce l’area di un rettangolo.


// function rectangleArea(base, heigth) {
   
//    if (base < 0 || heigth < 0) {
    
//     return "base and heigth must be a positive number";

//    }

//     return base * heigth;

// }

// console.log(rectangleArea(10, 3));


// 36) Calcolo media
// Scrivi una funzione media(a, b, c) che restituisce la media di tre numeri.


// function media(a, b, c) {
//     return (a + b + c) / 3;
// }

// console.log(media(3, 6, 9));


// 37) Generatore di password casuale
// Scrivi una funzione generaPasswordCasuale() che restituisce una password di 8 caratteri usando solo lettere maiuscole e numeri (usa Math.random())


// function generateRandomPassword() {
//   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
//   let password = '';

//   for (let i = 0; i < 8; i++) {
//     const randomIndex = Math.floor(Math.random() * characters.length); // The Math.floor() Floor arrotonda verso il basso. Se può usare anche Math.round (più fiero) o Math.sail (Verso l'alto)
//     password += characters[randomIndex];
//   }

//   return password;
// }

// console.log(generateRandomPassword());


// 38) Potenza con ciclo
// Scrivi una funzione potenzaCiclo(base, esponente) che calcola la potenza usando un ciclo.


// function potenzaCiclo(base, esponente) {
//   let result = 1;

//   for (let i = 0; i < esponente; i++) {
//     result *= base;
//   }

//   return result;
// }

// console.log(potenzaCiclo(3, 4));


// 39) Scrivi un validatore di email con queste regole:
// -deve contenere una @
// -deve contenere un punto posizionato dopo la @
// -le parti di testo prima della @ e tra la @ e il punto devono almeno avere tre lettere
// -il punto non può essere l'ultimo carattere


// function emailValidator(email) {

//     //deve contenere una @
//     const posizioneChiocciola = email.indexOf("@"); //.indexOf trova la posizione della chiocciola nella stringa
//     if (posizioneChiocciola === -1) return false;

//     //controlla se c'è un punto dopo la @
//     const posizionePunto = email.indexOf(".", posizioneChiocciola);
//     if (posizionePunto === -1) return false;

//     // Controlla che il punto non sia l'ultimo carattere
//     if (posizionePunto === email.length - 1) return false;

//      // Testo prima della @
//     const partePrima = email.substring(0, posizioneChiocciola); // The substring() method of String values returns the part of this string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied.
//     if (partePrima.length < 3) return false;

//     // Testo tra la @ e il punto
//     const parteDopo = email.substring(posizioneChiocciola + 1, posizionePunto);
//     if (parteDopo.length < 3) return false;

//     return true;
// }


//con regex perchè fa ridere//

// function emailValidator(email) {
//   return /^[A-Za-z0-9._%+-]{3,}@[A-Za-z0-9.-]{3,}\.[A-Za-z]{2,}$/.test(email);
// }

//provando a capirci qualcosa

// ^ e $ → inizio e fine stringa
// [A-Za-z0-9._%+-]{3,} → almeno 3 caratteri prima della @
// @ obbligatoria
// [A-Za-z0-9.-]{3,} → almeno 3 caratteri tra @ e .
// \. il punto letterale
// [A-Za-z]{2,} almeno 2 lettere dopo il punto (per evitare che finisca con un punto o un solo carattere)
// "/" iniziale e finale per concludere l'espressione?
// "_%+-" e ".-" non ho idea di che siano, magari chiedi


// console.log(emailValidator("abc@xyz.com")); //true
// console.log(emailValidator("ab@xyz.com")); //false solo due lettere prima della @
// console.log(emailValidator("abc@xy.com")); //false due lettere dopo la @
// console.log(emailValidator("abc@xyz.")); //false punto finale
// console.log(emailValidator("abcxyz.com")); //false manca @


// 40) crea un converitore tra italiano e farfallino(https://it.wikipedia.org/wiki/Alfabeto_farfallino)


// function italianoAFarfallino(testo) {
  
//   let risultato = '';

//   for (let char of testo) {
//     if (/[aeiou]/i.test(char)) {
//       // Se è vocale, aggiungi "f" + stessa consonante
//       risultato += char + 'f' + char.toLowerCase();
//     } else {
//       // Se è consonante o altro, resta invariata
//       risultato += char;
//     }
//   }

//   return risultato;

// }


// console.log(italianoAFarfallino("ziopera"));   // Output: "zifiofopeferafa"
// console.log(italianoAFarfallino("gatto"));  // Output: "gafattofo"
// console.log(italianoAFarfallino("farfallino")); // Output: "fafarfafallifinofo


////// ESERCIZI 03/11 ////////

// 41) creare una funzione che dato un array di numeri li eleva tutti al quadrato


// const pippo = [1, 2, 4, 56, 78, 11, -123, 3, -23, 2, 22, 4];

// function squareArray(nbrArray) {
    
//     const newArray = [];

//     for (let i = 0; i < nbrArray.length; i++) {
        
//         const element = nbrArray[i];

//         const squareElement = element ** 2;

//         newArray.push(squareElement);
        
//     }

//     return newArray;

// }

// console.log(squareArray(pippo)); //-> [1, 4, 16 etc...]



//42) creare una funzione che dato un array di numeri moltiplichi per due quelli positivi e divida per due i negativi

// function multiplyPoisitiveAndDivideNegative(nbrArray) {

//         const newArray = [];


//     for (let i = 0; i < nbrArray.length; i++) {

//         const element = nbrArray[i];


//         if (element >= 0) {

//             const multiplied = element * 2;

//             newArray.push(multiplied);

//         } else {

//             const divided = element / 2;

//             newArray.push(divided);

//         }

        
//     }

//     return newArray;
    
// }

// console.log(multiplyPoisitiveAndDivideNegative(pippo)) //-> [2, 4, 8, 112, 156, 22, -61.5, 6, -11.5, 4, 44, 8];



// 43) Trova il Minimo
// Scrivi una funzione trovaMinimo(array) che restituisce il numero più piccolo in un array di numeri.


// let nbrArray = [20, 10, 22, 44, 35, 0, -1, 1.5, 100, 20];

// function trovaMinimo(a) {

//     const newArray = []
//     let nummin = 1000 ;

//     for (let i = 0; i < a.length; i++) {

//         const element = a[i];
//         if (element < nummin)
//             nummin  = element;
        
//     }
//     return nummin;

    
// }

// console.log(trovaMinimo(nbrArray));


// 44) Inverti Array con un ciclo
// Scrivi una funzione invertiArray(array) che restituisce un nuovo array con gli elementi in ordine inverso.

let nbrArray = [20, 10, 22, 44, 35, 0, -1, 1.5, 100, 20];

function invertArr(n){
    let array= [];

    for(let i = 0; i < n.length; i++){
         array.push( n[n.length-1-i])[i] ;
    }
    return array;
}
console.log(invertArr(nbrArray));


// 45) Maiuscolo Tutte le Parole
// Scrivi una funzione maiuscoloTutto(array) che restituisce un nuovo array con tutte le stringhe in maiuscolo.



// 46) Somma Righe Matrice
// Scrivi una funzione sommaRighe(matrice) che restituisce un array con la somma degli elementi di ogni riga.



// 47) Conta Occorrenze
// Scrivi una funzione contaOccorrenze(array, elemento) che conta quante volte un elemento appare in un array



// 48) Filtra indice pari
// Scrivi una funzione filtraIndicePari(array) che tiene tutti gli elementi in posizione dispari



// 49) Somma pari 
// Scrivi una funzione sommaPari(array) che somma tutti i numeri pari


// 50) trova lunghezze
// Scrivi una funzione trovaLunghezzeParola(array) che restituisce un array delle lunghezze(numeri) delle stringhe che compongono l'array in input







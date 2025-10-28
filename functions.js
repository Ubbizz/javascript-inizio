// console.log('Finalmente le funzioni!!');


// const multiplyBy2 = function(n){ // non si usa

//     const result = n * 2;

//     return result;
// }

// function multiplyBy3(n){ // definizione classica della funzione equivalente alla precedente
//                          // dentro le tonde i parametri in input
//                          // dopo il return il parametro in output

//     const result = n * 3;

//     return result;
// }

// const multiplyBy4 = (n) => { // definizione lambda (arrow function) della funzione equivalente alle precedenti

//     const result = n * 4;

//     return result;
// }

// const multiplyBy5 = n => n * 5; // quando la lambda si puo esprimere in una sola linea, posso omettere graffe e return
//                                 // quando ho un solo parametro in ingresso posso omettere anche le tonde
// function checkMultiple(n1, n2){

//     const isMultiple = n1 % n2 === 0;

//     return isMultiple;
// }

// const checkMultipleLambda = (n1, n2) => {

//     const isMultiple = n1 % n2 === 0;

//     return isMultiple;
// }

// const checkMultipleLambdaShort = (n1, n2) => n1 % n2 === 0;

// function getNow(){ // funzione senza paramtro in ingresso
//     const now = new Date();
//     return now;
// }

// function logUppercase(inputString){ // funzione senza output (ritorna comunque undefined)
//     const inputStringUppercase = inputString.toUpperCase();
//     console.log(inputStringUppercase);
// }

// const pippo = multiplyBy2(100);

// console.log(pippo);

// const pluto = multiplyBy2(300);

// console.log(pluto);

// const paperino = multiplyBy3(5);

// console.log(paperino);

// const paperone = multiplyBy4(3);

// console.log(paperone);

// const gastone = multiplyBy5(5)

// console.log(gastone);

// const qui = checkMultiple(10, 5);

// console.log(qui);

// const quo = checkMultiple(12, 5);

// console.log(quo);

// const qua = getNow();

// console.log(qua)

// const paperinik = logUppercase('ciao ciao');

// console.log(paperinik);

// logUppercase('viva le funzioni!!!')


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// function stringBuilder(s1, s2, s3) {

//     return s1 + s2 + s3;

// }

// console.log(stringBuilder("leonardo", "leo", "nardo"));

// console.log(stringBuilder("leonardo", "leo")); // parametri in meno risulta undefined

// console.log(stringBuilder("leonardo", "leo", "nardo", "onar")); //parametri in più non li conta


// function pow(base = 4, exponent = 2) {

//     // if (exponent == undefined) {
//     //     exponent = 2
//     // }

//     return base ** exponent;

// }

// console.log(pow(3, 3));
// console.log(pow(3)); //NaN se non specifichi base o esponente, o il "0" o "2" nella funzione come comportamento standardù
// console.log(pow());


////////////////////////////////////// BINDINGS AND SSCOPE //////////////////////////////////


// const number = 5

// if( number > 3) {

//     const number2 = number + 5;

//     console.log(number2);

//     if (number2 > 7) {

//         const number3 = number2 + 5

//         console.log(number3);

//     }

//     // console.log(number3); //scope esterno non può accedere alle variabili di quello interno, in questo caso number3
//     // non solo non li vede, ma "non esistono", se fra 100 righe voglio usare "number3" non me lo trova
// }

// const number3 = number2 +5 

// console.log(number3); //da number2 not defined perchè il codice dentro le parentesi graffe (figlio) può vedere il codice del padre (fuori parentesi) ma non viceversa
// // lo scope esterno non accede alle variabili dello scope interno


////// CLOJURE ////// eccezione


// const isOpen = true;

// let myFunction; // scope "padre"

// if (isOpen) {

//     let counter = 0 // scope figlio

//     myFunction = () => {
//         counter++;
//         console.log(counter);

//     } // posso richiamare "counter" perchè l'ho definito prima delle graffe

//     // myFunction()
//     // myFunction()
//     // myFunction()
//     // myFunction()

// }

// myFunction() 
// myFunction()
// myFunction()
// myFunction() //funziona comunque perchè le funzioni se utilizzano una variabile esterna al suo scope, rimangono comunque in "vita"


////// RECURSION ////// possibilità di una funzione di richiamare se stessa es: fattoriale (!) n! = n * (n -1)! // 0! = 1 ricorda
// in informatica si dice fact
// fact(n) = n * fact(n-1);


// function fact(n) {

//     if (n === 0) {
//         return 1;
//     } else {
//         return n * fact(n - 1);
//     }

// }

// console.log(fact(0));
// console.log(fact(1));
// console.log(fact(5));


// function isEven(n) {
//     if (n === 0) {
//         return true;
//     } else if (n === 1){
//         return false;
//     } else {
//         return isEven(n - 2);
//     }
// }

// console.log(isEven(5));
// console.log(isEven(6));


// function isEven(n) { // funzioni che fan ricursione riferendosi l'una con l'altra (inutile?)
//     if (n === 0) {
//         return true;
//     } else {
//     return isOdd(n - 1)
//     }
// }

// function isOdd(n) {
//     if (n === 1) {
//         return false;
//     } else {
//         return isEven(n - 1)
//     }
// }

// console.log(isEven(3));
// console.log(isOdd(3)); //LIBRO: The Little Schemer: libro sulle ricursioni

//La ricorsione (per lo meno in js) occupa un sacco di memoria dunque usala con un criterio


//////////////
///////
//1) se ci sono rimuovere gli spazi prima e dopo*
//2) aggiungere la stringa pippo in fondo*
//3) mettere tutto maiuscolo
//4) ripeterla per il numero di volte del moltiplicatore
//5) aggiungergli in fondo la sua lunghezza
//6) rimuovere tutte le p


// function removePfromString(str){

//     let strWithoutP = '';

//     for (let i = 0; i < str.length; i++) {
        
//         const char = str.charAt(i);

//         if (char !== 'P') {
//             strWithoutP += char;
//         }
        
//     }

//     return strWithoutP;
// }

// function addPippoToString(str){

//     const stringWithPippo = str + 'pippo';

//     return stringWithPippo;
// }

// function addLengthToString(str){

//     const stringWithLength = str + str.length;

//     return stringWithLength;
// }


// function strangeStringFunction(str, multiplier){
    
//     const strWithoutSpaces = str.trim();

//     // const strWithPippo = strWithoutSpaces + 'pippo';

//     const strWithPippo = addPippoToString(strWithoutSpaces)

//     const strUpper = strWithPippo.toUpperCase();

//     const strMultiplied = strUpper.repeat(multiplier);

//     // const strWithLength = strMultiplied + strMultiplied.length;

//     const strWithLength = addLengthToString(strMultiplied)

//     const stringWithoutP = removePfromString(strWithLength);

//     // let strWithoutP = '';

//     // for (let i = 0; i < strWithLength.length; i++) {
        
//     //     const char = strWithLength.charAt(i);

//     //     if (char !== 'P') {
//     //         strWithoutP += char;
//     //     }
        
//     // }
    
//     return stringWithoutP;

// }


// strangeStringFunction('  leonardo bullo!  ', 4)
















// console.log('hello world!');

//boolean
true;
false;

//number
3;
3.14;
-34.4;
Infinity;
-Infinity;

NaN; // Not a number

//String 
'ciaoooooo'
"fratm"
"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita mollitia ullam quasi delectus dolor a sed consequatur dolorum cumque perferendis. Incidunt cumque facere amet debitis recusandae deleniti soluta ducimus! Perferendis!"
'a'
'' // stringhe possono essere vuote

// tipi nulli
undefined // variabile mai stata definita
null // nullo (variabile vuota)

//OPERATORI LOGICI (sempre maiuscoli)


//NOT (!)
true; //vera
!true; //false

false; //falso
!false; //vero

// console.log(!false);


//AND (&&)
true && true; //true
true && false; //false
false && true; //false
false && false; //false

//console.log(true && true);
//console.log(true && false);


//OR (||)
true || true; //true
true || false; //true
false || true; //true
false || false; //false

//console.log(true || true);
//console.log(true || false);
//console.log(true || false);


//OPERATORI MATEMATICI

//+
5 + 10; //15

//-
-3.1; 
90 - 10; //80

//* moltiplicazione (*)
6 * 8; //48

// diviso(/)
9 / 3; //3

// potenza(**)
2**3; //8

// modulo(%) -> rimanda resto della divisione intera
10 % 3; //3 rimane 1
5 % 3; //2

// somma di stringe(+)
"ciao" + "mamma"; //ciaomamma
"ciao" + " " + "mamma"; //ciao mamma
//puoi anche mettere uno spazio prima senza fare la riga sopra


//OPERATORI DI CONFRONTO

//uguaglianza (== o ===) usa il triplo uguale sennò bestemmi

5 === 5; //true
7 === 2; //false

7 === '7'; //false, un numero non è uguale a una stringa
7 == '7'; //true, il doppio uguale costringe una conversione

true === true; //true
true === false; //false

"pippo" === "pippo"; //true
"pippo" === "chicco"; //false


//diversità (!= o !==) stesso discorso di prima, usa il secondo

5 !== 3; //true
5 !== 5; //false

"pippo" !== "pippo"; //false
"pippo" !== "chicco"; //true

//maggiore e maggiore o uguale (> o >=) 
//minore e minore o uguale (< o <=) 

7 > 6; //true
7 > 8; //false
7 > 7; //false
7 >= 7; //true

// parentesi (())

//((5 + 2) * 2 - (4 - 3)); =13


//ESERCIZI
//1
//!(true || true); //false
//2
//!(true || ("pippo" === "pluto")); //false, guarda l'operatore logico
//3
//!((12 % 5) === 3) //true
//4
//("ciao mondo" !== ("ciao" + " " + "mondo")) //false



//VARIABILE



//NON USARE MAI "VAR" USA "LET"

// var firstNumber = 5; // Prima lettera maiuscola per ogni parola aggiuntiva alla prima es: firstSecondThirdFourth
// console.log(firstNumber);

// var secondNumber = 10;

// var sumOfNumbers = firstNumber + secondNumber;
// console.log(sumOfNumbers);

// var empty; //undefined


//LET

// let firstNumber = 5; // Prima lettera maiuscola per ogni parola aggiuntiva alla prima es: firstSecondThirdFourth
// // console.log(firstNumber);

// let secondNumber = 10;

// let sumOfNumbers = firstNumber + secondNumber;
// // console.log(sumOfNumbers);

// let empty; //undefined


// secondNumber = 20;

// let newSumOfNumbers = firstNumber + secondNumber
// // console.log(newSumOfNumbers);

// let firstName = "Mattia";
// let hello = "Ciao" + " " + firstName
// // console.log(hello); //le variabili non han bisogno di virgolette



//DIFFERENZA TRA LET E VAR:



// let pluto = pippo + 30
// let pippo = 5
// console.log(pluto);

// var paperoga = paperino + 30;
// var paperino = 5;
// console.log(paperoga); //il codice esegue dall'alto verso il basso dunque non vede ancora il valore di paperino considerandolo ''undefined'' dunque meglio avere un messaggio di errore nel log di console che incasinarsi e non capire dove sia il problema


//CONSTANTI

const qui = true;
const quo = false;
const qua = qui && quo; 

// qui = false; //non puoi cambiare il valore della costante "qui" ti da errore, ricorda dall'alto verso il basso

// console.log(qua);


//TIPI DI DATI

//type of


// const variabile1 = 3;
// console.log(typeof variabile1); //type of "number"

// const variabile2 = true;
// console.log(typeof variabile2); //true e false dan boolean

// const variabile3 = "axia";
// console.log(typeof variabile3); //stringa

// const variabile4 = typeof variabile1;
// console.log(" il contenuto di variabile 4 è : " + variabile4 + " e il suo tipo è: " + typeof variabile4);

// const variabile5 = 5 > 6;
// console.log(typeof variabile5); //ridà false, che non è un numero come risposta, dunque boolean

// let variabile6;
// console.log(typeof variabile6); //undefined

// let variabile7 = null
// console.log(typeof variabile7); //object

// let variabile8 = NaN
// console.log(typeof variabile8); //Tipo number per qualche arcana ragione

// // javascript è dinamicamente tipato e le variabili prendono il tipo del contenuto che può cambiare nel tempo

// let dynamic;
// console.log(typeof dynamic);

// dynamic = 5;
// console.log(typeof dynamic); //ora è number perchè ho dichiarato un valore

// dynamic = "pippo";
// console.log(typeof dynamic); //ora string 


//ALERT

// alert("uagliò")

// const birthdayGirl = "Salma";

// alert("Auguri " + birthdayGirl)


//PROMPT

// const age = prompt("Quanti anni hai?")

// console.log(age);
// console.log(typeof age); //però prompt restituisce il typeof di age in stringa

//CALCOLATRICE BASE

// const first = prompt ("dammi il primo numero");
// const second = prompt ("dammi il secondo numero");

// const firstToNumber = Number(first); //converte in valore di un dato in "number"
// const secondoToNumber = Number(second);

// const sum = firstToNumber + secondoToNumber;

// alert("la somma è: " + sum);















































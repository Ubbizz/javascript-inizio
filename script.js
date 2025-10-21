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
!(true || true); //false
//2
!(true || ("pippo" === "pluto")); //false, guarda l'operatore logico
//3
!((12 % 5) === 3) //true
//4
("ciao mondo" !== ("ciao" + " " + "mondo")) //false





















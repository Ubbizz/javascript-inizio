// console.log("AAAAAAAAAAAAAAAAAAAAAAAA");

////ARRAY//// contiene più dati alla volta


let numbers = [20, 10, 22, 44, 35, 0, -1, 1.5, 100, 20];

// console.log(numbers.length); // 10

// console.log(numbers[3]); // --> posizione: 44

let booleans = [true, true, true, false, true];

// console.log(booleans.length); // 5

// console.log(booleans[3]); // --> false

let strings = ["pippo", "pluto", "topolino", "leonardo"];

// console.log(strings.length); // 4

// console.log(strings[3]); // --> leonardo

// let strangeArray = [34, false, "leonardo", 2, 4, "leonardo"]; //può contenere tipi diversi NON FARLO MAI MAAAAAAAAAAAAAAAAAI  MAI MAI MAI AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

// console.log(strangeArray.length); // 6

// console.log(strangeArray[3]); // --> 2


// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];

//     console.log(element); //element tira giù tutti i dati inclusi nell'array 
    
// }


// let i = 0;

// while (i < numbers.length) {

//     const element = numbers[i];

//     console.log(element);

//     i++
// }


// for (const element of numbers) { //forof autocompletamento, ma manca la "i" ovvero non sai la posizione dell'elemento
//     console.log(element);
// }


// for (const wella of strings) { //element è de base ci puoi cambiare nome
//     console.log(wella);
// }


//// AGGIUNGERE ELEMENTI /////


// strings.push("paperone"); //.push aggiungi roba
// console.log(strings);


// strings.unshift("ziopera"); //infila un elemento all'inizio
// console.log(strings);


//// RIMUOVERE ELEMENTI /////


// const rimosso = strings.pop() //toglie l'ultimo elemento, ridandocelo anche


// console.log(strings);
// console.log("ho tolto " + rimosso);


// const rimosso2 = strings.shift() //toglie il primo elemento
// console.log(strings);
// console.log("ho tolto " + rimosso2);


// const rimosso3 = strings.splice(2, 1) //toglie l'elemento in mezzo, chiedendo da dove partire e quanti cancellarne (in questo caso "topolino")
// console.log(strings);
// console.log("ho tolto " + rimosso3);


// const rimosso4 = numbers.splice(1,3);
// console.log(numbers);
// console.log(rimosso4); // ho tolto 10,22,44, con splice restituisce un array nel log, se provi a togliere troppi elementi ti lascia il primo e si incazza


///// CAMBIARE GLI ELEMENTI /////


// strings[0] = "superpippo";
// console.log(strings);


// strings[3] = "super" + strings[3]; //le assegnazioni vengono lette da destra verso sinistra
// console.log(strings);


// numbers[4] = 2;
// console.log(numbers);


// numbers[8] = numbers[8] * 2;
// console.log(numbers);


///// PATTERN DEGLI ARRAY /////


// MAPPING -> modifica di tutti o parte degli elementi di un array

// 1) trasforma tutte le stringhe dell'array strings al maiuscolo


// for (let i = 0; i < strings.length; i++) {

//     strings[i] = strings[i].toUpperCase();
    
// }

// console.log(strings);



// function arrayToUppercase(stringArray) { //Questa funzione serve per modificare un array in tempo reale servirà in futuro non so per cosa ma imparala

//    // debugger;

//     const newArray = [];

//     for (let i = 0; i < stringArray.length; i++) {
        
//         const element = stringArray[i];

//         const elementUpper = element.toUpperCase();

//         newArray.push(elementUpper);
        
//     }

//     return newArray;
// }

// console.log(arrayToUppercase(strings));


// 2) moltiplica per due tutti i numeri in un array


// function multiplyBy2Array(numberArray) { //Questa funzione serve per modificare un array in tempo reale servirà in futuro non so per cosa ma imparala

//    // debugger;

//     const newArray = [];

//     for (let i = 0; i < numberArray.length; i++) {
        
//         const element = numberArray[i];

//         const doubleElement = element * 2;

//         newArray.push(doubleElement);
        
//     }

//     return newArray;
// }

// console.log(multiplyBy2Array(numbers));


// 3) Trasforma tutte le parole nella stringa dell'array che iniziano per p al maiuscolo


// function arrayToUppercaseWordsStartingWithP(stringArray) {

//     const newArray = [];

//     for (let i = 0; i < stringArray.length; i++) {
        
//         const element = stringArray[i];

//         if(element[0] === "p"){
//             const elementUpper = element.toUpperCase();
//             newArray.push(elementUpper);
//         } else {
//             newArray.push(element);
//         }
        
//     }

//     return newArray;
// }

// console.log(arrayToUppercaseWordsStartingWithP(strings));




////// FILTER //// decide quali degli elementi dell'array tenere (sempre un pattern)


// funzione che rimuove dagli array tutti i dispari


// function keepEvenNumbers(nbrArray) {

//     const newArray = [];

//     for (let i = 0; i < nbrArray.length; i++) {

//         const element = nbrArray[i];

//         if (element % 2 === 0) {

//             newArray.push(element);

//         }
        
//     }

//     return newArray;
    
// }

// console.log(keepEvenNumbers(numbers));


// // funzione che rimuove tutte le stringhe che iniziano per p


// function removeStartingWithP(strArray) {

//     const newArray = [];

//     for (let i = 0; i < strArray.length; i++) {

//         const element = strArray[i];

//         const firstChar = element[0];

//         const firstCharLower = firstChar.toLowerCase();

//         if (firstChar !== "p") {

//             newArray.push(element);

//         }
    
//     }

//     return newArray;
// }

// strings = removeStartingWithP(strings);

// console.log(removeStartingWithP(strings));


// // funzione che toglie i numeri negativi 


// function keepPositiveNumbers(nbrArray) {

//     const newArray = [];

//     for (let i = 0; i < nbrArray.length; i++) {

//         const element = nbrArray[i];

//         if (element >= 0) {

//             newArray.push(element);

//         }
        
//     }

//     return newArray;
    
// }

// console.log(keepPositiveNumbers(numbers));



////// SEMPRE PATTERN ////// REDUCE -> trasforma l'array producendo un risultato che dipende dai componenti dell'array


//1) scrivi una funzione che somma tutti i numeri di un array di numeri


function summAll(nbrArray) {

    let result = 0;

    for (let i = 0; i < nbrArray.length; i++) {

        const element = nbrArray[i];

        result = result + element;
        
    }

    return result;

}

console.log(summAll(numbers));


// 2) funzione che calcola la media di un array di numeri


function calculateMean(nbrArray) {

    let sum = 0;

    for (let i = 0; i < nbrArray.length; i++) {

        const element = nbrArray[i];

        sum = sum + element;
        
    }

    const mean = sum / nbrArray.length;

    return mean;

}

console.log(calculateMean(numbers));



























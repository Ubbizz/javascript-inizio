// Name string

// età number 

// istruzione string

// sesso string 

// nazionalità string

// stato civile boolean

// indirizzo string

// interessi array 

// const leonardo = { //metti le virgole e basta non ; sennò non funzia
//     name: "leonardo", 
//     surname: "silva", 
//     age: 27, 
//     gender: "maschio", 
//     nationality: "perù", 
//     isMarried: false, 
//     address: {
//         street: "piazza baracca",
//         civic: "100",
//         city: "genova",
//         country: "italia"
//     },
//     interests: ["bouldering", "music", "bullying"]
// }

/// ACCEDERE ALLE PROPRIETÁ

// console.log(leonardo);

// console.log(leonardo.name); //leonardo

// console.log(leonardo.address.street); //piazza baracca, puoi accedere alle sotto proprietà

// console.log(leonardo.interests[0]); //bouldering, puoi accedere alla posizione degli array

/// CAMBIARE O AGGIUNGERE LE PROPRIETÄ

// leonardo.age = 25;

// leonardo.address.civic = 99;

// leonardo.interests[2] = "super bullying"

// leonardo.siblings = 1; // aggiungere proprietà

// delete leonardo.gender //eliminare proprietà

// console.log(leonardo);

/// FUNZIONI COME PROPRIETÁ

// function saluta(){
//     console.log("ciao sono leonardo!!!!!");  
// }

// leonardo.blatera = saluta; //puoi aggiungere la funzione all'oggetto con sta sintassi

// leonardo.blatera() //e invocarla nel log così


////////////////////////////////////////////////////////

const leonardo = {
    name: "leonardo",
    surname: "silva",
    yob: 1998,
    marks: [5, 8, 10, 7]
}

const evelyn = {
    name: "evelyn",
    surname: "medina",
    yob: 1984,
    marks: [9, 8, 10, 9]
}

const luis = {
    name: "luis",
    surname: "amoretti",
    yob: 2004,
    marks: [10, 10, 8, 5]
}

const students = [leonardo, evelyn, luis];

for (let i = 0; i < students.length; i++) {
    const students = students[i];

    console.log(students.name, students.surname);
}














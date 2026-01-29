
// 1a SayHello
// sayHello("Emily");
// function sayHello(firstName){
//     console.log(`Hello ${firstName}`);
// }





// 1b Hvis functionen bliver kaldt på en linje tidligere end den er erklæret på
// sayHello("Emily");

// function sayHello(firstName){
//     console.log(`Hello ${firstName}`);
// }

// SVAR: Svar: Koden virker uden fejl, fordi function declarations bliver hoistet. JavaScript kender funktionen allerede, før den bliver kaldt.



// Hvis functionen bliver kaldt med en variabel der hedder myName?
// let myName = "Emily";
// sayHello(myName);

// function sayHello(firstName){
//     console.log(`Hello ${firstName}`);
// }

// SVAR: Variablens navn er ligegyldigt. Det er værdien, der bliver sendt ind i funktionen. Parameteren firstName modtager værdien "Emily".



// Hvis der er en anden variabel der hedder firstName uden for funktionen
// let firstName = "Mathias";

// sayHello("Emily");

// function sayHello(firstName){
//     console.log(`Hello ${firstName}`);
// }

// SVAR: Den lokale parameter firstName inde i funktionen overskygger den globale variabel. Funktionen bruger sin egen værdi.



// Hvis functionen bliver kaldt uden noget parameter?
// sayHello();

// function sayHello(firstName){
//     console.log(`Hello ${firstName}`);
// }

// SVAR: Parameteren firstName får værdien undefined, fordi der ikke bliver sendt noget argument med.



// Hvis functionen bliver kaldt med firstName og lastName
// sayHello("Emily", "Goldberg");

// function sayHello(firstName){
//     console.log(`Hello ${firstName}`);
// }

// SVAR: Kun det første argument bliver brugt. Ekstra argumenter bliver ignoreret, fordi funktionen kun har én parameter.



// Og hvis functionen bliver kaldt med lastName før firstName
// sayHello("Goldberg", "Emily");

// function sayHello(firstName){
//     console.log(`Hello ${firstName}`);
// }

// SVAR: JavaScript matcher argumenter efter rækkefølge, ikke efter navn. Det første argument bliver sat ind i firstName.




// 2a presentPet
// let firstName = "Emily";
// let animalType = "cat";
// let animalName = "Morti";

function presentPet(firstName, animalType, animalName){
    console.log(`My name is ${firstName}, I have a ${animalType} called ${animalName}`);
}

// presentPet(firstName, animalType, animalName);

// Functionen bliver kaldt med variabler der hedder det samme som parametrene
// let firstName = "Emily";
// let animalType = "cat";
// let animalName = "Morti";

// presentPet(firstName, animalType, animalName);

// SVAR: Det virker helt som forventet. Variablernes navne matcher parametrene, men det er kun værdierne, der bliver sendt ind. Parametrene modtager værdierne i den rækkefølge, de bliver sendt.




// Functionen bliver kaldt med variabler der hedder noget andet?
let myName = "Emily";
let petType = "cat";
let petName = "Morti";

presentPet(myName, petType, petName);

// SVAR: Det virker stadig. JavaScript matcher argumenter og parametre efter rækkefølge, ikke efter navn. Parametrene inde i funktionen får blot de værdier, der bliver sendt ind.



// Functionen bliver kaldt med strings?
// presentPet("Emily", "cat", "Morti");

// SVAR: Det virker også. Her sendes værdierne direkte ind i funktionen uden brug af variabler. Parametrene modtager string-værdierne direkte.



// Functionen bliver kaldt med en blanding af strings og variabler?
// let animalType = "cat";
// let animalName = "Morti";

// presentPet("Emily", animalType, animalName);

// SVAR: Det fungerer uden problemer. JavaScript er ligeglad med, om argumenterne er variabler eller direkte værdier. Så længe rækkefølgen er korrekt, bliver de sat rigtigt ind i parametrene.


// Function bliver kaldt med variabler, men i en anden rækkefølge?
// let myName = "Emily";
// let petType = "cat";
// let petName = "Morti";

// presentPet(petName, myName, petType);


// SVAR: Funktionen kører stadig, men resultatet bliver forkert. JavaScript matcher argumenter efter position, ikke efter betydning. Derfor bliver værdierne sat forkert ind i parametrene.




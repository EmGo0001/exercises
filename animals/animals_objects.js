"use strict";

window.addEventListener("DOMContentLoaded", start);

const Animal = {
    name: "-defualt name-",
    desc: "-no description-",
    type: "-unknown-",
    age: 0
};

const allAnimals = []

// Hardcode test eksempel
//     {
//         name: "Mandu",
//         desc: "the amazing", 
//         type: "cat",
//         age: 10
//     },
//     {
//         name: "Mia",
//         desc: "the black", 
//         type: "cat",
//         age: 10
//     },
//     {
//         name: "Leeloo",
//         desc: "the growing", 
//         type: "dog",
//         age: 3
//     },
//     {
//         name: "Toothless",
//         desc: "the trained", 
//         type: "dragon",
//         age: 14
//     },
//     {
//         name: "ScoobyDoo",
//         desc: "the wondering", 
//         type: "dog",
//         age: 58
//     },
//     {
//         name: "Horsey",
//         desc: "the horsing", 
//         type: "horse",
//         age: 10
//     }
// ];

function start( ) {
    console.log("ready");

    loadJSON();
}


function loadJSON() {
    fetch("animals.json")
    .then( response => response.json() )
    .then( jsonData => {
        // when loaded, prepare objects
        prepareObjects( jsonData );
    });
}

function prepareObjects( jsonData ) {
    jsonData.forEach( jsonObject => {
        // Laver et nyt object
        const animal = Object.create(Animal);
        const fullname = jsonObject.fullname;

        // Finder eller extract data fra json Object
        const firstSpace = fullname.indexOf(" ");
        const secondSpace = fullname.indexOf(" ", firstSpace + 1);
        const lastSpace = fullname.lastIndexOf(" ");

        const name = fullname.substring(0, firstSpace);
        const desc = fullname.substring(secondSpace + 1,lastSpace);
        const type = fullname.substring(lastSpace +1);

        // Tjekker med hyphens
        // console.log(`name: _${name}_
        //     desc: _${desc}_
        //     type: _${type}_`);

        // Cleaned data til nyt oprettet object
        animal.name = name;
        animal.desc = desc;
        animal.type = type;
        animal.age = jsonObject.age;

        // Tilføjer objectet til globalt array
        allAnimals.push(animal);
       
    });

    displayList();
}

function displayList() {
    // clear the list
    document.querySelector("#list tbody").innerHTML = "";

    // build a new list
    allAnimals.forEach( displayAnimal );
}

function displayAnimal( animal ) {
    // create clone
    const clone = document.querySelector("template#animal").content.cloneNode(true);

    // set clone data
    clone.querySelector("[data-field=name]").textContent = animal.name;
    clone.querySelector("[data-field=desc]").textContent = animal.desc;
    clone.querySelector("[data-field=type]").textContent = animal.type;
    clone.querySelector("[data-field=age]").textContent = animal.age;

    // append clone to list
    document.querySelector("#list tbody").appendChild( clone );
}



"use stict";

// let Price = 30;
// let Moms = 1.25;

// function fullPrice(){
//     console.log(Price*Moms)
// }

// fullPrice(Price,Moms);

fullPrice(200);

function fullPrice(price, moms = 25){
    console.log("full price", (price * moms) / 100 + price);
}
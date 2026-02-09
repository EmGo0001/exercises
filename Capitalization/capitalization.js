const name = "theo";

const firstLetter = name.substring(0,1).toUpperCase();
const rest = name.substring(1).toLowerCase();
const wholeName = firstLetter + rest;

console.log(wholeName);
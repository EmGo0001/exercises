const fullName = "Peter Heronimous Lind";

const spaceOne = fullName.indexOf(" ");
const spaceTwo = fullName.lastIndexOf(" ");

const firstName = fullName.substring(0,spaceOne);
const middleName = fullName.substring(spaceOne +1, spaceTwo);
const lastName = fullName.substring(spaceTwo +1);

console.log(firstName);
console.log(middleName);
console.log(lastName);

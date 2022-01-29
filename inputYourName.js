//prompt
const prompt=require("prompt-sync")();
var fname=prompt("Enter your first name: ");
var lname=prompt("Enter your last name: ");

console.log("Welcome",fname,lname);

//readline-sync
const readlineSync=require("readline-sync");
var favColor=readlineSync.question("What is your favourite color? ");
console.log(favColor,"is the best color!");
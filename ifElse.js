const readlineSync=require("readline-sync");
var userAge=readlineSync.question("What is your age? ");

if (userAge<18){
    console.log("You cannot vote.");
}
else{
    console.log("You can vote.");
}
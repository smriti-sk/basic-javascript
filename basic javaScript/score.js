const readlineSync=require("readline-sync");

var userAns=readlineSync.question("What is the largest country by area in the world? ");
var answer="Russia";
var score=0;
if (userAns==answer){
    console.log("Correct answer.");
    score++;
}
else{
    console.log("Wrong answer.");
    score--;
}

console.log("Your score is",score);
const readlineSync=require("readline-sync");

var score=0;

function quiz(ques,answer){
    var userAns=readlineSync.question(ques);
    if (userAns==answer){
        score++;
        console.log("Correct answer");
        console.log("Your score is : "+score);
    }
    else{
        score--;
        console.log("Incorrect answer");
        console.log("Your score is : "+score);  
    }
}

//qustions and their corrosponding answer
var question_1="Name the capital of China.";
var answer_1="Beijing";
var question_2="How many states are there in America?";
var answer_2="50";
var question_3="Which is larger the Pacific or the Atlantic Ocean?";
var answer_3="Pacific ocean";
var question_4="Which scientist came up with the theory of E=MC2?";
var answer_4="Albert Einstein"

quiz(question_1,answer_1);
quiz(question_2,answer_2);
quiz(question_3,answer_3);
quiz(question_4,answer_4);
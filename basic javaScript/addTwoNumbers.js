const readlineSync=require("readline-sync");

function addition(a,b){
    var sum=a+b;
    return sum;
}
var result=addition(6,12);
console.log("Sum is : "+result);  //output the value returned by the function

//another way to output the value returned by the function
console.log("Sum is : "+addition(12,4));
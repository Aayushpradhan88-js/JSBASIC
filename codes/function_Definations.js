// ....... 
function squareNumbers(number){
    return number * number
}

console.log(squareNumbers(5));   // 25
let output = squareNumbers(3);
console.log("output :", output); // 9

// .........
function myFunc(theObj){
    return theObj.car = "fortuner";
}

const myCar = {
    car: "Lamborgini",
    model: "01aweRTX"
}
console.log(myCar.model) // 01aweRTX
console.log(myCar.car)   // Lamborgini

console.log(myFunc(myCar)); // fortuner

// ........ rewrite and understand the code .....???
function myFunc(array){
    array[0] = 30;
}

const arr = [45];

let output2 = myFunc(arr);
console.log(arr[0]);

//.......

const x = function (a, b) {
    return a * b;
}

let z = x(4, 3);
console.log(z);

// Hoisting
console.log(mySquare(3)); // 9

function mySquare(y){
    return y*y;
}

// IIFE (Immeditely Invoked Function Expression) or Self-Invoked Functions
function chai(name){
    console.log(`DB CONNECTED ${name}`);
}
chai("Aayush");

//IIFE expect variable also (name).
(function chai(name){
    console.log(`DB CONNECTED DATA ${name}`);
}) ("Aayush Pradhan");

( (language) => {
    console.log(`DB CONNECTED DATA mongoose ${language}`);
}) ("JavaScript");

//Functions are objects

function myFunction(a,b){
    return a*b
}

// console.log(myFunction(2,3,4))
console.log(myFunction.toString());

//Arrow functions
//ES5
const xy = function(a,b){
    return a+b;
}

console.log(xy(3,4)); //7

//ES6
const xu = (a,b) => { 
    return a+b
};
console.log(xu(3,4)); //7
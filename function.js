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
let x = myFunction(4, 3);
console.log(x);

function myFunction(a, b) {
    return a * b;
}
// //syntax

// function functionname(parameters1, parameter2, parameter3){
//     return parameters1 + parameter2 + parameter3
// }

// //1
// console.log(functionname(2, 3, 4)); //9
// //2

// let x = functionname(2,3,1)
// console.log(x);


// //Function Expression
// const user = function (string) {
//     return string;
// }

// const output = user("aayush");
// console.log("output :", output);




// console.log(sum(1,1));  

// function sum(a,b) {
//     return a+b;
// }


// (function username(string) {
//     console.log(`db connected to ${string} `);
// })("aabish"),

// (function username(string) {
//     console.log(`db connected to ${string} `);
// })("aabish")


//Arrow Functions

// ---Normal FNX---

function sumOfTwoNum(a,b){
    return a+b;
}

let output = sumOfTwoNum(1,2);
console.log(output);

// ---Arrow FNX---

let sumNum = (a,b,c) => {
    return a+b+c;
}

console.log(sumNum(1,2,3));

// -------

const x = (a,b) => a*b

console.log(x(4,5));

function xy(a,b) {
    return a*b;
}

let output3 = xy(4,5);
console.log(output3);
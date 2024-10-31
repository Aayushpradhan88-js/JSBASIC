for (let i = 0; i < 10; i++) {
    const element = i;
    if(element === 5){
        console.log("true");
    }
    
    console.log(element);
}

//Array
// -- array are special type of object
let arr = ["javascript", "Python", "javaa"];
console.log(arr);
console.log("length",arr.length); //Checking the length of array which is:- 3
let array = arr[0];
console.log("accessing value of array: ",array)
arr[0] = "c++"
console.log("changing the value of array", arr);

const arrTwo = [];
arrTwo[0] = "js"
arrTwo[1] = "py"
console.log(arrTwo); // we can put the values externally in array.

// let fruits = ["apple", "banana", "orange"];
// let frLen = fruits.length;

// let txt = "";
// for (let i = 0; i < frLen; i++) {
//     txt += fruits[i];
// }
// txt +=""

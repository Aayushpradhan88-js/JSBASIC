//promise basics
// let promise = new Promise(function myFunction(myresolve, myreject) {
//     myresolve();
//     myreject();
// })

// promise.then(
//     function (val) {
//         console.log("it is fullfilled", val)
//     },
//     function (err) {
//         console.log("It is rejected", err);
//     }
// )

//code


// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
// }

// // let myPromise = new Promise(function (myResolve, myReject) {
// //     let x = 0;

// //     // The producing code (this may take some time)

// //     if (x == 0) {
// //         myResolve("OK");
// //     } else {
// //         myReject("Error");
// //     }
// // });

// // myPromise.then(
// //     function (value) {
// //         myDisplayer(value);
// //     },
// //     function (error) {
// //         myDisplayer(error);
// //     }


// // );

// let myPromise2 = new Promise(function (myResolve, myReject) {
//     let u = 0;

//     if (u === 0) {
//         myResolve("Resolve");
//     } else {
//         myReject("Error");
//     }
// })

// myPromise2.then(
//     function(value){
//         myDisplayer(value);
//     },
//     function(value){
//         myDisplayer(value);
//     }
// )

/* Note:- promise -- wrong
          Promise -- right

          setTimeout always takes a function
*/
const promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Async task is completed !!");
        resolve();
    }, 3000);
})

//.then is interconnected with resolve()
promise.then(function () {
    setTimeout(() => {
        console.log("promise is compiled");
        /*this code takes 2s to compile the code but resolve is in the promise 
         variable so, first it will compile */
    }, 2000);
})

new Promise(function(resolve, reject){

    setTimeout(() => {
        console.log("i want to participate hackathon next time !!");
        resolve();
    }, 2000);

}).then(function(){

    setTimeout(() => {
        console.log("now coding")
    }, 3000);

})
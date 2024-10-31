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

// #1st method to write promise code.
/* Note:- promise -- wrong
          Promise -- right

          setTimeout always takes a function
*/
const promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Async task is completed !!");
        resolve();
    }, 2000);
})

//.then is interconnected with resolve().
promise.then(function () {

    setTimeout(() => {
        console.log("promise is compiled");
        /*this code takes 2s to compile the code but resolve is in the promise 
         variable so, first it will compile */
    }, 3000);

})

// #2nd method to write promise which is very short and consisd
new Promise(function (resolve, reject) {

    setTimeout(() => {
        console.log("i want to participate hackathon next time !!");
        resolve();
    }, 4000);

}).then(function () {

    setTimeout(() => {
        console.log("now coding")
    }, 5000);

})

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve({
            username: "aayushPradhan",
            userId: "aayush@123op"
        })
    }, 6000);
})

promiseThree.then(function (user) {
    console.log(user); // the output will be the username and userId with the value.
})

//Advance promise coding
const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let err = false;

        if (!err) {
            resolve({
                username: 'harsh vandana sharma',
                ytchannel: 'sheriyans coding school'
            })
        } else {
            console.log('Error: Something went wrong!!');
        }
    }, 7000);
})

promiseFour.then((user) => {
    console.log(user);
    return user.username; //user.username gives the username where the code is written in resolve place above.
})
    .then((username) => {
        console.log(username) // after returning the username value it will execute in this place because returning value have to callback some where according to JS.
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => console.log("The data finally resolved or rejected"));
//finally -- after resolving or rejected the data finally what is the output come well you pls tell me.

// # PROMISE IS OBJECTS
let promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let err = true;

        if(!err){
            resolve({
                username: 'aarju poudel',
                email: 'aarju@email.com',
                password: 99967123478456
            });
        } else {
            console.log('Err: Check your email or password !!!');
        }
    }, 8000);
})

async () => {
    try{
        let response = await promiseFive
        console.log(response);
    }
    catch (err){
        console.log(err)
    }
}
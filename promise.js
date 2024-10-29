let promise = new Promise(function myFunction(myresolve, myreject) {
    myresolve();
    myreject();
})

promise.then(
    function(val){
        console.log("it is fullfilled", val)
    },
    function(err){
        console.log("It is rejected", err);
    }
)
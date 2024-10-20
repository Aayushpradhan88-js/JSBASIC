//Function Parameters and Arguments

function myFunction(x,y){
    if(y === undefined){
        y = 9;
    }
    return x*y;
}

console.log(myFunction(4));
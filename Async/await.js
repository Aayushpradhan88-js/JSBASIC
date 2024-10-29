async function fetchData() {
    const response = await fetch(`https://example.com/data`);
    const data = await response.json();
    return data;
}

function myDisplayer(some){
    document.getElementById('demo').innerHTML = some;
}

function myLogic(num1, num2){
    let result = num1 + num2;
    return result;
}

let output = myLogic(5,5);
myDisplayer(output);


// #2

setTimeout( function() {
    myFunction("I want to go hackthon");
}, 5000)

function myFunction(val){
    let main = document.getElementById('demo-2');
    let head = document.querySelector('h1');

    main.addEventlistener(click, () => {
        head.innerHTML =  val;
    })
}



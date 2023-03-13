#!/usr/bin/node
// Write a script that prints the addition of 2 integers
function add(a, b){
    let args = [];
    for (let i = 0; i < arguments.length; i++){
        args[i] = arguments[i];
    }
    a = args[1];
    b = args[2];

    sum = a + b;
    console.log(sum)
    return add;
}

add("1", 2, 4);
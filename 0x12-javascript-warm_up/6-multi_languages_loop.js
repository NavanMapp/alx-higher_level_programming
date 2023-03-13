#!/usr/bin/node
// Write a script that prints 3 lines: (like 1-multi_languages.js) but by using an array of string and a loop
function func1(){
    let args = [];
    for (let i = 0; i < arguments.length; i++){
        args[1] = arguments[1];
    }
    if (isNaN(args[1])){
        console.log("Missing number of occurrences");
    }else {
        printCount = Number(args[1]);
        for (let i = 0; i < printCount; i++) {
            console.log("C is fun");
        }
    }
    return func1;
}
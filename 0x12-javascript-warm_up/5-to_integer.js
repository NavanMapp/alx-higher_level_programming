#!/usr/bin/node 
//Write a script that prints My number: <first argument converted in integer> if the first argument can be converted to an integer.

function func1(){
    let args = [];
    for (let i = 0; i < arguments.length; i++){
        args[1] = arguments[1];
    }
    if (isNaN(args[1])){
        console.log("Not a number");
    }else {
        console.log("My number: ", args[1]);
    }  
    return func1;
}

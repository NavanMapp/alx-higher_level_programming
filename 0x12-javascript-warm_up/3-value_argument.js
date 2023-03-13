#!/usr/bin/node
//Write a script that prints the first argument passed to it

function func1(a, b){
    if (b == null){
        console.log("No argument");
    } else {
        console.log(b);
    }
    return func1;
}

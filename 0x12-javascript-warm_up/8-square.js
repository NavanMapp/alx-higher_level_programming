#!/usr/bin/node
// Write a script that prints a square

function func1(){
    let args = [];
    for (let i = 0; i < arguments.length; i++){
        args[1] = arguments[1];
    }
    if (isNaN(args[1])){
        console.log("Missing size");
    }else {
        printCount = Number(args[1]);
        for (let i = 0; i <= printCount; i++) {
            for (let j = 0; j <= printCount; j++) {
                process.stdout.write("X");
            }
            console.log("");
        }
    }
}
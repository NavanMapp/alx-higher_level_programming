#!/usr/bin/node
function func1(a, b){
    if (b == null){
        console.log("No argument");
    } else {
        console.log(b);
    }
    return func1;
}

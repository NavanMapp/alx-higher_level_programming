#!/usr/bin/node 
// Write a script that prints two arguments passed to it, in the following format: “ is 
function func1(arg1, arg2, arg3){
    if (arg2 && arg3 == null){
    }else{
        console.log(arg2 + " is " + arg3);
    }
    return func1;
}

#!/usr/bin/node 
function func1(arg1, arg2, arg3){
    if (arg2 && arg3 == null){
    }else{
        console.log(arg2 + " is " + arg3);
    }
    return func1;
}

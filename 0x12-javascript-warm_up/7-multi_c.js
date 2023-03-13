
#!/usr/bin/node
// Write a script that prints x times “C is fun”

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
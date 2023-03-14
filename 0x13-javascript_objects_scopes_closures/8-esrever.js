#!/usr/bin/node
// Write a function that returns the reversed version of a list
exports.esrever = function(list){
    return list.reduceRight(function(array, current){
        array.push(current);
        return array;
    }, []);
};

const esrever = require('./8-esrever').esrever;

console.log(esrever([1, 2, 3, 4, 5]));
console.log(esrever(["School", 89, { id: 12 }, "String"]));
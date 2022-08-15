"use strict";
let greet;
greet = (name, greeting) => {
    console.log(`${name} says ${greeting} `);
};
let calc;
calc = (numOne, numTwo, action) => {
    return action === "add" ? numOne + numTwo : numOne - numTwo;
};
let logDetails;
logDetails = (ninja1) => {
    console.log(`${ninja1.name} is ${ninja1.age} years old`);
};
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};

const prompt = require('prompt-sync')({sigint: true});

const num1 = prompt('Enter a number: ');
const num2 = prompt('Enter another number: ');

const addVals = (num1, num2) => {
    console.log(`The sum of the two numbers is ${num1 + num2}`);
}

addVals(parseInt(num1), parseInt(num2));
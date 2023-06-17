/* 
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let num1 = Math.floor((Math.random() * 10) + 1);
let num2 = Math.floor((Math.random() * 10) + 1);
let answer = num1 + num2;

rl.question(`What is ${num1} + ${num2}? \n`,
    (userInput) => {
        if(userInput.trim() == answer) {
            rl.close();
        } else {
            rl.setPrompt('Incorrect response please try again\n');
            rl.prompt();
            rl.on('line', (userInput) => {
                if(userInput.trim() == answer) {
                    rl.close();
                } else {
                    rl.setPrompt(`Your answer of ${userInput} is incorrect try again\n`);
                    rl.prompt();
                }
            })
        }
    });

rl.on('close', () => {
    console.log('Correct!!!');
})
*/


// Path: node_tutorial/2-modules.js

/*
const tutorial = require('./tutorial');
console.log(tutorial);
console.log(tutorial.sum(1, 1));
console.log(tutorial.PI);
console.log(new tutorial.SomeMathObject());
*/

// Path: node_tutorial/3-event-emitter.js

/*
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial', (num1, num2) => {
    console.log(num1 + num2);
}

eventEmitter.emit('tutorial', 1, 2);

class Person extends EventEmitter {
    constructor(name) {
        super();
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

let pedro = new Person('Pedro');
let christina = new Person('Christina');
christina.on('name', () => {
    console.log('my name is ' + christina.name);
}
pedro.on('name', () => {
    console.log('my name is ' + pedro.name);
}

pedro.emit('name');
christina.emit('name');

*/

// GLOBALS  - NO WINDOW !!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

/* const prompt = require('prompt-sync')();

const amount = prompt('Enter a number ');

if (amount > 10) {
    console.log(__dirname);
    console.log(__filename);
    console.log(`Your number is ${amount}`);
} else {
    console.log('Your number is less than 10');
    console.log(process);
    console.log(module);
    console.log(`Your number is ${amount}`);
} */


const names = require('./02-names');
const sayHi = require('./03-utils');
const data = require('./04-alternative-flavor');
require('./05-mind-game');

sayHi('Susan');
sayHi(names.john);
sayHi(names.peter);
console.log(data.singlePerson.name);





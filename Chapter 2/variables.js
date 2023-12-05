/**
 * VARIABLES
 * They are also known as bindings in JavaScript
    A binding does not actually hold any value but points to a value assigned to it
    The '=' operator can be used to disconnetc a variable from their current value
    to point on a new one
 */
let isThereLight = true;
console.log(isThereLight);
isThereLight = false;
console.log(isThereLight);

//Monthly Salary before deductions
let mySalary = 20000;
//After deduction
mySalary = mySalary - 10000;
console.log(mySalary);

// let, var and const can be used to create bindings
var myName = "Peter";
const greeting = "Hello ";
console.log(greeting + myName);

/**
 * FUNCTIONS
    A function is a piece of program wrapped in a value. Executing a function is called
    invoking, calling or applying it
 */

/**
 * THE CONSOLE.LOG FUNCTION
 It is a function that helps to write out its arguments to 
 some text output device
 */
console.log(Math.min(2, 5) + 100);
let theNumber = 2;
console.log("Your number is the square root of " + theNumber ** 2);

//Conditional execution is created with the if keyword in JavaScript
let theNumber = NaN;
if (!Number.isNaN(theNumber)) {
    console.log("Your Number is the square root of " + theNumber ** 2)
} 

//While loop: Runs a piece of code multiple times as long as a condition is satified
//function to calculate power of a number using recursion
const power = (base, exp) => {
    return (exp === 0) ? 1 : base * power(base, exp - 1);
};
console.log(power(2, 10));

//while loop implementation 
let result = 1;
let counter = 0;
while (counter < 10) {
    result *= 2;
    counter++
};
console.log(result)
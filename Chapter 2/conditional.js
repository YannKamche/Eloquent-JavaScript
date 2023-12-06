//Conditional execution is created with the if keyword in JavaScript
let theNumber = NaN;
if (!Number.isNaN(theNumber)) {
    console.log("Your Number is the square root of " + theNumber ** 2)
} 

//function to calculate power of a number using recursion
const power = (base, exp) => {
    return (exp === 0) ? 1 : base * power(base, exp - 1);
};
console.log(power(2, 10));

//WHILE LOOP: Runs a piece of code multiple times as long as a condition is satified
let result = 1;
let counter = 0;
while (counter < 10) {
    result *= 2;
    counter++;
};
console.log(result);

//The role or the indentation is to make the structure of the code stand out

//FOR LOOPS: Allows you to repeat a certain block of code for a known amount of time
for (let number = 0; number <= 12; number += 2) 
    console.log(number);

//break: Can help you break out of a loop
for (let current = 20; ; current++) {
    if (current % 7 == 0) {
        console.log(current);
        break;
    }
}
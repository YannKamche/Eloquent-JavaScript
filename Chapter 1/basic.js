/**
 * STRINGS:
 * Strings are used to represent text and is written by enclosing their content in quotes
 */

let myStr1 = 'Down on the sea'; //single quotes
let myStr2 = "Lie on the ocean"; //double quotes
let myStr3 = `Float on the ocean` //backsticks

console.log(myStr1);
console.log(myStr2);
console.log(myStr3)

/**
 * When you write something inside ${} in a template literal, its
 * result will be computed, converted to a string
 */

console.log(typeof `${1 + 2}`);

/** 
 * CONCATENATION:
 * The '+' operator is used to concatenate or glue two strings
 */
let largeString = myStr1 + myStr2;
console.log(largeString);

/**
 * BOOLEAN VALUES
 * Boolean variables hold two values, true and false
 */
console.log(3 > 2) // true
console.log(2 > 3) //false
console.log("Itchy" != "Scratchy") //false
console.log("Apple" == "Orange");

console.log(NaN == NaN)//NaN: Only value in JavaScript not equal to itself

/**
 * LOGICAL OPERATORS
 */
console.log(true && true);//true
console.log(true && false); // false
console.log(!false); //true
console.log(!true); //false

//Ternary operator
console.log(true ? 1 : 2);
console.log(false ? 1 : 2);

console.log(8 * null); // 0
console.log('4' - 2) // 2;
console.log('5' + 1); //51
console.log("five" * 2); //NaN
console.log(true === 1); 

console.log(typeof null === typeof undefined); //true
console.log(typeof null, typeof undefined);

// Short circuiting of Logical Operations
console.log(0 || "John") // John
console.log(false && "1")



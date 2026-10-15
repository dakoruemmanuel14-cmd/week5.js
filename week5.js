// QUESTION 1: JavaScript Data Types

let myString = "Hello World";
let myNumber = 25;
let myBoolean = true;
let myNull = null;
let myUndefined;

console.log("String:", myString);
console.log("Number:", myNumber);
console.log("Boolean:", myBoolean);
console.log("Null:", myNull);
console.log("Undefined:", myUndefined);


// QUESTION 2: String Properties and Methods

let myName = " JOHN DOE ";

console.log("Original string:", myName);
console.log("Length:", myName.length);
console.log("Lowercase:", myName.toLowerCase());
console.log("Uppercase:", myName.toUpperCase());
console.log("Trimmed string:", myName.trim());
console.log("Includes JOHN:", myName.includes("JOHN"));


// QUESTION 3: Mathematical Operations

let a = 25;
let b = 7;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Exponentiation:", a ** b);
console.log("Remainder:", a % b);


// QUESTION 4: Working with the Math Object

console.log("Value of PI:", Math.PI);

console.log("Random number between 0 and 100:", Math.random() * 100);

console.log("Random whole number between 1 and 50:", Math.floor(Math.random() * 50) + 1);

console.log("Round down 45.89:", Math.floor(45.89));

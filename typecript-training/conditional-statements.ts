//Conditional statements in TypeScript

//If statement
let age: number = 20;
if (age >= 18) {
    console.log("You are an adult.");
}

//If-else statement
let isRaining: boolean = true;
if (isRaining) {
    console.log("It is raining.");
} else {
    console.log("It is not raining.");
}

//If-else if-else statement
let score: number = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else {
    console.log("Grade: C");
}

//Example of a nested if-else conditional statement
let x: number = 10;
let y: number = 20;
if (x > 5) {
    if (y > 15) {
        console.log("Both conditions are true.");
    } else {
        console.log("x is greater than 5, but y is not greater than 15.");
    }
} else {
    console.log("x is not greater than 5.");
}
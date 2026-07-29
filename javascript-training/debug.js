//Debugging: Debugging i sthe process of identifying and fixing the errors within the program.


console.log("Executing Line 1");
console.log("Executing Line 2");
console.log("Executing Line 3");
sumOfNumbers(5,10);
console.log("Executing Line 5");
console.log("Executing Line 6");
console.log("Executing Line 7");
console.log("Executing Line 8");
console.log("Executing Line 9");
console.log("Executing Line 10");

// Debugging the program step by step

// 1. Add the break points (before the line where you want to manually execute the program).
// 2. Run the program in debug mode. -left side menu using node.js

//continue(F5) => continue the auto execution till the next breakpoint
//stop(Shift+F5) => stop the execution completely.
//Restart(ctrl+shift+F5) => Restart the execution of the program from the beginining.

//step Over(F10) => Execute the 

//logic to get the sum of two numbers
function sumOfNumbers(a,b){
    let c = (a-b);
    console.log(c);
}
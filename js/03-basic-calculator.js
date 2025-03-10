// declare variables
    let inputNumber1, inputNumber2, operation
    let done = false;

// ADD A FUNCTION CALLED CALCULATE
    function calc(num1, num2, operation) {
        switch (operation) {
            case "+":
                return (num1 + num2);
            case "-":
                return (num1 - num2);
            case "*":
                return (num1 * num2);
            case "/":
                return (num1 / num2);
            default:
                alert("Invalid Operation.");
        }
    }

while (!done) {
// COLLECT FIRST NUMBER FROM USER
    inputNumber1 = parseFloat(prompt("Enter the first number: "));
    if (isNaN(inputNumber1)) {                                  // Validate if the user has entered a valid number 
        console.log("Invalid number - program terminated.");
        document.writeln("Invalid number - program terminated.");
        process.exit(1);
    } 

// COLLECT SECOND NUMBER FROM USER
    inputNumber2 = parseFloat(prompt("Enter the second number: "));
    if (isNaN(inputNumber2)) {                                  // Validate if the user has entered a valid number 
        console.log("Invalid number - program terminated.");
        document.writeln("Invalid number - program terminated.");
        process.exit(1);
    } 

// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
    operation = prompt("Enter +, -, *, / (add, subtract, multiply, or divide) or x to quit: ");
    if (operation == "x") {                                                // user has chosen to exit
        alert("Exit - Goodbye!")
        done = true; 
        process.exit(1);
    } else if (!(((operation == "+") || (operation == "-") || (operation == "*") || (operation == "/")))) {  
        console.log("Invalid operation - program terminated.");
        process.exit(1);
    }

// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
    alert(`\n Answer: \n\n ${inputNumber1} ${operation} ${inputNumber2} = ${(calc(inputNumber1, inputNumber2, operation)).toFixed(2)}`);
}
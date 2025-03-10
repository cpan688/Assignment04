//==============================================================
//  M5 Assignment Part 1 - Practice with Functions
//==============================================================
// STEP 1 ............. Define all the functions here ................
// halfNumber() accepts one argument (a number) and returns the number divided by 2 
    function halfNumber(x) { return x / 2; }

// squareNumber() accepts one argument (a number) and return the square of that number
    function squareNumber(x) { return x * x; }

// percentOf() accepts two numbers, figure out what percent the first number represents of the second number
    function percentOf(x, y) { return (x / y) * 100; }

// findModulus() accepts two numbers and returns the modulus of the first and second parameters. 
    function findModulus(x, y) { return (x % y); }

// define the variables to use in this program
let choice, inputNumber1, inputNumber2, result;
let done = false;

do {
    choice = prompt("Which function do you want to run? (1=halfNumber, 2=squareNumber, 3=percentOf, 4=findModulus, x=exit) ");
    if (choice == "x") {                                                // user has chosen to exit
        alert("Exit - Goodbye!")
        done = true; 
        process.exit(1);
    }
    choice = parseInt(choice);
    if (isNaN(choice) || ((choice >= 1 && choice <= 4) == false)) {
        console.log("Invalid choice - program terminated.");
        document.writeln("Invalid choice - program terminated.");
        process.exit(1);
    }

    switch (choice) {
//STEP 2 - halfNumber function
        case 1:                                                         // user has chosen the halfNumber function
            inputNumber1 = parseFloat(prompt("Enter a number: "));
            if (isNaN(inputNumber1)) {                                  // Validate if the user has entered a valid number 
                console.log("Invalid number - program terminated.");
                document.writeln("Invalid number - program terminated.");
                process.exit(1);
            } else {                                                    // log the result as "Half of 5 is 2.5."
                result = `Half of ${inputNumber1} is ${halfNumber(inputNumber1)}.`;
            }
            break;
        
//STEP 3 - squareNumber function
        case 2:                                                     // user has chosen the squareNumber function
            inputNumber1 = parseFloat(prompt("Enter a number: "));
            if (isNaN(inputNumber1)) {                                  // Validate if the user has entered a valid number 
                console.log("Invalid number - program terminated.");
                document.writeln("Invalid number - program terminated.");
                process.exit(1);
            } else {                                                     // log the result as "The result of squaring the number 3 is 9."
                result = `The result of squaring the number ${inputNumber1} is ${squareNumber(inputNumber1)}.`;
            }
            break;
        

//STEP 4 - percentOf function
        case 3:                                                     // user has chosen the percentOf function
            inputNumber1 = parseFloat(prompt("Enter the first number: "));
            inputNumber2 = parseFloat(prompt("Enter the second number: "));
            if ((isNaN(inputNumber1)) || (isNaN(inputNumber2))) {        // Validate if the user has entered a valid number 
                console.log("Invalid number - program terminated.");
                document.writeln("Invalid number - program terminated.");
                process.exit(1);
            } else {                                                    // log the result as "2 is 50% of 4."
                result = `${inputNumber1} is ${(percentOf(inputNumber1, inputNumber2)).toFixed(0)}% of ${inputNumber2}.`;
            }
            break;

//STEP 5 - findModulus function
       case 4:                                                     // user has chosen the findModulus function
            inputNumber1 = parseFloat(prompt("Enter the first number: "));
            inputNumber2 = parseFloat(prompt("Enter the second number: "));
            if ((isNaN(inputNumber1)) || (isNaN(inputNumber2))) {        // Validate if the user has entered a valid number 
                console.log("Invalid number - program terminated.");
                document.writeln("Invalid number - program terminated.");
                process.exit(1);
            } else {                                                    // log the result as "2 is the modulus of 4 and 10."
                result = `${findModulus(inputNumber1, inputNumber2)} is the modulus of ${inputNumber2} and ${inputNumber1}.`;
            }
            break;
        }

        console.log(result);
        document.writeln(result);

    } while (!done)
// declare variables
let playAgain = true;
let choice, rand, computerChoice

function longName(hand) {
    switch (hand) {
        case "r":
            return "Rock";
        case "p":
            return "Paper";
        case "s":
            return "Scissors";
        default:
            return "Unknown";
    }
}

function displayResult(winner, userChoice, computerChoice) {
    alert(`${winner} Won!!! \n * Your Choice was: ${longName(userChoice)} \n * Computer Choice was: ${longName(computerChoice)}`);
}

// collect user's choice for the game
do {
    choice = (prompt("Enter r for rock, p for paper, s for scissors, x to end the game: ")).toLowerCase();
    if (choice == "x") {                                                // user has chosen to exit
        alert("Game Terminated - Goodbye!")
        playAgain = false; 
        process.exit(1);
    } else if (!(((choice == "r") || (choice == "p") || (choice == "s")))) {  
        console.log("Invalid Choice - Game Over.");
        playAgain = false; 
        process.exit(1);
    }
    
    // generate computer's choice using a random number generator r:0-0.33 p:0.33-0.66 s:0.66-1.0
    rand = Math.random();
    if (rand < 0.33) {
        computerChoice = "r"
    } else if (rand < 0.66) {
        computerChoice = "p"
    } else {
        computerChoice = "s"
    }

    // compare hands and determine winner
    // • Rock destroys scissors.         rock > scissors
    // • Scissors cut paper.         scissors > paper
    // • Paper covers rock.             paper > rock
    if (choice == computerChoice) {
        alert(`It's a Tie! \n * You and Computer both have chosen ${longName(choice)}.`)
    } else if (choice == "r") {
        if (computerChoice == "s") {
            displayResult ("You", choice, computerChoice);
        } else if (computerChoice == "p") {
            displayResult ("Computer", choice, computerChoice);
        }
    } else if (choice == "p") {
        if (computerChoice == "s") {
            displayResult ("Computer", choice, computerChoice);
        } else if (computerChoice == "r") {
            displayResult ("You", choice, computerChoice);
        }
    } else if (choice == "s") {
        if (computerChoice == "p") {
            displayResult ("You", choice, computerChoice);
        } else if (computerChoice == "r") {
            displayResult ("Computer", choice, computerChoice);
        }
    }

} while (playAgain)

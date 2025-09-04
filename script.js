const images = [
    "img/rock.png",
    "img/paper.png",
    "img/scissors.png"
]

function getComputerChoice() {
    // Gets a number (0, 1 or 2)
    let computerChoice = () => Math.floor(Math.random() * 3)
    // Change the random number to the following strings
    if (computerChoice == 0) {
        return ("rock")
    } else if (computerChoice == 1) {
        return ("paper")
    } else {
        return ("scissors")
    }
};

function getHumanChoice() {
    // Gets the user's choice
    let humanChoice = document.getElementById("choice").innerText
    console.log(humanChoice)
    // Adjust and returns the user choices
    if (humanChoice.toLowerCase() === "rock") {
        return ("rock")
    } else if (humanChoice.toLowerCase() === "paper") {
        return ("paper")
    } else if (humanChoice.toLowerCase() === "scissors") {
        return ("scissors")
    } else {
        return (undefined)
    }
};


function playGame() {
    // Score variables
    let humanScore = 0
    let computerScore = 0

    // Function that makes the rules and decides the winner of the round
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            return (console.log("That's a tie!"))
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore++
            return (console.log("You win! Rock beats Scissors"))
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            computerScore++
            return (console.log("You lose! Paper beats Rock"))
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore++
            return (console.log("You win! Paper beats Rock"))
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            computerScore++
            return (console.log("You lose! Scissors beats Paper"))
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore++
            return (console.log("You win! Scissors beats Paper"))
        } else if (humanChoice === "scissors" && computerChoice === "rock"){
            computerScore++
            return (console.log("You lose! Rock beats Scissors"))
        } else {
            return undefined
        }
    };

    // Loop to play 5 rounds
    for (i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()
        playRound(humanSelection, computerSelection)
    }

    // Final result
    if (humanScore > computerScore) {
        return (console.log("Human wins!"))
    } else if (computerScore > humanScore) {
        return (console.log("Computer wins!"))
    } else {
        return (console.log("That's a tie."))
    }
};

playGame()
const images = [
    "img/rock.png",
    "img/paper.png",
    "img/scissors.png"
]

const choices = [
    "Rock",
    "Paper",
    "Scissors"
]

// BUTTONS
// Add the event listeners
document.getElementById("previous-btn").addEventListener("click", previousImg)
document.getElementById("next-btn").addEventListener("click", nextImg)
document.getElementById("play-btn").addEventListener("click", playGame)
let currentIndex = 0

// Changes the choices and images based on the index of the array
function updateChoice (index) {
    document.getElementById("choice").innerText = choices[index]
}

function showImg (index) {
    document.getElementById("img").src = images[index]
};

// Changes the index
function previousImg () {
    currentIndex = (currentIndex - 1 + images.length) % images.length
    showImg(currentIndex)
    updateChoice(currentIndex)
};

function nextImg () {
    currentIndex = (currentIndex + 1) % images.length
    showImg(currentIndex)
    updateChoice(currentIndex)
}

// CHOICES
// Gets the computer choice
function getComputerChoice() {
    // Gets a number (0, 1 or 2)
    let computerChoice =  Math.floor(Math.random() * 3)
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

// GAME
// Global variables
let humanScore = 0
let computerScore = 0

// Function that executes the game
function playGame() {
    // Function that makes the rules and decides the winner of the round
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            alert("That's a tie!")
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            alert(`You win! ${humanChoice} beats ${computerChoice}`)
            humanScore++
        } else {
            alert(`You lose! ${computerChoice} beats ${humanChoice}`)
            computerScore++
        }
    };
    
    // Action time, these lines define the arguments that will be used and call the function using it
    let humanChoice = getHumanChoice()
    let computerChoice = getComputerChoice()
    playRound(humanChoice, computerChoice)
    // These lines update the DOM, making the score at the page update
    document.getElementById("human-score").innerText = humanScore
    document.getElementById("computer-score").innerText = computerScore

    // We playing 5 rounds and these lines define the winner
    if ((humanScore + computerScore) == 5) {
        if (computerScore > humanScore) {
            alert(`The computer won from ${computerScore} to ${humanScore}`)
        } else if (humanScore > computerScore) {
            alert(`You win from ${humanScore} to ${computerScore}`)
        } else {
            alert(`It's a tie game! ${humanScore} to ${computerScore}`)
        }
    
    // Reset game for next match
    humanScore = 0
    computerScore = 0
    document.getElementById("human-score").innerText = humanScore
    document.getElementById("computer-score").innerText = computerScore
    }
}
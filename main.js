
let userScore = 0
let computerScore = 0

// Create a function of computerChoice that randomly selects between rps
function getComputerChoice() {
    let number = Math.floor(Math.random() * 3)

    if (number === 0) {
        return "Rock";
    } else if (number === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

// Ask the user for an input of rps, not case sensitive
function getUserChoice() {
    let userChoice = prompt('Choose rock, paper, or scissors:')
    return userChoice.charAt(0).toUpperCase() + userChoice.slice(1).toLowerCase()
}

// check for the winner
function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
        userScore++
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerScore++
        return `Computer wins! ${computerSelection} beats ${playerSelection}`;
    }
}

// loop through game 5 times
function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(getUserChoice(), getComputerChoice()));

        console.log(`User: ${userScore}, Computer ${computerScore}`)
    }

    if (userScore === computerScore) {
        console.log("Game over. It's a tie!")
    } else if (userScore > computerScore) {
        console.log("Game over. You win!")
    } else {
        console.log("Game over. Computer wins!")
    }
}

game()


// keep the score
// report loser or winner
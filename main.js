
let userScore = 0
let computerScore = 0

function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);

    if (number === 0) {
        return "Rock";
    } else if (number === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getUserChoice() {
    let userChoice = prompt('Choose rock, paper, or scissors:')
    return userChoice.charAt(0).toUpperCase() + userChoice.slice(1).toLowerCase();
}

function playRound (userSelection, computerSelection) {
    if (userSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (userSelection === "Rock" && computerSelection === "Scissors") ||
        (userSelection === "Paper" && computerSelection === "Rock") ||
        (userSelection === "Scissors" && computerSelection === "Paper")
    ) {
        userScore++
        return `You win! ${userSelection} beats ${computerSelection}`;
    } else {
        computerScore++
        return `Computer wins! ${computerSelection} beats ${userSelection}`;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(getUserChoice(), getComputerChoice()));

        console.log(`User: ${userScore}, Computer ${computerScore}`)
    }

    if (userScore === computerScore) {
        console.log("Game over. It's a tie!");
    } else if (userScore > computerScore) {
        console.log("Game over. You win!");
    } else {
        console.log("Game over. Computer wins!");
    }
}

game()


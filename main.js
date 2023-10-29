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
    console.log(playerSelection)
    console.log(computerSelection)
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `Computer wins! ${computerSelection} beats ${playerSelection}`;
    }
}

console.log(playRound(getUserChoice(), getComputerChoice()))
// loop through game 5 times
// keep the score
// report loser or winner
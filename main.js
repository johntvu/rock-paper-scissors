
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

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const playerScore = document.querySelector('#userScore');
const compScore = document.querySelector('#computerScore');
const result = document.querySelector('#result')

function playRound (userSelection, computerSelection) {
    if (userSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (userSelection === "Rock" && computerSelection === "Scissors") ||
        (userSelection === "Paper" && computerSelection === "Rock") ||
        (userSelection === "Scissors" && computerSelection === "Paper")
    ) {
        userScore++
        playerScore.textContent = userScore
        return `You win! ${userSelection} beats ${computerSelection}`;
    } else {
        computerScore++
        compScore.textContent = computerScore
        return `Computer wins! ${computerSelection} beats ${userSelection}`;
    }
}


function checkWinner() {
    if (playerScore.textContent == 5) {
        result.textContent = 'Score 5 reached. Player Wins!'
    } 

    else if (compScore.textContent == 5) {
        result.textContent = 'Score 5 reached. Computer Wins!'
    }
}



rock.addEventListener('click', function() {
    result.textContent = playRound('Rock', getComputerChoice())

    checkWinner()
});


paper.addEventListener('click', function() {
    result.textContent = playRound('Paper', getComputerChoice());

    checkWinner()
});

scissors.addEventListener('click', function() {
    result.textContent = playRound('Scissors', getComputerChoice());

    checkWinner()
});

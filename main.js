// Create a function of computerChoice that randomly selects between rps
function getComputerChoice() {
    number = Math.floor(Math.random() * 3)

    if (number === 0) {
        return "Rock";
    }

        else if (number === 1) {
            return "Paper"
        }

        else {
            return "Scissors"
        }
}

console.log(getComputerChoice())
// Ask the user for an input of rps, not case sensitive
// check for the winner
// print the winner and the choices
// loop through game 5 times
// keep the score
// report loser or winner
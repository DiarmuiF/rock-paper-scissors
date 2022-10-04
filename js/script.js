function getComputerChoice() {
    const number = Math.floor(Math.random() * 3)
    let computerChoice = null

    if (number === 0) {
        computerChoice = "rock"
    } else if (number === 1) {
        computerChoice = "paper"
    } else if (number === 2) {
        computerChoice = "scissors"
    }

    console.log(computerChoice)
    return computerChoice
}

function playRound(playerSelection, computerSelection) {
    // Convert to lowercase for comparison
    playerSelection = playerSelection.toLowerCase()
    let result = ""
    let winStatement = `You Win! ${playerSelection} beats ${computerSelection}`
    let loseStatement = `You Lose! ${computerSelection} beats ${playerSelection}`

    // Check result
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            result = "tie"
        } else if (computerSelection === "paper") {
            result = loseStatement
        } else if (computerSelection === "scissors") {
            result = winStatement
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            result = winStatement
        } else if (computerSelection === "paper") {
            result = "tie"
        } else if (computerSelection === "scissors") {
            result = loseStatement
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            result = loseStatement
        } else if (computerSelection === "paper") {
            result = winStatement
        } else if (computerSelection === "scissors") {
            result = "tie"
        }
    }

    // Return result
    return result
}

const computerSelection = getComputerChoice()
const playerSelection = "rock"
let result = playRound(playerSelection, computerSelection)
console.log(result)
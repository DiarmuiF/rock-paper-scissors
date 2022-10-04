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

    console.log(`Computer selects ${computerChoice}`)
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

    console.log(result)
    // Return result
    if (result === winStatement) {
        return "player"
    } else if (result === loseStatement) {
        return "computer"
    }
    
}

function game() {
    // Initiate score variables
    let playerScore = 0
    let computerScore = 0

    // Loop to play 5 times
    for (let i = 0; i < 5; i++) {
        // Make selections
        const playerSelection = prompt("Make your selection")
        const computerSelection = getComputerChoice()
        // play a round and get result
        result = playRound(playerSelection, computerSelection)
        // Increment appropriate score
        if (result === "player") {
            playerScore++
        } else if (result === "computer") {
            computerScore++
        }
    }

    // Print the result
    if (playerScore > computerScore) {
        console.log("Player wins!")
    } else if (playerScore < computerScore) {
        console.log("Computer wins!")
    } else {
        console.log("It's a tie!")
    }

    return 0
}

game()
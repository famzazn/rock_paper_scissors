

function playRound(human, computerChoice) {
    if (human === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock.")
        computerScore++;
    } else if (human === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors.")
        humanScore++;
    } else if (human === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock.")
        humanScore++;
    } else if (human === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beat Paper.")
        computerScore++;
    } else if (human === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors.")
        computerScore++;
    } else if (human === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beat Paper.")
        humanScore++;
    } else if (human !== "scissors" && human !== "paper" && human !== "rock") {
        console.log("Not a valid input.")
    } else {
        console.log("Tie round, try again.")
    }

        

}




function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock.")
        computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors.")
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock.")
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beat Paper.")
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors.")
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beat Paper.")
        humanScore++;
    } else if (humanChoice !== "scissors" && humanChoice !== "paper" && humanChoice !== "rock") {
        console.log("Not a valid input.")
    } else {
        console.log("Tie round, try again.")
    }

        

}
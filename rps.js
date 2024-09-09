let humanScore = 0;
let computerScore = 0;
let round = 1;



function getComputerChoice() {
    let num = Math.floor(Math.random() * 3) + 1;
    if (num === 1) {
        return "rock";
    } else if (num === 2) {
        return "paper";
    } else {
        return "scissors";
    }

}

function getHumanChoice() {
    return prompt("Enter your choice, rock, paper, or scissors!").toLowerCase();
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
    } else {
        console.log("Tie round, try again.")
    }

        

}

function playgame() {
   console.log("Round " + round++)
   playRound(getHumanChoice(), getComputerChoice());
   console.log("Round " + round++)
   playRound(getHumanChoice(), getComputerChoice());
   console.log("Round " + round++)
   playRound(getHumanChoice(), getComputerChoice());
   console.log("Round " + round++)
   playRound(getHumanChoice(), getComputerChoice());
   console.log("Round " + round++)
   playRound(getHumanChoice(), getComputerChoice());


   if (humanScore > computerScore) {
    console.log("You win the game!")
   } else if (computerScore > humanScore) {
    console.log("You lose the game!")
   } else {
    console.log("Tie game!")
   }
   
   


}


playgame();


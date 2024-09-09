let humanScore = 0;
let computerScore = 0;



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
    let input = prompt("Enter your choice, rock, paper, or scissors!").toLowerCase();
    if (input === "rock" || input === "paper" || input === "scissors") {
        return "You entered: " + input;
    } else {
        return "Not a valid input, please try again,";
    }
}



function playRound(humanChoice, computerChoice) {

}

console.log(getHumanChoice())
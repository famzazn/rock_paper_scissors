function getComputerChoice() {
    let num = Math.floor(Math.random() * 3) + 1;
    if (num === 1) {
        return "rock"
    } else if (num === 2) {
        return "paper"
    } else {
        return "scissors"
    }

}

function getHumanChoice() {
    let input = prompt("Enter your choice, rock, paper, or scissors!")
    if (input.toLowerCase() === "rock") {
        return "You selected Rock!"
    } else if (input.toLowerCase() === "paper") {
        return "You selected Paper!"
    } else if (input.toLowerCase() === "scissors") {
        return "You selected Scissors!"
    } else {
        return "Not a valid input, please try again."
    }
}   

console.log(getHumanChoice())
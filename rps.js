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



const choice1 = document.querySelector("#rock");
const choice2 = document.querySelector("#paper");
const choice3 = document.querySelector("#scissors");
const retry = document.querySelector("#retry");

let humanChoice = '';

function pick(choice) {
    humanChoice = choice;
}

choice1.addEventListener("click", () => {
    if (!(humanScore === 5 || computerScore === 5)) {
    pick("rock");
    playgame();
    } else {
        console.log("GAME OVER!");
    }
    
})

choice2.addEventListener("click", () => {
    if (!(humanScore === 5 || computerScore === 5)) {
        pick("paper");
        playgame();
    } else {
        console.log("GAME OVER!");
    }
})

choice3.addEventListener("click", () => {
    if (!(humanScore === 5 || computerScore === 5)) {
        pick("scissors");
        playgame();
    } else {
        console.log("GAME OVER!");
    }
})

retry.addEventListener("click", () => {
    if ((humanScore === 5 || computerScore === 5)) {
        round = 1;
        humanScore = 0;
        computerScore = 0;
        enableButtons();
    } else (
        console.log("GAME NOT OVER! KEEP PLAYING!")
    )
})



function disableButtons() {
    choice1.disabled = true;
    choice2.disabled = true;
    choice3.disabled = true;
}

function enableButtons() {
    choice1.disabled = false;
    choice2.disabled = false;
    choice3.disabled = false;
}


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
        console.log("Not a roundid input.")
    } else {
        console.log("Tie round, try again.")
    }

        

}




function playgame() {
   console.log("ROUND " + round++)
   playRound(humanChoice, getComputerChoice());
   console.log("User Score: " + humanScore + " Computer Score: " + computerScore)
  

   if ((humanScore === 5 || computerScore === 5)) {
    if (humanScore > computerScore) {
        console.log("You WIN the game!");
       } else {
        console.log("You LOSE the game!");
       }
       disableButtons();     
   } 

   


}







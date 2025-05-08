function getComputerChoice() {
    // Get a random number for the list
    const integer1 = Math.floor(Math.random() * 3);
    const choices = ["ROCK", "PAPER", "SCISSOR"];
    return choices[integer1];
} 

function getHumanChoice() {
    let choice = prompt("Type in your choice (Rock, Paper, Scissor)");
    choice = choice.toUpperCase();
    return choice;
}

function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        console.log("DRAW. No point given");
    }
    if (computerChoice === "ROCK" && humanChoice === "PAPER") {
        console.log("Computer Wins");
        computerScore++
    }
    if (computerChoice === "SCISSOR" && humanChoice === "PAPER") {
        console.log("Human Wins");
        humanScore++
    }
    if (computerChoice === "ROCK" && humanChoice === "SCISSOR") {
        console.log("Computer Wins");
        computerScore++
    }
    if (computerChoice === "PAPER" && humanChoice === "SCISSOR") {
        console.log("Human Wins");
        humanScore++
    }
    if (computerChoice === "PAPER" && humanChoice === "ROCK") {
        console.log("Computer Wins");
        computerScore++
    }
    if (computerChoice === "SCISSOR" && humanChoice === "ROCK") {
        console.log("Human Wins");
        humanScore++
    }
}

function playGame() {
    for (let i = 1; i <= 5; i++) {
        playRound(getComputerChoice(), getHumanChoice());
    }

    if (computerScore > humanScore) {
        console.log("Computer won the game!!!!!");
    } else if (computerScore < humanScore) {
        console.log("Human won the game!!!!!");
    } else {
        console.log("We have a DRAW. AI's not that good yet!!!!!");
    }
}

let humanScore = 0;
let computerScore = 0;


playGame();

// for (let i = 0; i < 101; i++) {
//     console.log(getComputerChoice());
// }

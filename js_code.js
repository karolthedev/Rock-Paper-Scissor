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
    const winCondition = {
        "ROCK" : "PAPER",
        "PAPER" : "SCISSOR",
        "SCISSOR" : "ROCK",
    }

    if (computerChoice === humanChoice) {
        // console.log("DRAW. No point given");
        alert("DRAW. No point given");
    } else if (winCondition[computerChoice] !== humanChoice) {
        // console.log("Computer Wins");
        computerScore++;
        alert("Computer wins");
        computerScoreElement.textContent = `Computer: ${computerScore}`;
    } else {
        // console.log("Human Wins");
        humanScore++;
        alert("Human wins");
        humanScoreElement.textContent = `Human: ${humanScore}`;
    }
}

// function playGame() {
//     for (let i = 1; i <= 5; i++) {
//         playRound(getComputerChoice(), getHumanChoice());
//     }

//     if (computerScore > humanScore) {
//         console.log("Computer won the game!!!!!");
//     } else if (computerScore < humanScore) {
//         console.log("Human won the game!!!!!");
//     } else {
//         console.log("We have a DRAW. AI's not that good yet!!!!!");
//     }
// }

let humanScore = 0;
let computerScore = 0;
const computerScoreElement = document.querySelector(".computer_score");
const humanScoreElement = document.querySelector(".human_score");

//Add EventListener Delegation
document.querySelector("#selection_list").addEventListener("click", function (someEvent) {
    //Needs to click exactly on the buttons
    if (!someEvent.target.matches("button")) {
        return;
    }

    const playerSelection = someEvent.target.textContent;
    playRound(getComputerChoice(), playerSelection);
    if (humanScore === 5) {
        alert("Human won the game");
        humanScore = 0;
        computerScore = 0;
        computerScoreElement.textContent = `Computer: 0`;
        humanScoreElement.textContent = `Human: 0`;
    } else if (computerScore === 5) {
        alert("Computer won the game");
        humanScore = 0;
        computerScore = 0;
        computerScoreElement.textContent = `Computer: 0`;
        humanScoreElement.textContent = `Human: 0`;
    }
})


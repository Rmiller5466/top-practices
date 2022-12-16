let buttonR = document.querySelector("#rock");
let buttonP = document.querySelector("#paper");
let buttonS = document.querySelector("#scissors");

let playerScore = document.querySelector("#ps");
let playerChoice = document.querySelector("#pd");

let computerScore = document.querySelector("#cs");
let computerChoice = document.querySelector("#cd");

let results = document.querySelector("#res");
let cont = document.querySelector(".container");

let restartButton = document.createElement("button");
restartButton.textContent = "Restart?";
restartButton.addEventListener('click', () => restart());

let endText = document.createElement("h2");
endText.textContent = "Game is Over!";

let playerScoreInt = 0;
let computerScoreInt = 0;

let theButtons = [buttonR,buttonP,buttonS];

init();
addListeners();

function init(){
    playerScoreInt = 0;
    computerScoreInt = 0;

    playerScore.textContent = "0";
    computerScore.textContent = "0";

    playerChoice.textContent = "";
    computerChoice.textContent = "";
    results.textContent = "";
}

function addListeners(){
    for (let button of theButtons){
        button.addEventListener('click', () => driver(button.value));
    }
}

function driver(val){
    playerChoice.textContent = val;
    winner = decideWinner(val, getComputerChoice());

    switch(winner){
        case 1:
            results.textContent = "The player wins!";
            playerScoreInt++;
            playerScore.textContent = playerScoreInt;
            break;
        case 2:
            results.textContent = "The computer wins!";
            computerScoreInt++;
            computerScore.textContent = computerScoreInt;
            break;
        case 3:
            results.textContent = "Tie!";
            break;
    }

    if ((playerScoreInt == 5) || (computerScoreInt == 5)) {
        toggleDisable(1);
        cont.appendChild(endText);
        cont.appendChild(restartButton);
    }
}

function getComputerChoice(){
    let choice = Math.floor(Math.random()*3)
    switch(choice){
        case 0:
            choice = "rock";
            break;
        case 1: 
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break;
    }

    computerChoice.textContent = choice;
    return choice;
}

function decideWinner(playerSelection, computerSelection){
    let winner = 0;

    if (playerSelection == computerSelection) {
        winner = 3;
        return winner;
    }

    if (playerSelection == "rock"){
        if (computerSelection == "paper"){
            winner = 2;
            return winner;
        }else{
            winner = 1;
            return winner;
        }
    }

    if (playerSelection == "paper"){
        if (computerSelection == "rock"){
            winner = 1;
            return winner;
        }else{
            winner = 2;
            return winner;
        }
    }

    if (playerSelection == "scissors"){
        if (computerSelection == "paper"){
            winner = 1;
            return winner;
        }else{
            winner = 2;
            return winner;
        }
    }
}

function restart(){
    toggleDisable(0);
    cont.removeChild(endText);
    cont.removeChild(restartButton);
    init();
}

function toggleDisable(flag){
    if (flag){
        for (let button of theButtons){
            button.setAttribute("disabled", "");
        }
    }else{
        for (let button of theButtons){
            button.removeAttribute("disabled");
        }
    }
}
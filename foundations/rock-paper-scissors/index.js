let buttonR = document.querySelector("#rock");
let buttonP = document.querySelector("#paper");
let buttonS = document.querySelector("#scissors");

addListeners()

let playerScore = document.querySelector("#ps");
let playerScoreInt = 0;
let playerChoice = document.querySelector("#pd");

let computerScore = document.querySelector("#cs");
let computerScoreInt = 0;
let computerChoice = document.querySelector("#cd");

let results = document.querySelector("#res");
let cont = document.querySelector(".container");

function addListeners(){

    buttonR.addEventListener('click', () => driver(buttonR.value));
    buttonP.addEventListener('click', () => driver(buttonP.value));
    buttonS.addEventListener('click', () => driver(buttonS.value));
}

function driver(val){
    //console.log("Welcome to Rock Paper Scissors!")
    //playerScore = 0;
    //computerScore = 0;
    //console.log(`Starting round ${i + 1}`)
    //console.log(`Player chose ${val}`)
    playerChoice.textContent = val;
    winner = decideWinner(val, getComputerChoice());
    switch(winner){
        case 1:
            results.textContent = "The player wins!";
            playerScoreInt++;
            playerScore.textContent = playerScoreInt;
            break
        case 2:
            results.textContent = "The computer wins!";
            computerScoreInt++;
            computerScore.textContent = computerScoreInt;
            break
        case 3:
            results.textContent = "Tie!";
            break 
    }
    if ((playerScoreInt == 5) || (computerScoreInt == 5)) {
        // document.removeChild(buttonR);
        // document.removeChild(buttonP);
        // document.removeChild(buttonS);
        let end = document.createElement("h2");
        end.textContent = "Game is Over!";
        cont.appendChild(end);
    }
    //console.log(`Player Score: ${playerScore} Computer Score: ${computerScore}`)
}

function getComputerChoice(){
    let choice = Math.floor(Math.random()*3)
    switch(choice){
        case 0:
            choice = "rock"
            break
        case 1: 
            choice = "paper"
            break
        case 2:
            choice = "scissors"
            break
    }
    computerChoice.textContent = choice;
    return choice;
}

function decideWinner(playerSelection, computerSelection){
    let winner = 0
    if (playerSelection == computerSelection) {
        winner = 3
        return winner
    }

    if (playerSelection == "rock"){
        if (computerSelection == "paper"){
            winner = 2
            return winner
        }else{
            winner = 1
            return winner
        }
    }

    if (playerSelection == "paper"){
        if (computerSelection == "rock"){
            winner = 1
            return winner
        }else{
            winner = 2
            return winner
        }
    }

    if (playerSelection == "scissors"){
        if (computerSelection == "paper"){
            winner = 1
            return winner
        }else{
            winner = 2
            return winner
        }
    }
}
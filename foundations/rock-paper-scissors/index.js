console.log(getComputerChoice())

function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    switch(choice){
        case 0:
            choice = "rock"
            break;
        case 1: 
            choice = "paper"
            break;
        case 2:
            choice = "scissors"
            break;
    }
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
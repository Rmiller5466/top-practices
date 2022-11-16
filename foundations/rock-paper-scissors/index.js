driver()

function driver(){
    console.log("Welcome to Rock Paper Scissors!")
    let user = prompt("Do you choose (Rock) (Paper) or (Scissors)?")
    user = user.toLowerCase()
    console.log(`Player chose ${user}`)
    winner = decideWinner(user, getComputerChoice())
    switch(winner){
        case 1:
            console.log("The player wins!")
            break
        case 2:
            console.log("The computer wins!")
            break
        case 3:
            console.log("Tie!")
            break
    }
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
    console.log(`Computer chose ${choice}`)
    return choice
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
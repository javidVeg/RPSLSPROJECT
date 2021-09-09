
//game.js

//show rules
//person select game type--switch case
//battle -loop chooseGesture to decide winner until requirement sis met to get to 2 wins


class Game {
    constructor{
        this.player1 = new Human();
        this.player2 = null;
        
    }

let gameChoice = prompt ("Select your game: 1. Human vs. Computer 2. Human vs. Human")
switch (menu){
    case 1:
        text = "Player 1 vs. Player 2"
        break;
    case 2:
        text = "Player 1 vs. Computer"
        break;
}

//print winner
//play again?

console.log ("Welcome to RPSLS!\nRules:\nRock crushes Scissors\nScissors cuts Paper\nPaper covers Rock\nRock crushes Lizard\nLizard poisons Spock\nSpock smashes Scissors\nScissors decapitates Lizard\nLizard eats Paper\nPaper disproves Spock\nSpock vaporizes Rock")

function playAgain (){
    prompt("Would you like to play again?");
    return game;
}

class Game {
    constructor{
        this.player1 = new Human();
        this.player2 = null;
        
    }
}

console.log(playerSelection)


if (Human === "rock"  && player2 === "rock"){
    console.log("Draw!")
}else if (player1 === "rock" && player2 === "paper"){
    console.log("Player 2 wins!")
    human2.winTotal + 1
}else if (player1 === "rock" && player2 === "scissors"){
    console.log("Player 1 wins!")
    human.winTotal + 1
}else return
    
}
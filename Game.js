//person select game type--switch case
//battle -loop chooseGesture to decide winner until requirement sis met to get to 2 wins
const prompt = require('prompt-sync')();

const Human = require('./Human');
const AI = require('./AI');

class Game {
    constructor (){
        this.player1 = new Human();
        this.player2 = null;
    }
    welcome (){
        console.log ("Welcome to RPSLS!\nRules:\nRock crushes Scissors\nScissors cuts Paper\nPaper covers Rock\nRock crushes Lizard\nLizard poisons Spock\nSpock smashes Scissors\nScissors decapitates Lizard\nLizard eats Paper\nPaper disproves Spock\nSpock vaporizes Rock");
    }
    gameType (){
    let gameChoice = prompt ("Select your game: 1. Human vs. Computer 2. Human vs. Human")
    switch (gameChoice){
        case "1":
            this.player2 = new AI ();
        break;
        case "2":
            this.player2 = new Human ();
        break;
        default:
        }
    }
    getResult (){
        if (this.player1.chosenGesture === this.player2.chosenGesture){
            console.log ("It's a draw!");
        }    
            else if (this.player1.chosenGesture === "Rock" && this.player2.chosenGesture === "Scissors"){
                console.log ("Rock Crushes Scissors");
                this.player1.winTotal += 1;
            }
            else if (this.player1.chosenGesture === "Rock" && this.player2.chosenGesture === "Paper"){
                console.log ("Paper Covers Rock");
                this.player2.winTotal += 1;
            }
            else if (this.player1.chosenGesture === "Rock" && this.player2.chosenGesture === "Lizard"){
                console.log ("Rock Crushes Lizard");
                this.player1.winTotal += 1;
            }
            else if (this.player1.chosenGesture === "Rock" && this.player2.chosenGesture === "Spock"){
                console.log ("Spock Vaporizes Rock");
                this.player2.winTotal += 1;
            }
            else if (this.player1.chosenGesture === "Scissors" && this.player2.chosenGesture === "Spock"){
                console.log ("Spock Smashes Scissors");
                this.player2.winTotal += 1;
            }
            else if (this.player1.chosenGesture === "Scissors" && this.player2.chosenGesture === "Paper"){
                console.log ("Scissors Cuts Paper");
                this.player1.winTotal += 1;
            }    
            else if (this.player1.chosenGesture === "Scissors" && this.player2.chosenGesture === "Lizard"){
                console.log ("Scissors Decapitates Lizard");
                this.player1.winTotal += 1;
            }
            else if (this.player1.chosenGesture === "Lizard" && this.player2.chosenGesture === "Spock"){
                console.log ("Lizard Poisons Spock");
                this.player1.winTotal += 1;
            }
            else if (this.player1.chosenGesture === "Lizard" && this.player2.chosenGesture === "Paper"){
                console.log ("Lizard Eats Paper");
                this.player1.winTotal += 1;
            }
            else if (this.player1.chosenGesture === "Paper" && this.player2.chosenGesture === "Spock"){
                console.log ("Paper Disproves Spock")
                this.player1.winTotal += 1;
            }
            else if (this.player2.chosenGesture === "Rock" && this.player1.chosenGesture === "Scissors"){
                console.log ("Rock Crushes Scissors");
                this.player2.winTotal += 1;
            }
            else if (this.player2.chosenGesture === "Rock" && this.player1.chosenGesture === "Paper"){
                console.log ("Paper Covers Rock");
                this.player1.winTotal += 1;
            }
            else if (this.player2.chosenGesture === "Rock" && this.player1.chosenGesture === "Lizard"){
                console.log ("Rock Crushes Lizard");
                this.player2.winTotal += 1;
            } 
            else if (this.player2.chosenGesture === "Rock" && this.player1.chosenGesture === "Spock"){
                console.log ("Spock Vaporizes Rock");
                this.player1.winTotal += 1;
            }
            else if (this.player2.chosenGesture === "Scissors" && this.player1.chosenGesture === "Spock"){
                console.log ("Spock Smashes Scissors");
                this.player1.winTotal += 1;
            }
            else if (this.player2.chosenGesture === "Scissors" && this.player1.chosenGesture === "Paper"){
                console.log ("Scissors Cuts Paper");
                this.player2.winTotal += 1;
            }    
            else if (this.player2.chosenGesture === "Scissors" && this.player1.chosenGesture === "Lizard"){
                console.log ("Scissors Decapitates Lizard");
                this.player2.winTotal += 1;
            }
            else if (this.player2.chosenGesture === "Lizard" && this.player1.chosenGesture === "Spock"){
                console.log ("Lizard Poisons Spock");
                this.player2.winTotal += 1;
            }
            else if (this.player2.chosenGesture === "Lizard" && this.player1.chosenGesture === "Paper"){
                console.log ("Lizard Eats Paper");
                this.player2.winTotal += 1;
            }
            else if (this.player2.chosenGesture === "Paper" && this.player1.chosenGesture === "Spock")
                console.log ("Paper Disproves Spock")
                this.player2.winTotal += 1;        
        }
        playGame () {
        while (this.player1.winTotal < 2 && this.player2.winTotal < 2){
            this.player1.chooseGesture();
            this.player2.chooseGesture();
            this.getResult();
            }
        }    
        displayScore (){
            console.log ("Player one has " + this.player1.winTotal + " wins");
            console.log ("Player two has " + this.player2.winTotal + " wins")
        }   
        playAgain (){
            prompt ("Would you like to play again?");
            if (prompt === "yes"){
                //bring up gameChoice menu
            }    
            else{
                console.log ("Goodbye");
            }
        }     
    runGame (){
        this.welcome();
        this.gameType();
        this.playGame();
    }
}    
module.exports = Game;
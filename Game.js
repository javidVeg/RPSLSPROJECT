const prompt = require('prompt-sync')();

const Human = require('./Human');
const AI = require('./AI');

class Game {
    constructor (){
        this.player1 = new Human();
        this.player2 = null;
    }
    welcome (){
        console.log ("Welcome to RPSLS!\nRules:\nRock Crushes Scissors\nScissors Cuts Paper\nPaper Covers Rock\nRock Crushes Lizard\nLizard Poisons Spock\nSpock Smashes Scissors\nScissors Decapitates Lizard\nLizard Eats Paper\nPaper Disproves Spock\nSpock Vaporizes Rock\n");
    }
    gameType (){
    console.log ("Select your game: 1. Human vs. Computer or 2. Human vs. Human ")
    let gameChoice = prompt()
    switch (gameChoice){
        case "1":
            this.player2 = new AI ();
        break;
        case "2":
            this.player2 = new Human ();
        break;
        default:
            console.log ("Invalid entry");
            this.gameType();
        }
    }
    getResult (){
        if (this.player1.chosenGesture === this.player2.chosenGesture){
            console.log ("It's a draw!");
        }
            else if ((this.player1.chosenGesture === this.player1.gestures[0] || this.player1.chosenGesture === this.player1.gestures[4]) && this.player2.chosenGesture === this.player2.gestures[2]){
                console.log (`${this.player1.chosenGesture} beats ${this.player2.chosenGesture}`);
                this.player1.winTotal += 1;
            }
            else if ((this.player1.chosenGesture === this.player1.gestures[1] || this.player1.chosenGesture === this.player1.gestures[4]) && this.player2.chosenGesture === this.player2.gestures[0]){
                console.log (`${this.player1.chosenGesture} beats ${this.player2.chosenGesture}`);
                this.player1.winTotal += 1;
            }
            else if ((this.player1.chosenGesture === this.player1.gestures[2] || this.player1.chosenGesture === this.player1.gestures[3]) && this.player2.chosenGesture === this.player2.gestures[1]){
                console.log (`${this.player1.chosenGesture} beats ${this.player2.chosenGesture}`);
                this.player1.winTotal += 1;
            }
            else if ((this.player1.chosenGesture === this.player1.gestures[0] || this.player1.chosenGesture === this.player1.gestures[2]) && this.player2.chosenGesture === this.player2.gestures[3]){
                console.log (`${this.player1.chosenGesture} beats ${this.player2.chosenGesture}`);
                this.player1.winTotal += 1;
            }
            else if ((this.player1.chosenGesture === this.player1.gestures[1] || this.player1.chosenGesture === this.player1.gestures[3]) && this.player2.chosenGesture === this.player2.gestures[4]){
                console.log (`${this.player1.chosenGesture} beats ${this.player2.chosenGesture}`);
                this.player1.winTotal += 1;
            }
            else if ((this.player2.chosenGesture === this.player2.gestures[0] || this.player2.chosenGesture === this.player2.gestures[4]) && this.player1.chosenGesture === this.player1.gestures[2]){
                console.log (`${this.player2.chosenGesture} beats ${this.player1.chosenGesture}`);
                this.player2.winTotal += 1;
            }
            else if ((this.player2.chosenGesture === this.player2.gestures[1] || this.player2.chosenGesture === this.player2.gestures[4]) && this.player1.chosenGesture === this.player1.gestures[0]){
                console.log (`${this.player2.chosenGesture} beats ${this.player1.chosenGesture}`);
                this.player2.winTotal += 1;
            }
            else if ((this.player2.chosenGesture === this.player2.gestures[2] || this.player2.chosenGesture === this.player2.gestures[3]) && this.player1.chosenGesture === this.player1.gestures[1]){
                console.log (`${this.player2.chosenGesture} beats ${this.player1.chosenGesture}`);
                this.player2.winTotal += 1;
            }
            else if ((this.player2.chosenGesture === this.player2.gestures[0] || this.player2.chosenGesture === this.player2.gestures[2]) && this.player1.chosenGesture === this.player1.gestures[3]){
                console.log (`${this.player2.chosenGesture} beats ${this.player1.chosenGesture}`);
                this.player2.winTotal += 1;
            }
            else if ((this.player2.chosenGesture === this.player2.gestures[1] || this.player2.chosenGesture === this.player2.gestures[3]) && this.player1.chosenGesture === this.player1.gestures[4]){
                console.log (`${this.player2.chosenGesture} beats ${this.player1.chosenGesture}`);
                this.player2.winTotal += 1;
            }
    }    

        playGame () {
        while (this.player1.winTotal < 2 && this.player2.winTotal < 2){
            this.player1.chooseGesture();
            this.player2.chooseGesture();
            console.log(this.player1.name + " chose " + this.player1.chosenGesture);
            console.log(this.player2.name + " chose " + this.player2.chosenGesture);
            this.getResult();
            }
        }    

        displayScore (){
            console.log (this.player1.name + " has " + this.player1.winTotal + " wins");
            console.log (this.player2.name + " has " + this.player2.winTotal + " wins");
        }   
        playAgain (){
            console.log ("Would you like to play again? 1. yes or 2. no");
            let repeat = prompt() 
            if (repeat === "1"){
                let newGame = new Game();
                newGame.runGame();
            }    
            else{
                console.log ("Goodbye");
            }
        }     
    runGame (){
        this.welcome();
        this.gameType();
        this.playGame();        
        this.displayScore();
        this.playAgain();
    }
}    
module.exports = Game;
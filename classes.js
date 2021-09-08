"use strict"
const prompt = require('prompt-sync')();

//game.js
class Game {

}
//player.js
class Player {
    constructor (){
        this.name = ""
        this.selection = ""
        this.gestures = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
        this.winTotal = 0;
    }
}
module.exports = Player;

//human.js
class Human extends Player {
    constructor(){
        super ();
        this.getName ();
    }
    getName () {
       this.name = prompt ("What is your name?");
    }
    chooseGesture (){
        this.selection = prompt ("Make a selection:\n1. Rock\n2. Paper\n3. Scissors\n4. Lizard\n5. Spock");
    }
}
//ai.js
class AI extends Player {
    constructor (){
        super();   
        this.name = "Computer";
    }
    chooseGesture (){
        let randomIndex = Math.floor(Math.Random() * this.gestures.length);
        return handDraw[randomIndex]
    }
}
if playerOneSelection === "Rock" && playerTwoSelection === "Scissors"{
    console.log ("")
}

if playerOneSelection === playerTwoSelection{
    console.log ("Draw! Please select again.")
}
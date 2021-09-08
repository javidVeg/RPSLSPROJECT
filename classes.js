"use strict"
const prompt = require('prompt-sync')();

class Game {

}

class Player {
    constructor (){
        this.name = ""
        this.selection = ""
        this.gestures = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
        this.winTotal = 0;
    }
}

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

class AI {
    gestures = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
    chooseGesture (){
        const randomIndex = Math.floor(Math.random() * gestures.length)
        const randomElement = gestures[randomIndex]
        return randomElement
    }
}



console.log(chooseGesture())
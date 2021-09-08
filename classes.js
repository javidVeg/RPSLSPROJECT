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
    chooseGesture (){
        const randomIndex = Math.floor(Math.Random() * SELECTION.length)
        return handDraw[randomIndex]
    }
}
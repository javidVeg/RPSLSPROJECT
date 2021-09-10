const Player = require ("./Player");
const prompt = require('prompt-sync')();

class Human extends Player {
    constructor(){
        super ();
        this.getName ();
    }
    getName () {
       this.name = prompt ("What is your name? ");
    }
    chooseGesture (){
        console.log ("Make a selection:\n1. Rock\n2. Paper\n3. Scissors\n4. Lizard\n5. Spock");
        let index = prompt();
        this.chosenGesture = this.gestures[index - 1];
    }
}
module.exports = Human;
const prompt = require ("./Player");

class Human extends Player {
    constructor(){
        super ();
        this.getName ();
    }
    getName () {
       this.name = prompt ("What is your name?");
    }
    chooseGesture (){
        this.chosenGesture = prompt ("Make a selection:\n1. Rock\n2. Paper\n3. Scissors\n4. Lizard\n5. Spock");
    }
}
module.exports = Human;
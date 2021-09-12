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
        this.promptFor("Make a selection:\n1. Rock\n2. Paper\n3. Scissors\n4. Lizard\n5. Spock", this.numberCorrect);
    }
    promptFor(question, valid){
        do{
            console.log (question);
            var response = parseInt(prompt().trim());
        } while(!response || !valid(response));
        this.chosenGesture = this.gestures[response - 1];
    }
    numberCorrect(index){
        if (index >=1 && index <= 5){    
            return true;   
        }
        console.log ("Invalid entry");
        return false;
    }
}
module.exports = Human;
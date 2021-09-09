const Player = require ("./Player");
const prompt = require('prompt-sync')();

class AI extends Player {
    constructor (){
        super();   
        this.name = "Computer";
    }
    chooseGesture (){
        let randomIndex = Math.floor(Math.random() * this.gestures.length);
        this.chosenGesture = this.gestures[randomIndex];
    }
}    
module.exports = AI;
"use strict"
const prompt = require('prompt-sync')();

//player.js
class Player{
    constructor (){
        this.name = ""
        this.chosenGesture = ""
        this.gestures = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
        this.winTotal = 0;
    }
}
module.exports = Player;
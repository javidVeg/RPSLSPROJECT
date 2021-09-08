

class AI extends Player {
    constructor (){
        super();   
        this.name = "Computer";
    }
    chooseGesture (){
        let randomIndex = Math.floor(Math.Random() * this.gestures.length);
        this.chosenGesture = this.gestures[rand];
    }
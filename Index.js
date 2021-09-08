"use strict"// create a function for random selection.
const prompt = require('prompt-sync')();


let myGame = new Game ();


const handDraw = [
{
	name: 'scissors',
	method: 'cuts',
	beats: 'paper'
},
{
	name: 'paper',
	method: 'covers',
	beats: 'rock'
},
{
	name: 'rock',
	method: 'crushes',
	beats: 'lizard'
},
{
	name: 'lizard',
	method: 'poisons',
	beats: 'spock'
},
{
	name: 'spock',
	method: 'smashes',
	beats: 'scissors'
},
{
	name: 'scissors',
	method: 'decapitates',
	beats: 'lizard'
},
{
	name: 'lizard',
	method: 'eats', 
	beats: 'paper'
},
{
	name: 'paper',
	method: 'disproves',
	beats: 'spock'
},
{
	name: 'spock',
	method: 'vaporizes',
	beats: 'rock'
},
{
	name: 'rock',
	method: 'crushes',
	beats: 'scissors'
},
]

// make a cons that prompts for a selection

const selectionPrompt = prompt("make a selection:\n1.scissors\n2.paper\n3.rock\n4.lizard\n5.spock")

function userSelection(selectionPrompt){
	const aiSelection = randomSelection()
	const uWin = winnerWinner(selection, aiSelection)
	const aiWin = winnerWinner(aiselection, selection) 
// In () it is which ever comes first 

	// console.log(selectionPrompt)
	whoWon(aiSelection, aiWin)
	whoWon(selectionPrompt, uWin)
}

function whoWon(selection, winner){
}

const selection = handDraw.find(selection => selection.name === selectionName)

function winnerWinner (selection, computerSelection){
	return selection.beats === computerSelection.name
}

function randomSelection() {
	const randomIndex = Math.floor(Math.Random() * SELECTION.length)
	return handDraw[randomIndex]
}

console.log(selectionPrompt)

//******SCORE******

// const computerScoreSpan = 
// const yourScoreSpan = 
// if (yourWinner) incrementScore(yourScoreSpan)
// if (computerWinner) incrementScore(computerScoreSpan)

// function incrementScore(scoreSpan) {
// 	scorespan.innerText = parstInt(scoreSpan.inner) + 1
// This is what I came up with in my stubbornness to "simplify" the comparison of choices.
// Mind you, I don't think this was that good of an idea. Took me about 3 times longer to figure out. And it looks looks messy.
// I don't have that much experience but I programed this in python the usual way a while ago and wanted to do something different.

function computerPlay(){ // Computer's selection
    computerGuess = Math.floor(Math.random() * 3)
    return computerGuess;
}
let playerScore = 0
let compScore = 0
let roundSelection = prompt("How many rounds would you like to play?")
const toChoice = ["Rock", "Paper", "Scissors"]; // Convert number of computerSelection and playerSelection to respective choice
const toNumber = {"ROCK":0,"PAPER":1,"SCISSORS":2};// Convert choice of computerSelection and playerSelection to respective number

function playRound(computerSelection, playerNumber){ // Compare computerSelection and playerSelection
    if (computerSelection == toNumber[playerNumber]){
        return 0;

    }else if (computerSelection < toNumber[playerNumber]){
        return 1;

    }else if (computerSelection > toNumber[playerNumber]) {
        return 2;

    }else return "Error, contact developer.";
}

function game(){ //The actual game loop
    for (let i = 0; i < roundSelection; i++){

        let playerSelection = prompt("Choose bewteen rock, paper, and scissors.");
        let playerNumber = playerSelection.toUpperCase();
        let computerSelection = computerPlay();

        playRound(computerSelection, playerNumber);

        if (playRound(computerSelection, playerNumber) === 0) {
            console.log(`It's a tie! ${toChoice[toNumber[playerNumber]]} vs ${toChoice[computerSelection]}.`);

        }else if (playRound(computerSelection, playerNumber) === 1) {
            console.log(`You win! ${toChoice[toNumber[playerNumber]]} beats ${toChoice[computerSelection]}.`);
            playerScore+= 1;

        }else if (playRound(computerSelection, playerNumber) === 2) {
            console.log(`You lose! ${toChoice[toNumber[playerNumber]]} is destroyed by ${toChoice[computerSelection]}.`);
            compScore+= 1;

        }else return "Wrong input, please try again.";

    }
    if (playerScore > compScore) {//Win message.
        console.log(`You beat the computer ${playerScore} to ${compScore}.`)

    }else if (playerScore < compScore){
        console.log(`You lost to the computer ${playerScore} to ${compScore}.`)

    }else console.log(`You scored ${playerScore} points. Computer scored ${compScore} points.`);
}
window.onload = game();
function computerPlay(){ // Computer's selection
    computerGuess = Math.floor(Math.random() * 3)
    return computerGuess === 0 ? "Rock"
    :   computerGuess === 1 ? "Paper"
    :   computerGuess === 2 ? "Scissors"
    :   "Error";
}

;
let playerScore = 0
let compScore = 0
let roundSelection = prompt("How many rounds would you like to play?")

function playRound(computerSelection, playerSELtoUpper){ // Compare computerSelection and playerSelection
    if (computerSelection.toUpperCase() == playerSELtoUpper){ // Tie
        return 0;

    }else if (computerSelection.toUpperCase() === "ROCK" && playerSELtoUpper === "PAPER" || // Winnig Conditions
        computerSelection.toUpperCase() === "PAPER" && playerSELtoUpper === "SCISSORS" ||
        computerSelection.toUpperCase() === "SCISSORS" && playerSELtoUpper === "ROCK"){
        return 1;

    }else if (computerSelection.toUpperCase() === "ROCK" && playerSELtoUpper === "SCISSORS" || // Losing Conditions
        computerSelection.toUpperCase() === "PAPER" && playerSELtoUpper === "ROCK" ||
        computerSelection.toUpperCase() === "SCISSORS" && playerSELtoUpper === "PAPER"){
        return 2;
    }else return "Error, contact developer.";
}

function game(){ // The actual game loop
    for (let i = 0; i < roundSelection; i++){

        let playerSelection = prompt("Choose bewteen rock, paper, and scissors.");
        let playerSELtoUpper = playerSelection.toUpperCase();
        let computerSelection = computerPlay();

        if (playRound(computerSelection, playerSELtoUpper) === 0) { // Tie
            console.log(`It's a tie! ${playerSelection[0].toUpperCase()}${playerSelection.slice(1)} vs ${computerSelection}.`);

        }else if (playRound(computerSelection, playerSELtoUpper) === 1) { // Round Win
            console.log(`You win! ${playerSelection[0].toUpperCase()}${playerSelection.slice(1)} beats ${computerSelection}.`);
            playerScore+= 1;

        }else if (playRound(computerSelection, playerSELtoUpper) === 2) { // Round Loss
            console.log(`You lose! ${playerSelection[0].toUpperCase()}${playerSelection.slice(1)} is destroyed by ${computerSelection}.`);
            compScore+= 1;

        }else return "Wrong input, please try again.";

    }
    if (playerScore > compScore) { // Win Message
        console.log(`You beat the computer ${playerScore} to ${compScore}.`)

    }else if (playerScore < compScore){
        console.log(`You lost to the computer ${playerScore} to ${compScore}.`)

    }else console.log(`You scored ${playerScore} points. Computer scored ${compScore} points.`);
}
window.onload = game();








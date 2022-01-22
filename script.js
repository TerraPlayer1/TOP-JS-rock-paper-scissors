
const buttons = document.querySelectorAll("button");

buttons.forEach((button) =>{
    button.addEventListener("click", () => {
        //Play game with capitalized button id and pre-capitalized computer selection
        playRound((button.id[0].toUpperCase() + button.id.slice(1)), computerPlay())
    });
});


function computerPlay(){ // Computer's selection
    computerGuess = Math.floor(Math.random() * 3)
    return computerGuess === 0 ? "Rock"
    :   computerGuess === 1 ? "Paper"
    :   computerGuess === 2 ? "Scissors"
    :   "Error, contact developer. Error: 00";
}

;
let playerScore = 0
let compScore = 0
// let roundSelection = prompt("How many rounds would you like to play?")

function playRound(playerSelection, computerSelection){ // Compare computerSelection and playerSelection
    if (computerSelection.toUpperCase() == playerSelection.toUpperCase()){ // Tie
        return results(0,playerSelection,computerSelection);

    }else if (computerSelection.toUpperCase() === "ROCK" && playerSelection.toUpperCase() === "PAPER" || // Winnig Conditions
        computerSelection.toUpperCase() === "PAPER" && playerSelection.toUpperCase() === "SCISSORS" ||
        computerSelection.toUpperCase() === "SCISSORS" && playerSelection.toUpperCase() === "ROCK"){
            return results(1,playerSelection,computerSelection);

    }else if (computerSelection.toUpperCase() === "ROCK" && playerSelection.toUpperCase() === "SCISSORS" || // Losing Conditions
        computerSelection.toUpperCase() === "PAPER" && playerSelection.toUpperCase() === "ROCK" ||
        computerSelection.toUpperCase() === "SCISSORS" && playerSelection.toUpperCase() === "PAPER"){
            return results(2,playerSelection,computerSelection);
    }else return "Error, contact developer. Error: 01";
}

function results(result,playerSelection,computerSelection){ // The results

    if (result == 0) { // Tie
        console.log(`It's a tie! ${playerSelection} vs ${computerSelection}.`);

    }else if (result == 1) { // Round Win
        console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
        playerScore+= 1;

    }else if (result == 2) { // Round Loss
        console.log(`You lose! ${playerSelection} is destroyed by ${computerSelection}.`);
        compScore+= 1;

    }else return "Error, contact developer. Error: 02";;

}
//     if (playerScore > compScore) { // Win Message
//         console.log(`You beat the computer ${playerScore} to ${compScore}.`)

//     }else if (playerScore < compScore){
//         console.log(`You lost to the computer ${playerScore} to ${compScore}.`)

//     }else console.log(`You scored ${playerScore} points. Computer scored ${compScore} points.`);
// }
window.onload = game();






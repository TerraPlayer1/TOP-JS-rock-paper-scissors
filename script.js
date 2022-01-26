
const choices = document.querySelectorAll(".choices");
const resetButton = document.querySelector(".resetButton")
const scoreMessage = document.querySelector("#score-message");
const results = document.querySelector("#results");
const score = document.querySelector("#score");

score.textContent = "0 : 0"
scoreMessage.textContent = "First to 5 wins. Good luck!"
results.textContent = ""


choices.forEach((button) =>{
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
};


let playerScore = 0;
let compScore = 0;

function resetScore() {
    playerScore = 0;
    compScore = 0;
};

function playRound(playerSelection, computerSelection){ // Compare computerSelection and playerSelection
    if (computerSelection.toUpperCase() == playerSelection.toUpperCase()){ // Tie
        return game(0,playerSelection,computerSelection);

    }else if (computerSelection.toUpperCase() === "ROCK" && playerSelection.toUpperCase() === "PAPER" || // Winning Conditions
        computerSelection.toUpperCase() === "PAPER" && playerSelection.toUpperCase() === "SCISSORS" ||
        computerSelection.toUpperCase() === "SCISSORS" && playerSelection.toUpperCase() === "ROCK"){
            return game(1,playerSelection,computerSelection);

    }else if (computerSelection.toUpperCase() === "ROCK" && playerSelection.toUpperCase() === "SCISSORS" || // Losing Conditions
        computerSelection.toUpperCase() === "PAPER" && playerSelection.toUpperCase() === "ROCK" ||
        computerSelection.toUpperCase() === "SCISSORS" && playerSelection.toUpperCase() === "PAPER"){
            return game(2,playerSelection,computerSelection);
    }else return "Error, contact developer. Error: 01";
};

function game(result,playerSelection,computerSelection){ // The results
    
    if (result == 0) { // Tie
        scoreMessage.textContent = `It's a tie! ${playerSelection} vs ${computerSelection}.`;
        scoreboard();

    }else if (result == 1) { // Round Win
        scoreMessage.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
        playerScore+= 1;
        scoreboard();

    }else if (result == 2) { // Round Loss
        scoreMessage.textContent = `You lose! ${playerSelection} is destroyed by ${computerSelection}.`;
        compScore+= 1;
        scoreboard();

    }else return "Error, contact developer. Error: 02";


    if (playerScore == 5 || compScore == 5){ // Win Message
        if (playerScore > compScore) { 
            results.textContent = `You beat the computer ${playerScore} to ${compScore}!`;


        }else if (playerScore < compScore){
            results.textContent = `You lost to the computer ${playerScore} to ${compScore}.`;

        }else
            results.textContent = `Wow, you tied... Sucks to be you.`;
            
        resetScore()
        resetGame()
        disableButtons() 
        }
};

function scoreboard() {
    score.textContent = `${playerScore} : ${compScore}`

};

function resetGame() {
    resetButton.addEventListener('click', () => {
      window.location.reload();
    });
};

function disableButtons() {
    choices.forEach((button) =>{
        button.setAttribute('disabled', '');
    });
}
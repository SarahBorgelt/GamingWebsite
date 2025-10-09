//Creates an array containing three choices for the game
const options = ["Rock", "Paper", "Scissors"];

//Define a function that will return a random choice for the computer in the game
function getRandomComputerResult() {

  //Generage a random number between 0 (inclusive) & 1 (exclusive). Multiply it by the amount of options.
  //Math.floor rounds it down to 0,1, or 2, which are valid indices for the options array
  const randomIndex = Math.floor(Math.random() * options.length);

  //Return the computer's random choice from the options array
  return options[randomIndex];
}

//Define a function that will determine if the player won the round. The required info is the player's selection and the computer's selection.
function hasPlayerWonTheRound(player, computer) {
  return (
    //If any of these combinations are true, the player won. Otherwise, return false.
    (player === "Rock" && computer === "Scissors") ||
    (player === "Scissors" && computer === "Paper") ||
    (player === "Paper" && computer === "Rock")
  );
}

//Set player score and computer score equal to zero;
let playerScore = 0;
let computerScore = 0;

//This function gets the round's results
function getRoundResults(userOption) {
  
  //This stores the computer's selection
  const computerResult = getRandomComputerResult();

  //If it is true that the player won the round, increase the player score by 1 and return the "Player Victory" message
  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;
    return `Player wins! ${userOption} beats ${computerResult}`;

    //If the computer and user chose the same option, they tied and nobody gets a point
  } else if (computerResult === userOption) {
    return `It's a tie! Both chose ${userOption}`;

    //If neither of the above cases are true, then the computer wins and the computer's score increases by 1
  } else {
    computerScore++;
    return `Computer wins! ${computerResult} beats ${userOption}`;
  }
}

//Get HTML elements and assign them to constants
const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

//This function shows the results for each person
function showResults(userOption) {
  
  //This describes the outcome of the round
  roundResultsMsg.innerText = getRoundResults(userOption);

  //Updates the text content of the element showing the computer score
  computerScoreSpanElement.innerText = computerScore;

  //Updates the test content of the element showing the player's score
  playerScoreSpanElement.innerText = playerScore;

  //If either party reaches 3 points, show the winning message with the winner's title
  if (playerScore === 3 || computerScore === 3) {
    winnerMsgElement.innerText = `${
      playerScore === 3 ? "Player" : "Computer"
    } has won the game!`;

    //Display the reset the game button 
    resetGameBtn.style.display = "block";

    //Hide the options container to prevent the player from making any further choices
    optionsContainer.style.display = "none";
  }
};

//This function resets the game
function resetGame (){
  playerScore=0 //Reset player and computer score to 0
  computerScore=0
  playerScoreSpanElement.innerText=0 //Reset inner text for player and computer to a 0-0 score
  computerScoreSpanElement.innerText=0
  roundResultsMsg.innerText="" //Reset round results
  winnerMsgElement.innerText="" //Reset winner message to blank
  resetGameBtn.style.display = "none"; //Hide the reset game button 
  optionsContainer.style.display = "block"; //Display the options container again
}

//Add an event listener if the user clicks reset game. If so, use the resetGame function
resetGameBtn.addEventListener("click", resetGame);

//Assign constants to the HTML buttons
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

//Add event listeners for click on each rock, paper, scissors button and show the corresponding result
rockBtn.addEventListener("click", function () {
  showResults("Rock");
});

paperBtn.addEventListener("click", function () {
  showResults("Paper");
});

scissorsBtn.addEventListener("click", function () {
  showResults("Scissors");
});
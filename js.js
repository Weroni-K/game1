/* computer choice, works well */
getComputerChoice = Math.floor(Math.random() * 3);

if (getComputerChoice == 0) {
    computerSelection = "rock";
} else if (getComputerChoice == 1) {
    computerSelection = "paper";
} else {
    computerSelection = "scissors";
}


/* player choice? */
getPlayerChoice = window.prompt("Rock, paper or scissors?");


/* single round */
if (getPlayerChoice.toLowerCase() === "rock" && computerSelection === "rock") {
  alert("Computer chose " + computerSelection + "!" + " Draw!");
}

else if (getPlayerChoice.toLowerCase() === "rock" && computerSelection === "paper") {
  alert("Computer chose " + computerSelection + "!" + " Computer wins!");
}

else if (getPlayerChoice.toLowerCase() === "rock" && computerSelection === "scissors") {
  alert("Computer chose " + computerSelection + "!" + " You win!");
}

else if (getPlayerChoice.toLowerCase() === "paper" && computerSelection === "scissors") {
  alert("Computer chose " + computerSelection + "!" + " Computer wins!");
}

else if (getPlayerChoice.toLowerCase() === "paper" && computerSelection === "rock") {
  alert("Computer chose " + computerSelection + "!" + " You win!");
}

else if (getPlayerChoice.toLowerCase() === "paper" && computerSelection === "paper") {
  alert("Computer chose " + computerSelection + "!" + " Draw!");
}

else if (getPlayerChoice.toLowerCase() === "scissors" && computerSelection === "scissors") {
  alert("Computer chose " + computerSelection + "!" + " Draw!");
}

else if (getPlayerChoice.toLowerCase() === "scissors" && computerSelection === "rock") {
  alert("Computer chose " + computerSelection + "!" + " Computer wins!");
}

else if (getPlayerChoice.toLowerCase() === "scissors" && computerSelection === "paper") {
  alert("Computer chose " + computerSelection + "!" + " You win!");
}

else {
  alert("Please choose either rock, paper or scissors to play the game");
}

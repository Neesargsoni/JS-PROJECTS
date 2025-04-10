// const buttons = document.querySelectorAll("button");

// const resultEl = document.getElementById("result");

// const playerScoreEl = document.getElementById("user-score");

// const computerScoreEl = document.getElementById("computer-score");

// let playerScore = 0;
// let computerScore = 0;

// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const result = playRound(button.id, computerPlay());
//     resultEl.textContent = result;

//   });
// });

// function computerPlay() {
//   const choices = ["rock", "paper", "scissors"];
//   const randomChoice = Math.floor(Math.random() * choices.length);
//   return choices[randomChoice];
// }

// function playRound(playerSelection, computerSelection) {
//   if (playerSelection === computerSelection) {
//     return "It's a tie!";
//   } else if (
//     (playerSelection === "rock" && computerSelection === "scissors") ||
//     (playerSelection === "paper" && computerSelection === "rock") ||
//     (playerSelection === "scissors" && computerSelection === "paper")
//   ) {
//     playerScore++;
//     playerScoreEl.textContent = playerScore;
//     return "You win! " + playerSelection + " beats " + computerSelection;
//   } else {
//     computerScore++;
//     computerScoreEl.textContent = computerScore;
//     return "You lose! " + computerSelection + " beats " + playerSelection;
//   }
// }

const buttons = document.querySelectorAll("button")
const label = document.getElementById("result")
const win = document.getElementById("winner")
const playerscore = document.getElementById("user-score")
const computerscore = document.getElementById("computer-score")

let playerpoints = 0
let computerpoints = 0
let attempts = 10

buttons.forEach((button) => {

  button.addEventListener("click", () => {
    if (attempts > 0) {
      const result = playground(button.id, computerplay())
      label.textContent = result;
      attempts--;
    }
    if (attempts === 0) {
      label.textContent = "Game Over! Refresh to play again."
      buttons.forEach(btn => btn.disabled = true);
      if (playerpoints > computerpoints) {
        winner.textContent = "You won"
      }
      else if (playerpoints === computerpoints) {
        winner.textContent = "Game tied"

      }
      else {
        winner.textContent = "You lost"

      }
    }

  })

})

function computerplay() {
  const choices = ['rock', 'paper', 'scissors']
  const randomchoice = Math.floor(Math.random() * choices.length);
  return choices[randomchoice]
}

function playground(playerguess, computerguess) {
  if (playerguess === computerguess) {
    return "It's a tie"
  }
  else if (
    playerguess === 'rock' && computerguess === 'scissors' ||
    playerguess === 'paper' && computerguess === 'scissors' ||
    playerguess === 'scissors' && computerguess === 'paper'
  ) {
    playerpoints++;
    playerscore.textContent = playerpoints;
    return "You win! " + playerguess + " beats " + computerguess
  }
  else {
    computerpoints++;
    computerscore.textContent = computerpoints;
    return "you lose! " + computerguess + " beats " + playerguess
  }


}

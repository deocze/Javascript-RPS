let humanScore = 0,
  computerScore = 0;
max = 3;

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * max) + 1;
  console.log(computerChoice);
  return computerChoice;
}

function getHumanChoice() {
  let humanChoice = prompt(
    "Please enter your choice (Rock, Paper or Scissors): ",
  );
  console.log(humanChoice);
  return humanChoice;
}

for (let i = 0; i < 5; i++) {
  let computerChoice = getComputerChoice();
  let humanChoice = getHumanChoice();

  playRound(humanChoice, computerChoice);

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toUpperCase();
    console.log(humanChoice);
    switch (computerChoice) {
      case 1:
        if (humanChoice == "ROCK") {
          console.log("Tied");
        }
        if (humanChoice == "PAPER") {
          console.log("You win");
          humanScore += 1;
        }
        if (humanChoice == "SCISSORS") {
          console.log("You lose");
          computerScore += 1;
        }
        break;
      case 2:
        if (humanChoice == "ROCK") {
          console.log("You lose");
          computerScore += 1;
        }
        if (humanChoice == "PAPER") {
          console.log("Tied");
        }
        if (humanChoice == "SCISSORS") {
          console.log("You win");
          humanScore += 1;
        }
        break;
      case 3:
        if (humanChoice == "ROCK") {
          console.log("You win");
          humanScore += 1;
        }
        if (humanChoice == "PAPER") {
          console.log("You lose");
          computerScore += 1;
        }
        if (humanChoice == "SCISSORS") {
          console.log("Tied");
        }
        break;
    }
    console.log(computerScore, humanScore);
  }
}

let humanScore = 0,
  computerScore = 0;
max = 3;

let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

rock.addEventListener("click", (e) => playGame(e));
paper.addEventListener("click", (e) => playGame(e));
scissors.addEventListener("click", (e) => playGame(e));


function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * max) + 1;
  return computerChoice;
}

function getHumanChoice(e) {
  let text = e.target.innerText 
  switch (text){
    case "Rock":
    console.log("User picked: Rock");
    return 1;
    case "Paper":
      console.log("User picked: Paper");
      return 2;
    case "Scissors":
      console.log("User picked: Scissors");
      return 3;
  }
}



function playGame(e){
  let computerChoice = getComputerChoice();
  let humanChoice = getHumanChoice(e);

  playRound(humanChoice, computerChoice);

  function playRound(humanChoice, computerChoice) {
    switch (computerChoice) {
      case 1:
        if (humanChoice == 1) {
          console.log("Tied");
        }
        if (humanChoice == 2) {
          console.log("You win");
          humanScore += 1;
        }
        if (humanChoice == 3) {
          console.log("You lose");
          computerScore += 1;
        }
        console.log("\n");
        break;
      case 2:
        if (humanChoice == 1) {
          console.log("You lose");
          computerScore += 1;
        }
        if (humanChoice == 2) {
          console.log("Tied");
        }
        if (humanChoice == 3) {
          console.log("You win");
          humanScore += 1;
        }
        console.log("\n");
        break;
      case 3:
        if (humanChoice == 1) {
          console.log("You win");
          humanScore += 1;
        }
        if (humanChoice == 2) {
          console.log("You lose");
          computerScore += 1;
        }
        if (humanChoice == 3) {
          console.log("Tied");
        }
        console.log("\n");
        break;
    }
    console.log("Computer Score: %d\n", computerScore,);
    console.log("Your Score: %d\n", humanScore)
  }
}

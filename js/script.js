let userScore = document.getElementById("userScore");
let userSelection = document.getElementById("userSelection");
let computerScore = document.getElementById("computerScore");
let computerSelection = document.getElementById("computerSelection");
let detailRow = document.getElementsByClassName("detailRow")[0];
let rules = document.getElementById("rules");
let reset = document.getElementById("reset");
let choiceRow = document.getElementsByClassName("choiceRow")[0];
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

let userPoints = 0;
let computerPoints = 0;

const playRound = (userChoice) => {
    let choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    userSelection.innerHTML = "Your choice: " + userChoice;
    computerSelection.innerHTML = "Computer choice: " + computerChoice;
    if 
    (
        userChoice == "rock" && computerChoice == "scissors" ||
        userChoice == "paper" && computerChoice == "rock" ||
        userChoice == "scissors" && computerChoice == "paper"
    ) {
        rules.innerHTML = "You win !";
        userPoints += 1;
        userScore.innerHTML = userPoints;
    } 
    else if 
    (
        userChoice == "rock" && computerChoice == "paper" ||
        userChoice == "paper" && computerChoice == "scissors" ||
        userChoice == "scissors" && computerChoice == "rock"
    ) {
        rules.innerHTML = "You lose !";
        computerPoints += 1;
        computerScore.innerHTML = computerPoints;
    }
    else
    {
        rules.innerHTML = "It's a tie !";
    }
}

const playGame = (userChoice) => {
    playRound(userChoice);
    if (userPoints == 5 || computerPoints == 5) {
        rules.innerHTML = "Game over: ";
        rules.innerHTML += (userPoints == 5 ? "You win !!!" : "You lose...");
        reset.style.display = "flex";
        choiceRow.style.display = "none";
    } 

}

const replayGame = () => {
    userPoints = 0;
    computerPoints = 0;
    userScore.innerHTML = userPoints;
    computerScore.innerHTML = computerPoints;
    userSelection.innerHTML = "Your choice: ";
    computerSelection.innerHTML = "Computer choice: ";
    rules.innerHTML = "Select rock, paper or scissors."
    reset.style.display = "none";
    choiceRow.style.display = "flex";
}

rock.onclick = () => playGame("rock");
paper.onclick = () => playGame("paper");
scissors.onclick = () => playGame("scissors");
reset.onclick = () => replayGame();


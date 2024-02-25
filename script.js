// FIRST NEXT SESSION
// change input method to buttons
// display image under choice

let playerChoice = document.querySelector('.js-player-choice');
let comChoice = document.querySelector('.js-com-choice');

let playerScoreDisplay = document.querySelector('.js-player-score');
let comScoreDisplay = document.querySelector('.js-com-score');


function getComputerChoice() {
    selector = Math.floor(Math.random() * 3 + 1);
    if (selector <= 1) {
        return 'Paper';
    } else if (selector <=2) {
        return 'Scissors';
    } else {
        return 'Rock';
    }
}

function playRound(comChoice, playerChoice) {
    let playerResult;
    if (comChoice === 'Rock' && playerChoice === 'rock') {
        return playerResult = 'tie';
    } else if (comChoice === 'Rock' && playerChoice === 'paper') {
        return playerResult = 'win';
    } else if (comChoice === 'Rock' && playerChoice === 'scissors') {
        return playerResult = 'loss';
    } else if (comChoice === 'Paper' && playerChoice === 'rock') {
        return playerResult = 'loss';
    } else if (comChoice === 'Paper' && playerChoice === 'paper') {
        return playerResult = 'tie';
    } else if (comChoice === 'Paper' && playerChoice === 'scissors') {
        return playerResult = 'win';
    } else if (comChoice === 'Scissors' && playerChoice === 'rock') { 
        return playerResult = 'win';
    } else if (comChoice === 'Scissors' && playerChoice === 'paper') {
        return playerResult = 'loss';
    } else {
        return playerResult = 'tie';
    }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    let computerChoice;

    while (playerScore < 5 && computerScore < 5) {
        userInput = (prompt("Enter: 'rock', 'paper' or 'scissors'.")).toLowerCase();
        computerChoice = getComputerChoice();

        comChoice.innerHTML = computerChoice;
        playerChoice.innerHTML = computerChoice;

        result = playRound(computerChoice, userInput);

        if (result === 'win') {
            playerScore++;
            playerScoreDisplay.innerHTML = `SCORE: ${playerScore}`;
        } else if (result === 'loss') {
            computerScore++;
            comScoreDisplay.innerHTML = `SCORE: ${computerScore}`;
        }
    }
    (playerScore > computerScore) ? playerScoreDisplay.innerHTML = 'Player Wins!' : comScoreDisplay.innerHTML = 'Com Wins!';
}

playGame();




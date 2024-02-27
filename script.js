// NEXT SESSION
// fix dynamic color on result (classAdd/Remove)
// display image under choice
// more visuals displaying who won
// local storage & reset score function

// DOM
let gameDisplay = document.querySelector('.js-game-display');
let playerChoiceDisplay = document.querySelector('.js-player-choice');
let comChoiceDisplay = document.querySelector('.js-com-choice');
let resultDisplay = document.querySelector('.js-result-display');
let resultText = document.getElementById('#result-text');

let playerScoreDisplay = document.querySelector('.js-player-score');
let comScoreDisplay = document.querySelector('.js-com-score');

// Variables
let playerScore = 0;
let comScore = 0;
let playerChoice;
let comChoice;

// Images
const rockImg = document.createElement("img");
rockImg.src = "img/rock-emoji.png";

const paperImg = document.createElement("img");
paperImg.src = "img/paper-emoji.png";

const scissorsImg = document.createElement("img");
scissorsImg.src = "img/scissors-emoji.png";

// randomly selects computer choice
function getComChoice() {
    selector = Math.floor(Math.random() * 3 + 1);
    if (selector <= 1) {
        return 'Paper';
    } else if (selector <=2) {
        return 'Scissors';
    } else {
        return 'Rock';
    }
}

// plays a single round and returns player outcome
function playRound(comChoice, playerChoice) {
    if (comChoice === 'Rock' && playerChoice === 'Rock') {
        return playerResult = 'tie';
    } else if (comChoice === 'Rock' && playerChoice === 'Paper') {
        return playerResult = 'win';
    } else if (comChoice === 'Rock' && playerChoice === 'Scissors') {
        return playerResult = 'loss';
    } else if (comChoice === 'Paper' && playerChoice === 'Rock') {
        return playerResult = 'loss';
    } else if (comChoice === 'Paper' && playerChoice === 'Paper') {
        return playerResult = 'tie';
    } else if (comChoice === 'Paper' && playerChoice === 'Scissors') {
        return playerResult = 'win';
    } else if (comChoice === 'Scissors' && playerChoice === 'Rock') { 
        return playerResult = 'win';
    } else if (comChoice === 'Scissors' && playerChoice === 'Paper') {
        return playerResult = 'loss';
    } else {
        return playerResult = 'tie';
    }
}

function playGame(playerChoice) {
    comChoice = getComChoice();
    result = playRound(comChoice, playerChoice);

    // update choice display
    playerChoiceDisplay.innerHTML = `PLAYER: ${playerChoice}`;
    comChoiceDisplay.innerHTML = `COM: ${comChoice}`;

    if (result === 'win') {
        playerScore++;
        playerScoreDisplay.innerHTML = `PLAYER SCORE: ${playerScore}`;
        comScoreDisplay.innerHTML = `COM SCORE: ${comScore}`;
        resultDisplay.innerHTML = "YOU WON!";
    } else if (result === 'loss') {
        comScore++;
        playerScoreDisplay.innerHTML = `PLAYER SCORE: ${playerScore}`;
        comScoreDisplay.innerHTML = `COM SCORE: ${comScore}`;
        resultDisplay.innerHTML = "YOU LOST.";
    } else {
        resultDisplay.innerHTML = "TIE.";
    }
}

// EVENT LISTENERS
// player clicks Rock
document.querySelector('.js-btn-rock').addEventListener(("click"), () => {
    playGame('Rock')
});

// player clicks paper
document.querySelector('.js-btn-paper').addEventListener(("click"), () => {
    playGame('Paper')
});

// player clicks scissors
document.querySelector('.js-btn-scissors').addEventListener(("click"), () => {
    playGame('Scissors')
});




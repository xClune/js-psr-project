// FIRST NEXT SESSION
// change input method to buttons
// display image under choice

// DOM
let playerChoiceDisplay = document.querySelector('.js-player-choice');
let comChoiceDisplay = document.querySelector('.js-com-choice');

let playerScoreDisplay = document.querySelector('.js-player-score');
let comScoreDisplay = document.querySelector('.js-com-score');

// Variables
let playerScore = 0;
let comScore = 0;
let playerChoice;
let comChoice;

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

function playGame(playerChoice) {
    console.log('player');
    comChoice = getComChoice();
    result = playRound(comChoice, playerChoice);

    // update choice display
    comChoiceDisplay.innerHTML = `Computer: ${comChoice}`;
    playerChoiceDisplay.innerHTML = `Player: ${playerChoice}`;

    if (result === 'win') {
        playerScore++;
        playerScoreDisplay.innerHTML = `SCORE: ${playerScore}`;
        comScoreDisplay.innerHTML = `SCORE: ${comScore}`;
    } else if (result === 'loss') {
        comScore++;
        playerScoreDisplay.innerHTML = `SCORE: ${playerScore}`;
        comScoreDisplay.innerHTML = `SCORE: ${comScore}`;
    }
}

// EVENT LISTENERS
// player clicks rock
document.querySelector('.js-btn-rock').addEventListener(("click"), () => {
    playGame('rock')
});

// player clicks paper
document.querySelector('.js-btn-paper').addEventListener(("click"), () => {
    playGame('paper')
});

// player clicks scissors
document.querySelector('.js-btn-scissors').addEventListener(("click"), () => {
    playGame('scissors')
});




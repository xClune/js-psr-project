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
let comResultImg = document.querySelector('.js-com-choice-img');
let playerResultImg = document.querySelector('.js-player-choice-img');

let playerScoreDisplay = document.querySelector('.js-player-score');
let comScoreDisplay = document.querySelector('.js-com-score');

// Variables
let playerScore = 0;
let comScore = 0;
let playerChoice;
let comChoice;

// Images
const rockImg = document.createElement('img');
rockImg.src = "img/rock-emoji.png";
const rockImg2 = document.createElement('img');
rockImg2.src = "img/rock-emoji.png";

const paperImg = document.createElement('img');
paperImg.src = "img/paper-emoji.png";
const paperImg2 = document.createElement('img');
paperImg2.src = "img/paper-emoji.png";

const scissorsImg = document.createElement('img');
scissorsImg.src = "img/scissors-emoji.png";
const scissorsImg2 = document.createElement('img');
scissorsImg2.src = "img/scissors-emoji.png";

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

    playerResultImg.innerHTML = '';
    comResultImg.innerHTML = '';

    // update choice display
    playerChoiceDisplay.innerHTML = `PLAYER: ${playerChoice}`;
    comChoiceDisplay.innerHTML = `COM: ${comChoice}`;

    if (playerChoice == 'Rock'){
        playerResultImg.appendChild(rockImg);
        rockImg.style.width = '80px';
        rockImg.style.height = '80px';
        rockImg.style.alignSelf = 'center';
    }
    if (playerChoice == 'Paper'){
        playerResultImg.appendChild(paperImg);
        paperImg.style.width = '80px';
        paperImg.style.height = '80px';
        paperImg.style.alignSelf = 'center';
    }
    if (playerChoice == 'Scissors'){
        playerResultImg.appendChild(scissorsImg);
        scissorsImg.style.width = '80px';
        scissorsImg.style.height = '80px';
        scissorsImg.style.alignSelf = 'center';
    }

    if (comChoice == 'Rock'){
        comResultImg.appendChild(rockImg2);
        rockImg2.style.width = '80px';
        rockImg2.style.height = '80px';
        rockImg2.style.alignSelf = 'center';
    }
    if (comChoice == 'Paper'){
        comResultImg.appendChild(paperImg2);
        paperImg2.style.width = '80px';
        paperImg2.style.height = '80px';
        paperImg2.style.alignSelf = 'center';
    }
    if (comChoice == 'Scissors'){
        comResultImg.appendChild(scissorsImg2);
        scissorsImg2.style.width = '80px';
        scissorsImg2.style.height = '80px';
        scissorsImg2.style.alignSelf = 'center';
    }
    
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

// Arbitrary changes for merge.

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




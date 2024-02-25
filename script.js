
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
        console.log(computerChoice);
        console.log(userInput);
        result = playRound(computerChoice, userInput);
        console.log(result);

        if (result === 'win') {
            playerScore++;
        } else if (result === 'loss') {
            computerScore++;
        }
        console.log(playerScore, computerScore);
    }
    console.log((playerScore > computerScore) ? 'Player Wins' : 'Computer Wins');
}

playGame();



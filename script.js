
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

function playGame(comChoice, playerChoice) {
    if (comChoice === 'Rock' && playerChoice === 'rock') {
        return "Computer selected Rock. Tie."
    } else if (comChoice === 'Rock' && playerChoice === 'paper') {
        return "Player wins. Computer selected Rock."
    } else if (comChoice === 'Rock' && playerChoice === 'scissors') {
        return "Computer wins. Computer selected Rock."
    } else if (comChoice === 'Paper' && playerChoice === 'rock') {
        return "Computer wins. Computer selected Paper."
    } else if (comChoice === 'Paper' && playerChoice === 'paper') {
        return "Tie. Computer selected Paper."
    } else if (comChoice === 'Paper' && playerChoice === 'scissors') {
        return "Player wins. Computer selected Paper."
    } else if (comChoice === 'Scissors' && playerChoice === 'rock') { 
        return "Player wins. Computer selected Scissors."
    } else if (comChoice === 'Scissors' && playerChoice === 'paper') {
        return "Computer wins. Computer selected Scissors."
    } else {
        return "Tie. Computer selected Scissors."
    }
}

const userInput = (prompt("Enter: 'rock', 'paper' or 'scissors'.")).toLowerCase();

console.log(playGame(getComputerChoice(), userInput));


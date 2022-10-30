// Get Computer Choice
// Create variable 'choice'
// Create a random number between 0 & 2
// Use that number to select 'rock' 'paper' or 'scissors'
// return 'choice'

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0: choice = 'rock'; break;
        case 1: choice = 'paper'; break;
        case 2: choice = 'scissors'; break;
    }
    return choice;
}

// Make Player Selection
// Create a variable 'choice'
// Prompt player to choose 'rock' 'paper' or 'scissors'
// Convert string to lower

function makePlayerSelection() {
    let choice;
    choice = prompt("Type: Rock, Paper or Scissors");
    choice = choice.toLowerCase();
    return choice;
}

// Play Round
// Takes computer selection and player selection as parameters
// Compares selections to determine winner
// 

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Draw";
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return "You win!";
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return "You lose!";
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return "You win!";
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return "You lose!";
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return "You win!";
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return "You lose!";
    }
}

// Game
// Create variable record and result
// Loop play round 5 times
// Determine result
// When round results in a win record++
// When round reults in a loss record--
// Check record to determine winner

function game() {
    let record = 0;
    let result;
    for (let i = 1; i <= 5; i++) {
        result = playRound(getComputerChoice(), makePlayerSelection());
        console.log(result);
        switch (result) {
            case "You win!": record++; break;
            case "You lose!": record--; break;
            default: break;
        }
    }
    if (record > 0) {
        console.log("After 5 rounds you have beat the computer");
    } else if (record < 0) {
        console.log("After 5 rounds you have lost to the computer");
    } else {
        console.log("You have drawn with the computer");
    }
}

game();
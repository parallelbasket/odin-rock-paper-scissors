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
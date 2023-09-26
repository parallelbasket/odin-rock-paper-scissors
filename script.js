const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const COMPUTER_WINS = 'COMPUTER_WINS';
const PLAYER_WINS = 'PLAYER_WINS';
const DRAW = 'DRAW';

function getComputerChoice() {
    //Get a random number, multiply by three
    //Assign different choices to each number
    //Return ROCK, PAPER or SCISSORS
    let num = Math.floor(Math.random() * 3);
    switch(num) {
        case 0: return ROCK; break;
        case 1: return PAPER; break;
        case 2: return SCISSORS; break;
    }
}

function getPlayerChoice() {
    let choice = prompt("Enter 'ROCK', 'PAPER' or 'SCISSORS'");
    switch(choice.toUpperCase()) {
        case 'ROCK': return ROCK; break;
        case 'PAPER': return PAPER; break;
        case 'SCISSORS': return SCISSORS; break;
        default: getPlayerChoice(); break;
    }
}

function checkWinner(computerSelection, playerSelection) {
    if (computerSelection == playerSelection) {
        return DRAW;
    } else if (computerSelection == ROCK) {
        switch(playerSelection) {
            case PAPER: return PLAYER_WINS; break;
            case SCISSORS: return COMPUTER_WINS; break;
        }
    } else if (computerSelection == PAPER) {
        switch(playerSelection) {
            case SCISSORS: return PLAYER_WINS; break;
            case ROCK: return COMPUTER_WINS; break;
        }
    } else if (computerSelection == SCISSORS) {
        switch(playerSelection) {
            case ROCK: return PLAYER_WINS; break;
            case PAPER: return COMPUTER_WINS; break;
        }
    }
}

function displayWinner(winner, computerSelection, playerSelection) {
    if(winner == PLAYER_WINS) {
        console.log('You win! ' + playerSelection + ' beats ' + computerSelection)
    } else if (winner == COMPUTER_WINS) {
        console.log('You lose! ' + computerSelection + ' beats ' + playerSelection)
    } else if (winner == DRAW) {
        console.log("It's a draw. You both chose " + playerSelection);
    }
}

function displayGameWinner(playerWinCount, computerWinCount) {
    if (playerWinCount == computerWinCount) {
        console.log('The game is a draw.');
    } else if (playerWinCount > computerWinCount) {
        console.log('You won the game!');
    } else {
        console.log('You lost the game!');
    }
}

function displayScore(playerWinCount, computerWinCount, drawCount) {
    console.log('You have won ' + playerWinCount + ' round, drawn ' + drawCount + ' rounds and lost ' + computerWinCount + ' rounds.');
}

function playRound() {
    let computerSelection = getComputerChoice();
    let playerSelection = getPlayerChoice();
    let winner = checkWinner(computerSelection, playerSelection);
    displayWinner(winner, computerSelection, playerSelection);
    return winner;
}

function game() {
    //Loop for five rounds
    //After each round print scores
    //Print a final score with a special message
    let playerWinCount = 0;
    let computerWinCount = 0;
    let drawCount = 0;

    for(let i = 0; i < 5; i++) {
        let winner = playRound();

        if (winner == PLAYER_WINS) {
            playerWinCount++;
        } else if (winner == COMPUTER_WINS) {
            computerWinCount++;
        } else if (winner == DRAW) {
            drawCount++;
        }
        displayScore(playerWinCount, computerWinCount, drawCount);
    }
    displayGameWinner(playerWinCount, computerWinCount);
}

game();
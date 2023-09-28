const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const COMPUTER_WINS = 'COMPUTER_WINS';
const PLAYER_WINS = 'PLAYER_WINS';
const DRAW = 'DRAW';
let score = [0,0,0];//[Player win, Computer win, Draw]

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

function setupButtons() {
    const buttons = document.querySelectorAll('button');    
    let playerSelection;
    

    buttons.forEach((button) => {
        button.addEventListener('click', getPlayerChoice);
        button.addEventListener('click', playRound)
    } )
}

function getPlayerChoice(e) {
    playerSelection =  e.srcElement.id;
}

function checkRoundWinner(computerSelection, playerSelection) {
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
    const message = document.querySelector('.result-display');
    if(winner == PLAYER_WINS) {
        message.textContent = 'You win! ' + playerSelection + ' beats ' + computerSelection
    } else if (winner == COMPUTER_WINS) {
        message.textContent = 'You lose! ' + computerSelection + ' beats ' + playerSelection
    } else if (winner == DRAW) {
        message.textContent = "It's a draw. You both chose " + playerSelection;
    }
}

function displayGameWinner() {
    const message = document.querySelector('.game-winner-display');
    if (score[0] == 5) {
        message.textContent = 'You won the game!';
    } else if (score[1] == 5) {
        message.textContent = 'You lost the game!';
    }
}

function endGame() {
    const buttons = document.querySelectorAll('button'); 
    if(score[0] == 5 || score[1] == 5) {
        buttons.forEach((button) => {
            button.removeEventListener('click', playRound)
        } )
    }
}

function displayScore() {
    const message = document.querySelector('.score-display');
    message.textContent = 'You have won ' + score[0] + ' rounds, drawn ' + score[2] + ' rounds and lost ' + score[1] + ' rounds.';
}

function updateScore(winner) {
    if(winner == PLAYER_WINS) {
        score[0]++;
    } else if (winner == COMPUTER_WINS) {
        score[1]++
    } else if (winner == DRAW) {
        score[2]++;
    }
}

function checkGameWinner() {
    if(score[0] == 5) {}
}

function playRound() {
    let computerSelection = getComputerChoice();
    let winner = checkRoundWinner(computerSelection, playerSelection);updateScore(winner);
    displayWinner(winner, computerSelection, playerSelection);
    displayScore();
    displayGameWinner();
    endGame();
    return winner;
}

setupButtons();
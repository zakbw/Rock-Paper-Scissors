let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let answers = ["rock", "paper", "scissors"] 
    const random = Math.floor(Math.random() * answers.length);
    return (random, answers[random]);
}

function playRound(playerChoice, computerChoice) {
    if(playerChoice === computerChoice) {
        return ('Both played the same. Tie.')
            } else if(playerChoice == 'rock') {
                if(computerChoice == 'paper')
                    return ('Computer plays paper. You lose.')
                if(computerChoice == 'scissors')
                    return ('Computer plays scissors. You win!')
                        let playerScore = playerScore++;
            } else if(playerChoice == 'paper') {
                if(computerChoice == 'scissors')
                    return ('Computer plays scissors. You lose.') 
                if(computerChoice == 'rock')
                    return ('Computer plays rock. You win!')
            } else if(playerChoice == 'scissors') {
                if(computerChoice == 'rock')
                    return ('Computer plays rock. You lose.')
                if(computerChoice == 'paper')
                    return ('Computer plays paper. You win!')
            }
}

function game(){
    playRound()
        if(playerScore === 5)
            console.log('You won 5 games. Congratulations!')
        else if(computerScore === 5)
            console.log('Computer won 5 games. You lose...')
}

console.log(playerScore)

game()

const playerChoice = prompt("Scissors, Paper or Rock?").toLowerCase();
const computerChoice = getComputerChoice();
console.log(playRound(playerChoice, computerChoice))

function getComputerChoice() {
    let answers = ["rock", "paper", "scissors"] 
    const random = Math.floor(Math.random() * answers.length);
    return (random, answers[random]);
}

function playRound(playerChoice, computerChoice) {
    if(playerChoice === computerChoice) {
        return ('tie')
    } else {
        return ('none')
    }
}

playRound()

const playerChoice = prompt("Scissors, Paper or Rock?").toLowerCase();
const computerChoice = getComputerChoice();
console.log(playRound(playerChoice, computerChoice))
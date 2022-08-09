const userScore = 0;
const computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div  = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}                   
function convertToWord(letter) {
    if(letter == "r") return "Rock";
    if(letter=="p") return "Paper";
    return "Scissors";
}
function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const compSmallWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${user}  beats  ${convertToWord(computerChoice)}${compSmallWord}. You win!`;
}
function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const compSmallWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${user}  loses to  ${convertToWord(computerChoice)}${compSmallWord}. You lost!`;
}
function draw(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const compSmallWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${user}  results in a draw with  ${convertToWord(computerChoice)}${compSmallWord}. draw`;

}


function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            console.log("USER WINS")
            break;
        case "rp":
        case "ps":
        case "sr":
            console.log("computer wins")
            break;
        case "rr":
        case "pp":
        case "ss":
            console.log("draw")
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    })
    paper_div.addEventListener('click', function() {
        game("p");
    })
    scissor_div.addEventListener('click', function() {
        game("s");
    })
}
main();

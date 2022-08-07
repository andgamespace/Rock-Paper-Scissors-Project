const userScore = 0;
const computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBaord_div  = document.querySelector(".score-board");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissor")
function getComputerChoice() {
    const choices = ["r", "p", "s"];
}
function game(userChoice){
    console.log("choice:" + userChoice)
}
function main() {
    rock_div.addEventListener('click', function() {
        game("rock");
    })
    paper_div.addEventListener('click', function() {
        game("paper");
    })
    scissor_div.addEventListener('click', function() {
        game("scissor");
    })
}
main();

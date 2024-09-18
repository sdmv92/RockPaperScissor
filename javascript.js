function getComputerChoice(){
    let aiRandomChoice = Math.floor(Math.random()*3)+1;
    if (aiRandomChoice==1) {
        aiRandomChoice="rock";
    }else if (aiRandomChoice==2){
        aiRandomChoice="paper";
    }else {
        aiRandomChoice="scissor";
    }
    return aiRandomChoice;
}

function getHumanChoice(){
    let humanChoice = prompt ("Rock, Paper, or Scissor??");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}

let humanScore=0;
let computerScore=0;
function playRound(humanChoice,aiRandomChoice){
    if (humanChoice===aiRandomChoice){
        console.log("It's a tie");
    }else if (humanChoice==="rock" && aiRandomChoice==="paper"){
        console.log("You loose. Paper beats Rock");
        ++computerScore;
    }else if (humanChoice==="rock" && aiRandomChoice==="scissor"){
        console.log("You win!!. Rock beats Scissor");
        ++humanScore;
    }else if (humanChoice==="paper" && aiRandomChoice==="rock"){
        console.log("You win!!. Paper beats rock");
        ++humanScore;
    }else if (humanChoice==="paper" && aiRandomChoice==="scissor"){
        console.log("You loose. Scissor beats Paper");
        ++computerScore;
    }else if (humanChoice==="scissor" && aiRandomChoice==="rock"){
        console.log("You loose. Rock beats scissor");
        ++computerScore;
    }else if (humanChoice==="scissor" && aiRandomChoice==="paper"){
        console.log("You win!!. Scissor beats Paper");
        ++humanScore;
    }
    console.log("Your score: ", humanScore, "Computer score: ", computerScore);
}


function playgame(){
    let roundCount=0
    while(roundCount<5) {
    const humanSelection=getHumanChoice();
    const aiSelection=getComputerChoice().toString();
    playRound(humanSelection,aiSelection);
    roundCount++;
    }
    if (humanScore>computerScore){
        console.log("You won the game!!!");
    }else if (humanScore<computerScore){
        console.log("You lost the game :(");
    }else {
        console.log("The scores are tied")
    }
}

playgame();

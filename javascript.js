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

let humanScore=0;
let computerScore=0;
function playRound(humanChoice,aiRandomChoice){
    if(humanScore ==5){
        result.textContent= "You Won the game!!!"
        humanScore =0
        computerScore =0
    }else if(computerScore ==5){
        result.textContent= "You lost the game :("
        humanScore =0
        computerScore =0
    }else if (humanChoice===aiRandomChoice){

        result.textContent= "It's a tie"
    }else if (humanChoice==="rock" && aiRandomChoice==="paper"){
        
        result.textContent="You loose. Paper beats Rock"
        ++computerScore;
    }else if (humanChoice==="rock" && aiRandomChoice==="scissor"){
        
        result.textContent="You win!!. Rock beats Scissor"
        ++humanScore;
    }else if (humanChoice==="paper" && aiRandomChoice==="rock"){
        
        result.textContent="You win!!. Paper beats rock"
        ++humanScore;
    }else if (humanChoice==="paper" && aiRandomChoice==="scissor"){
        
        result.textContent="You loose. Scissor beats Paper"
        ++computerScore;
    }else if (humanChoice==="scissor" && aiRandomChoice==="rock"){
        
        result.textContent="You loose. Rock beats scissor"
        ++computerScore;
    }else if (humanChoice==="scissor" && aiRandomChoice==="paper"){
        
        result.textContent="You win!!. Scissor beats Paper"
        ++humanScore;
    }
    console.log("Your score: ", humanScore, "Computer score: ", computerScore);
    score.innerHTML=`Your score: <span style="color:blue ; font-weight:bold ; font-size:24px">${humanScore}</span> || Computer score: <span style="color:red ; font-weight:bold ; font-size:24px">${computerScore}</span>`
}


function playgame(){
    if(humanScore !=5 || computerScore!=5){
        const humanSelection=getHumanChoice();
    const aiSelection=getComputerChoice().toString();
    playRound(humanSelection,aiSelection);
    roundCount++;
    
    if (humanScore>computerScore){
        console.log("You won the game!!!");
    }else if (humanScore<computerScore){
        console.log("You lost the game :(");
    }else {
        console.log("The scores are tied")
    }
    }
    
}

const forRock= document.querySelector("#forRock")
const forPaper= document.querySelector("#forPaper")
const forScissor= document.querySelector("#forScissor")
const result= document.querySelector("#result")
const score= document.querySelector("#score")

forRock.addEventListener("click",()=>playRound("rock",getComputerChoice().toString()))
forPaper.addEventListener("click",()=>playRound("paper",getComputerChoice().toString()))
forScissor.addEventListener("click",()=>playRound("scissor",getComputerChoice().toString()))

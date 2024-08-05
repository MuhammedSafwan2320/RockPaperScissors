let humanScore = 0;
let computerScore = 0;


/*function getComputerChoice() {

    computerChoice = ["rock", "paper", "scissors"]
    computerChoice = computerChoice.at(Math.floor(Math.random()*3))
    console.log(computerChoice);
}


    
    function getHumanChoice() {

    humanChoice = prompt("Rock, Paper, Scissors, shoot!");
    console.log(`You chose ${humanChoice.toLowerCase()}!`);
    humanChoice = humanChoice.toLowerCase();
    
} */



function playGame(){
    for(i=1; i<=5; i++) {

        playRound(i);
    }

    if (humanScore>computerScore) {

        console.log(`Congratulations! You win! Your score is ${humanScore} to Computer Score of ${computerScore}`)
       
    } else if (humanScore<computerScore) {
        console.log(`Hard luck! Computer won with ${computerScore} against your score of ${humanScore}.`)
        
    } else {

        console.log("You are tied!")
    }

}

function playRound() {

    computerChoice = ["rock", "paper", "scissors"]
    computerChoice = computerChoice.at(Math.floor(Math.random()*3))
    //console.log(computerChoice);

    humanChoice = prompt("Rock, Paper, Scissors, shoot!");
    humanChoice = humanChoice.toLowerCase();
    //console.log(`You chose ${humanChoice.toLowerCase()}!`);
    
    switch(true) {

    
        case (humanChoice != "rock" && humanChoice != "paper" && humanChoice != "scissors"):
            console.log("Invalid input! Enter rock, paper or scissors!")
            break; 

        case (humanChoice == "rock" && computerChoice == "scissors"):
            console.log("You win! Computer chose scissors.")
            humanScore++
            break;
        
        case (humanChoice == "rock" && computerChoice == "paper"):
            console.log("Computer wins! Computer chose paper.")
            computerScore++
            break;
        
        case (humanChoice == "paper" && computerChoice == "scissors"):
        console.log ("Computer wins! Computer chose scissors.")
        computerScore++
        break;

        case (humanChoice == "paper" && computerChoice == "rock"):
        console.log ("You win! Computer chose rock.")
        humanScore++
        break;

        case (humanChoice == "scissors" && computerChoice == "rock"):
        console.log ("Computer wins! Computer chose rock.")
        computerScore++
        break;

        case (humanChoice == "scissors" && computerChoice == "paper"):
        console.log ("You win! Computer chose paper.")
        humanScore++
        break;

        case (humanChoice ==  computerChoice):
        console.log (`You both chose ${humanChoice}`)
        break;

    }


}




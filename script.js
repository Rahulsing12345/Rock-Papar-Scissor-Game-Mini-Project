let userScore = 0;
let computerScore = 0;
const choices = document.querySelectorAll(".emogi");
let result = document.querySelector(".msg-box");
let getUserScore = document.querySelector(".user-score-count");
let getCompScore = document.querySelector(".computer-score-count");

// Function to change the style of the computer's choice
const highlightComputerChoice = (compChoice) => {
    const compChoiceElement = document.getElementById(compChoice);
   
    compChoiceElement.classList.add("highlight");
    
    
    setTimeout(() => {
        compChoiceElement.classList.remove("highlight");
    }, 2000);
};




choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        let compChoice = genCompChoice();

        console.log(`user choice = ${userChoice} and computer choice = ${compChoice}`);


        // Highlight the computer's choice
        highlightComputerChoice(compChoice);


        
        if (userChoice === compChoice) {
            result.innerText = "Match Tie";
        } else if ((userChoice === "rock" && compChoice === "scissor") || 
                   (userChoice === "paper" && compChoice === "rock") || 
                   (userChoice === "scissor" && compChoice === "paper")) {
            result.innerText = "User wins";
            userScore += 1;
            getUserScore.innerText = userScore;
        } else if ((userChoice === "rock" && compChoice === "paper") || 
                   (userChoice === "scissor" && compChoice === "rock") || 
                   (userChoice === "paper" && compChoice === "scissor")) {
            result.innerText = "Computer wins";
            computerScore += 1;
            getCompScore.innerText = computerScore;
        } else {
            console.log("Invalid input! Please choose rock, paper, or scissors.");
        }
    });
});

const genCompChoice = () => {
    let arr = ["rock", "paper", "scissor"];
    const compChoiceIndex = Math.floor(Math.random() * 3);
    return arr[compChoiceIndex];
};

const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === "bomb") {
      return userInput;
    }
    else {
      console.log("Error. Please enter valid response.")
    }
  }
  
  //console.log(getUserChoice("PAPER"));
  //console.log(getUserChoice("BAD CHOICE"));
  
  function getComputerChoice() {
    var choice = Math.floor(Math.random(choice) * 3);
    if (choice === 0) {
      return "rock";
    }
    else if (choice === 1) {
      return "paper";
    }
    else if (choice === 2) {
     return "scissors";
    }
  
  }
  //getComputerChoice();
  //console.log(getComputerChoice())
  
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice){
      return "Tie"
    }
    else if (userChoice === "bomb"){
      return "You win."
    }
    else if (userChoice === 'rock'){
      if (computerChoice === 'paper'){
        return "You lose.";
        }
      else if (computerChoice === 'scissors'){
        return "You win.";
      }
    }
    else if (userChoice === 'paper'){
      if (computerChoice === 'scissors'){
        return "You lose.";
        }
      else if (computerChoice === 'scissors'){
        return "You win.";
      }
    }
     else if (userChoice === 'scissors'){
      if (computerChoice === 'paper'){
        return "You win.";
        }
      else if (computerChoice === 'rock'){
        return "You lose.";
      }
    }
      
  }
  //console.log(determineWinner('paper', 'scissors'))
  
  function playGame() {
    var userChoice = getUserChoice('bomb');
    console.log("You threw " + userChoice + ".");
    var computerChoice = getComputerChoice();
    console.log("The computer chose " + computerChoice + ".");
    
    determineWinner(userChoice, computerChoice)
    console.log(determineWinner(userChoice, computerChoice))
  }
  playGame();
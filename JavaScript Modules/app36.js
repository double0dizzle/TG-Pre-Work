//In this project we will build the Magic Eight Ball using control flow in JavaScript.
//The user will be able to input a question, then our program will output a random fortune.

var userName = "Mike";

//if user enters a name then they will get a proper greeting
userName ? console.log("Hello " + userName) :
console.log("Hello!");

var userQuestion = "How lucky am I?"
console.log("The user asked: " + userQuestion);

//this creates a random number between 0 and 7
var randomNumber = Math.floor(Math.random() * 8);

var eightBall = "";

//switch case for responses determined by random number
switch (randomNumber) {
  case 0:
    eightBall = "It is certain.";
    //console.log("It is certain.")
    break;
    
  case 1:
    eightBall = "It is decidedly so.";
    //console.log("It is decidedly so.")
    break;
    
  case 2:
    eightBall = "Reply hazy try again.";
    //console.log("Reply hazy try again.")
    break;
    
  case 3:
    eightBall = "Cannot predict now.";
    //console.log("Cannot predict now.")
    break;
    
  case 4: 
    eightBall = "Do not count on it.";
    //console.log("Do not count on it.")
    break;
    
  case 5:
    eightBall = "My sources say no.";
    //console.log("My sources say no.")
    break;
    
  case 6:
    eightBall = "Outlook not so good.";
    //console.log("Outlook not so good.")
    break;
    
  case 7:
    eightBall = "Signs point to yes.";
    //console.log("Signs point to yes.")
    break;
}

console.log(`The eight ball answered: ${eightBall}`);
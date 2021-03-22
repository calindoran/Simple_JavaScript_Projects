"use strict";

var getUserChoice = function getUserChoice(userInput) {
  userInput = userInput.toLowerCase();
  if (userInput === "bomb") {
    return "bomb";
  }

  if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
    return userInput;
  } else {
    console.log("Error, not vaild input.");
  }
};

//console.log(getUserChoice('rock'));
var getComputerChoice = function getComputerChoice() {
  var randNum = Math.floor(Math.random() * 3);
  switch (randNum) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
};

//console.log(getComputerChoice());

var determineWinner = function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "Tie! Go again!";
  }

  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "The Comp won!";
    } else {
      return "You Won!";
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "The Comp won!";
    } else {
      return "You Won!";
    }
  }

  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "The Comp won!";
    } else {
      return "You Won!";
    }
  }

  if (userChoice === "bomb") {
    return "You win! Cos BOMB! >:o";
  }
};

//console.log(determineWinner('paper', 'scissors'));
//console.log(determineWinner('paper', 'paper'));
//console.log(determineWinner('paper', 'rock'));

var playGame = function playGame() {
  var userChoice = getUserChoice("rock");
  var computerChoice = getComputerChoice();
  console.log("You did: " + userChoice);
  console.log("Comp did: " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
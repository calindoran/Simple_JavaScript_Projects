"use strict";

var _messagemixer = require("./messagemixer.js");

function displayMessage() {
  console.log((0, _messagemixer.countCharacter)("What is the color of the sky?", "t"));
  console.log((0, _messagemixer.capitalizeFirstCharacterOfWords)("What is the color of the sky?"));
  console.log((0, _messagemixer.reverseWord)("What is the color of the sky?"));
  console.log((0, _messagemixer.reverseAllWords)("What is the color of the sky?"));
  console.log((0, _messagemixer.replaceFirstOccurence)("What is the color of the sky?", "sky", "water"));
  console.log((0, _messagemixer.encode)("What is the color of the sky?"));
  console.log((0, _messagemixer.palindrome)("What is the color of the sky?"));
  console.log((0, _messagemixer.pigLatin)("What is the color of the sky?", "oof"));
} //const MessageMixer = require('./messageMixer.js');


displayMessage();
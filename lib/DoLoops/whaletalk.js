"use strict";

var input = "a whale of a deal!";
var vowels = ["a", "e", "i", "o", "u"];

var resultArray = [];
for (var i = 0; i < input.length; i++) {
  //console.log(input[i]);
  //console.log('i is '+i);
  for (var j = 0; j < vowels.length; j++) {
    //console.log(j);
    if (input[i] === vowels[j]) {
      resultArray.push(vowels[j]);
    }
  }
  if (input[i] === "e") {
    resultArray.push(input[i]);
  }
  if (input[i] === "u") {
    resultArray.push(input[i]);
  }
}

console.log(resultArray.join(" ").toUpperCase());
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var MessageMixer = {};

var countCharacter = function countCharacter(inputString, inputCharacter) {
  var count = 0;
  var string = inputString.toLowerCase();
  var character = inputCharacter.toLowerCase();
  for (var i = 0; i < string.length; i++) {
    if (string[i] === character) {
      count++;
    }
  }
  return count;
};

var capitalizeFirstCharacterOfWords = function capitalizeFirstCharacterOfWords(string) {
  var arr = string.split(" ");
  for (var i = 0; i < arr.length; i++) {
    var word = arr[i];
    arr[i] = word[0].toUpperCase() + word.substring(1);
  }
  return arr.join(" ");
};

var reverseWord = function reverseWord(word) {
  return word.split("").reverse().join("");
};

var reverseAllWords = function reverseAllWords(sentence) {
  var words = sentence.split(" ");
  for (var i = 0; i < words.length; i++) {
    words[i] = reverseWord(words[i]);
  }
  return words.join(" ");
};

var replaceFirstOccurence = function replaceFirstOccurence(string, toBeReplaced, replaceWith) {
  return string.replace(toBeReplaced, replaceWith);
};

var replaceAllOccurrences = function replaceAllOccurrences(string, toBeReplaced, replaceWith) {
  return string.split(toBeReplaced).join(replaceWith);
};

var encode = function encode(string) {
  var replacementObject = { a: "@", s: "$", i: "!", o: "0" };
  for (var key in replacementObject) {
    string = replaceAllOccurrences(string, key, replacementObject[key]);
  }
  return string;
};

var palindrome = function palindrome(str) {
  return str + " " + reverseWord(str);
};

var pigLatin = function pigLatin(sentence, character) {
  return sentence.split(" ").join(character + " ");
};

//module.exports = MessageMixer;
exports.countCharacter = countCharacter;
exports.capitalizeFirstCharacterOfWords = capitalizeFirstCharacterOfWords;
exports.reverseWord = reverseWord;
exports.reverseAllWords = reverseAllWords;
exports.replaceFirstOccurence = replaceFirstOccurence;
exports.replaceAllOccurrences = replaceAllOccurrences;
exports.encode = encode;
exports.palindrome = palindrome;
exports.pigLatin = pigLatin;
"use strict";

var _encryptors = require("./encryptors.js");

var encodeMessage = function encodeMessage(str) {
  // Use the encryptor functions here.
  return (0, _encryptors.reverseCipher)((0, _encryptors.symbolCipher)((0, _encryptors.caesarCipher)(str, 4)));
}; // Import the encryptors functions here.

// 3.
// const {caesarCipher, symbolCipher, reverseCipher} = require('./encryptors.js');


var decodeMessage = function decodeMessage(str) {
  // Use the encryptor functions here.
  return (0, _encryptors.caesarCipher)((0, _encryptors.symbolCipher)((0, _encryptors.reverseCipher)(str)), -4);
};

// User input / output.

var handleInput = function handleInput(userInput) {
  var str = userInput.toString().trim();
  var output = void 0;
  if (process.argv[2] === "encode") {
    output = encodeMessage(str);
  }
  if (process.argv[2] === "decode") {
    output = decodeMessage(str);
  }

  process.stdout.write(output + "\n");
  process.exit();
};

// Run the program.
process.stdout.write("Enter the message you would like to encrypt...\n> ");
process.stdin.on("data", handleInput);
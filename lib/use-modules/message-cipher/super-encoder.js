"use strict";

// Import the encryptors functions here.

var encodeMessage = function encodeMessage(str) {
  // Use the encryptor functions here.
};

var decodeMessage = function decodeMessage(str) {
  // Use the encryptor functions here.
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
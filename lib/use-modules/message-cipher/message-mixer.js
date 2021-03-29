"use strict";

var _encryptors = require("./encryptors.js");

// User Input / Output Logic

var encryptionMethod = getEncryptionMethod(); // Import the functions from encryptors.js here.

// 1.
// let encryptors = {};
// encryptors = require("./encryptors.js");
// const { caesarCipher, symbolCipher, reverseCipher } = encryptors;

process.stdin.on("data", function (userInput) {
  displayEncryptedMessage(encryptionMethod, userInput);
});

/* Helper function for determining which cipher method
the user chose when they ran the program. */
function getEncryptionMethod() {
  var encryptionMethod = void 0;

  var encryptionType = process.argv[2];
  if (encryptionType === "symbol") {
    encryptionMethod = _encryptors.symbolCipher;
  } else if (encryptionType === "reverse") {
    encryptionMethod = _encryptors.reverseCipher;
  } else if (encryptionType === "caesar") {
    var amount = Number(process.argv[3]);
    if (Number.isNaN(amount)) {
      process.stdout.write("Try again with a valid amount argument. \n");
      process.exit();
    }
    encryptionMethod = function encryptionMethod(str) {
      return (0, _encryptors.caesarCipher)(str, amount);
    };
  } else {
    process.stdout.write("Try again with a valid encryption type. \n");
    process.exit();
  }

  process.stdout.write("Enter the message you would like to encrypt...\n> ");
  return encryptionMethod;
}

/* Helper function for displaying the encrypted message to the user. */
function displayEncryptedMessage(encryptionMethod, userInput) {
  var str = userInput.toString().trim();
  var output = encryptionMethod(str);
  process.stdout.write("\nHere is your encrypted message:\n> " + output + "\n");
  process.exit();
}
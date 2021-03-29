"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Declare and export the functions here.
// Encryption Functions

var caesarCipher = function caesarCipher(str) {
  var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  if (amount < 0) {
    return caesarCipher(str, amount + 26);
  }
  var output = "";
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (char.match(/[a-z]/i)) {
      var code = str.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        char = String.fromCharCode((code - 65 + amount) % 26 + 65);
      } else if (code >= 97 && code <= 122) {
        char = String.fromCharCode((code - 97 + amount) % 26 + 97);
      }
    }
    output += char;
  }
  return output;
};

var symbolCipher = function symbolCipher(str) {
  var symbols = {
    i: "!",
    "!": "i",
    l: "1",
    1: "l",
    s: "$",
    $: "s",
    o: "0",
    0: "o",
    a: "@",
    "@": "a",
    e: "3",
    3: "e",
    b: "6",
    6: "b"
  };

  var output = "";
  for (var i = 0; i < str.length; i++) {
    var char = str.toLowerCase()[i];

    if (symbols[char]) {
      output += symbols[char];
    } else {
      output += char;
    }
  }
  return output;
};

var reverseCipher = function reverseCipher(sentence) {
  var words = sentence.split(" ");
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].split("").reverse().join("");
  }
  return words.join(" ");
};

// 2.
// module.exports = {
//   caesarCipher,
//   symbolCipher,
//   reverseCipher,
// };

exports.caesarCipher = caesarCipher;
exports.symbolCipher = symbolCipher;
exports.reverseCipher = reverseCipher;
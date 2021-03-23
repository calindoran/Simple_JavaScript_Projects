"use strict";

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */

function vowelsAndConsonants(s) {
  //create const v of vowels
  //check if s includes v
  //print s
  //else print s of c with \n

  var v = "aeiou";
  var c = "";

  for (var i = 0; i < s.length; i++) {
    if (v.includes(s[i])) {
      console.log(s[i]);
    } else {
      c += s[i] + "\n";
    }
  }

  console.log(c.trim());
}

vowelsAndConsonants("leeetcooodeechallange");
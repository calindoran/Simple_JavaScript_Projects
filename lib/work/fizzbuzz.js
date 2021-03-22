"use strict";

/**
 * That fizzbuzz life
 */

var fizz = "fizz";
var buzz = "buzz";
var fizzbuzz = "fizzbuzz";

for (var i = 1; i < 101; i++) {
  if (i % 15 === 0) {
    console.log(fizzbuzz);
  } else if (i % 5 === 0) {
    console.log(fizz);
  } else if (i % 3 === 0) {
    console.log(buzz);
  }
  console.log(i);
}
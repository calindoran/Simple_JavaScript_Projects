"use strict";

var raceNumber = Math.floor(Math.random() * 1000);
var isEarly = true;
var runnerAge = 18;
if (runnerAge >= 18 && isEarly) {
  raceNumber += 1000;
}

if (runnerAge > 18 && isEarly) {
  console.log("Early Runners Race at 9:30am " + raceNumber + ".");
} else if (runnerAge > 18 && !isEarly) {
  console.log("Late Adults Race at 11:00am " + raceNumber);
} else {
  console.log("Youth Race at 12:30pm " + raceNumber);
}
"use strict";

var getSleep = function getSleep(day) {
  switch (day) {
    case "monday":
      return 8;
      break;
    case "tuesday":
      return 10;
      break;
    case "wedensday":
      return 10;
      break;
    case "thursday":
      return 11;
      break;
    case "friday":
      return 11;
      break;
  }
};

//console.log(getSleep('tuesday'));

var getActualSleepHours = function getActualSleepHours() {
  var sum = getSleep("monday") + getSleep("tuesday") + getSleep("wedensday") + getSleep("thursday") + getSleep("friday");
  return sum;
};

var getIdealSleepHours = function getIdealSleepHours() {
  var idealHours = 7;
  return idealHours * 7;
};

console.log("Actual: " + getActualSleepHours());
console.log("Ideal: " + getIdealSleepHours());

var calculateSleepDebt = function calculateSleepDebt() {
  var actualSleepHours = getActualSleepHours();
  var idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log("Wow, you actually got some sleep! monkaS");
  } else if (actualSleepHours > idealSleepHours) {
    var more = actualSleepHours - idealSleepHours;
    console.log("You got more than you needed bruh! " + more);
  } else if (actualSleepHours < idealSleepHours) {
    var less = idealSleepHours - actualSleepHours;
    console.log("You should get some rest, you sleepy boo. " + less);
  }
};

calculateSleepDebt();
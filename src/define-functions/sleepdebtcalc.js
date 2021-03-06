const getSleep = (day) => {
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

const getActualSleepHours = () => {
  let sum =
    getSleep("monday") +
    getSleep("tuesday") +
    getSleep("wedensday") +
    getSleep("thursday") +
    getSleep("friday");
  return sum;
};

const getIdealSleepHours = () => {
  let idealHours = 7;
  return idealHours * 7;
};

console.log("Actual: " + getActualSleepHours());
console.log("Ideal: " + getIdealSleepHours());

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log("Wow, you actually got some sleep! monkaS");
  } else if (actualSleepHours > idealSleepHours) {
    let more = actualSleepHours - idealSleepHours;
    console.log(`You got more than you needed bruh! ${more}`);
  } else if (actualSleepHours < idealSleepHours) {
    let less = idealSleepHours - actualSleepHours;
    console.log(`You should get some rest, you sleepy boo. ${less}`);
  }
};

calculateSleepDebt();

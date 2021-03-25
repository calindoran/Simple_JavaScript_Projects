let input = "a whale of a deal!";
const vowels = ["a", "e", "i", "o", "u"];

let resultArray = [];
for (let i = 0; i < input.length; i++) {
  //console.log(input[i]);
  //console.log('i is '+i);
  for (let j = 0; j < vowels.length; j++) {
    //console.log(j);
    if (input[i] === vowels[j]) {
      resultArray.push(vowels[j]);
    }
  }
  if (input[i] === "e") {
    resultArray.push(input[i]);
  }
  if (input[i] === "u") {
    resultArray.push(input[i]);
  }
}

console.log(resultArray.join(" ").toUpperCase());

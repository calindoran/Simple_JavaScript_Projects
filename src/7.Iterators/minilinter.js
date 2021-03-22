let story =
  'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ["really", "very", "basically"];

let unnecessaryWords = ["extremely", "literally", "actually"];

// #2
const storyWords = story.split(" ");
//console.log(`The OG story contains ${storyWords.length} words.`);

// #3
const betterWords = storyWords.filter((word) => {
  return (word = !unnecessaryWords.includes(word));
});
//console.log(`The story filtered looks like this: ${betterWords.join(' ')}`);

// #4
let overUsedCount = 0;
overusedWords.forEach((overUse) => {
  betterWords.filter((storyWord) => {
    if (overUse == storyWord) {
      overUsedCount++;
    }
  });
  // if(overUsedCount != 1){
  //   console.log(`Word ${overUse.toUpperCase()} was used ${overUsedCount} times`);
  // }else{
  //   console.log(`Word ${overUse.toUpperCase()} was used ${overUsedCount} times`);
  // }
});

// #5
let sentenCount = 0;
betterWords.forEach((word) => {
  if (word[word.length - 1] === "." || word[word.length - 1] === "!") {
    sentenCount++;
  }
});
//console.log(`Number of sentences: ${sentenCount}.`);

// #6
const logInfo = (storyWords, sentenCount, overUsedCount) => {
  console.log(`Word count: ${storyWords.length}.`);
  console.log(`There are ${sentenCount} sentences in the story`);
  console.log(`Times a word is over-used: ${overUsedCount} times.`);
};
logInfo(storyWords, sentenCount, overUsedCount);

// #7
console.log(betterWords.join(" "));

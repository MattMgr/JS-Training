/*const comment = "This website is for losers LOL!";
const vowals = ["a", "e", "i", "o", "u"];
const removeVowals = (comment) => {
  let stringArray = comment.split("");
  console.log(stringArray);
  let stringFiltered = stringArray.filter((word) => {
    return !vowals.includes(word.toLowerCase());
  });
  console.log(stringFiltered.join(""));
};

removeVowals(comment);

const str = "subalawe";

const vowalsCounter = (string) => {
  let strArray = string.split("");
  let counter = 0;
  console.log(strArray);
  strArray.forEach((element) => {
    if (vowals.includes(element)) {
      counter++;
    }
  });
  return counter;
};

console.log(vowalsCounter(str)); */

const str1 = "middle";

const middleWord = (string) => {
  const i = Math.floor(string.length / 2);
  //let result = string[i];
  if (str.length % 2 === 0 && i > 0) {
    //result = string[i - 1] + result;
    return string[i - 1] + string[i];
  } else return string[i];
  //return result;
};

console.log(middleWord(str1));

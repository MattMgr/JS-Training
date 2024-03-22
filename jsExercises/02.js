const vowals = ["a", "e", "i", "o", "u"];
const str = "subalawe";

/*const vowalsCounter = (string) => {
  let counter = 0;
  string.split("").forEach((element) => {
    if (vowals.includes(element)) {
      counter++;
    }
  });
  return counter;
};*/

const vowalsCounter2 = (str) => {
  return str.split("").reduce((count, letter) => {
    if (vowals.includes(letter.toLowerCase())) {
      return ++count;
    }
    return count;
  }, 0);
};

console.log(vowalsCounter2(str));

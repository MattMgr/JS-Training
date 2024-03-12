const comment = "This website is for losers LOL!";
const removeVowals = (comment) => {
  const vowals = ["a", "e", "i", "o", "u"];
  let stringArray = comment.split("");
  console.log(stringArray);
  let stringFiltered = stringArray.filter((word) => {
    return !vowals.includes(word.toLowerCase());
  });
  console.log(stringFiltered.join(""));
};

removeVowals(comment);

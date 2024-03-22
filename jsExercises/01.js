const comment = "This website is for losers LOL!";
const vowals = ["a", "e", "i", "o", "u"];
const removeVowals = (comment) => {
  const stringFiltered = comment.split("").filter((word) => {
    return !vowals.includes(word.toLowerCase());
  });
  console.log(stringFiltered.join(""));
};

removeVowals(comment);

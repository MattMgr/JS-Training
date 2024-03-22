const str1 = "tapas";

const middleWord = (string) => {
  const i = Math.floor(string.length / 2);
  //let result = string[i];
  if (string.length % 2 === 0 && i > 0) {
    //result = string[i - 1] + result;
    return string[i - 1] + string[i];
  } else return string[i];
  //return result;
};

console.log(middleWord(str1));

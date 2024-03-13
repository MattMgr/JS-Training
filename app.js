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

console.log(vowalsCounter(str)); 






const str1 = "middle";

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






const toCamelCase = (string) => {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "_" || string[i] === "-") {
      i++;
      result += string[i].toUpperCase();
    } else {
      result += string[i];
    }
  }
  return result;
};

console.log(toCamelCase("ala-bebe-decs"));






const createPhoneNumber = (num) => {
  let phoneNumber = "";
  for (var i = 0; i < num.length; i++) {
    if (i === 0) {
      phoneNumber += "(" + `${num[i]}`;
    } else if (i === 3) {
      phoneNumber += ")" + " " + `${num[i]}`;
    } else if (i === 6) {
      phoneNumber += "-" + `${num[i]}`;
    } else {
      phoneNumber += `${num[i]}`;
    }
  }
  return phoneNumber;
};

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

const like = (names) => {
  if (names.length === 0) {
    return `no one likes this`;
  } else if (names.length === 1) {
    return `${names[0]} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
};

console.log(like(["Pietro", "Manuel", "Max", "Matteo"]));*/

const outlierFinder = (numbers) => {
  let odds = numbers.filter(function (num) {
    return num % 2;
  });

  console.log(odds);

  let evens = numbers.filter(function (num) {
    return !(num % 2);
  });

  console.log(evens);

  let result = odds.length < evens.length ? odds[0] : evens[0];

  return result;
};

console.log(outlierFinder([2, 4, 0, 100, 4, 11, 2602, 36]));
console.log(outlierFinder([160, 3, 1719, 19, 11, 13, -21]));

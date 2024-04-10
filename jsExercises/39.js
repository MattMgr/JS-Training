/*Write a JavaScript program to produce a new string that has the first 3 characters in lower case from a given string. 
If the string length is less than 3 convert all the characters to upper case.*/

/*function upToLow(str) {
  if (str.length <= 3) {
    return str.toUpperCase();
  }

  const first = str.substring(0, 3).toLowerCase();
  const second = str.substring(3, str.length);
  console.log(first, second);
  //return `${first}${second}`;
}

console.log(upToLow("IO SONO MATTEO"));*/

function upToLow(str) {
  let check = 0;
  let result = "";
  for (i = 0; i < str.length; i++) {
    if (str[i] == " " || check > 3) {
      result += str[i];
    } else if (check <= 3) {
      result += str[i].toLowerCase();
      check++;
    }
  }
  console.log(result);
}

upToLow("IO SONO MATTEO");

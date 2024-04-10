/*Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters.
The string length must be broader than or equal to 1.*/

function firstToLast(str) {
  if (str.length >= 1 || str[0] == str[str.length - 1]) {
    return str;
  }
  const char2 = str.charAt(str.length - 1);
  const char1 = str.charAt(0);
  const middlStr = str.substring(1, str.length - 1);
  return `${char2}${middlStr}${char1}`;
}

console.log(firstToLast("hello"));

/*Write a JavaScript program to create a string from a given string.
This is done by taking the last 3 characters and adding them at both the front and back. 
The string length must be 3 or more.*/

function last3(str) {
  const last3 = str.substring(str.length - 3);
  return `${last3}${str}${last3}`;
}

console.log(last3("hello"));

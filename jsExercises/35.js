/* Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string. 
If "Script" appears in the string, return the string without "Script" otherwise return the original one. */

function checkString(str) {
  if (str.toLowerCase().substring(10, 4) == "script") {
    return str.substring(0, 4) + str.substring(10, str.length);
  }
  return str;
}

console.log(checkString("JavaScriptsggsggsggs"));

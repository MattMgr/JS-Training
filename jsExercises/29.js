/* Write a JavaScript program to remove a character at the specified position
in a given string and return the modified string.*/

function deleteCharAt(str, index) {
  const char = str.charAt(index);
  console.log(str.replace(char, ""));
}

deleteCharAt("bomboclat", 0);

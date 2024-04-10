//Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise.

function startWithJava(str) {
  if (str.toLowerCase().startsWith("java")) {
    return true;
  }
  return false;
}

console.log(startWithJava("JavaExercise"));

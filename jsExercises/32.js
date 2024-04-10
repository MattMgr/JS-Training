// Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.

function multiple37(x) {
  if (Math.abs(x) % 3 == 0 || Math.abs(x) % 7 == 0) {
    return true;
  }
  return false;
}

console.log(multiple37(-70));

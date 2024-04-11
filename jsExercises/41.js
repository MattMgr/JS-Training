/* Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.*/

function eight(a, b) {
  if (a == 8 || b == 8) {
    return true;
  }
  if (a + b == 8 || Math.abs(a - b) == 8) {
    return true;
  }
  return false;
}

console.log(eight(52, 60));
console.log(eight(-4, -4));

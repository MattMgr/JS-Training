//Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.

function isFifty(x, y) {
  if (x == 50 || y == 50 || x + y == 50) {
    console.log(true);
  } else console.log(false);
}

isFifty(100, 50);

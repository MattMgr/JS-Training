// Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.

function isInRange(num) {
  if (num >= 20 && num <= 100) {
    console.log(num + " is between 20 and 100");
  } else if (num >= 100 && num <= 400) {
    console.log(num + " is between 100 and 400");
  }
}

isInRange(25);

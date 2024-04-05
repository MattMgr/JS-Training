/* Write a JavaScript program to get the difference between a given number and 13,
 if the number is broader than 13 return double the absolute difference.*/

function difference(num) {
  const difference = 13 - num;
  if (difference < 0) {
    console.log(Math.abs(difference) * 2);
  } else console.log(difference);
}

difference(10);

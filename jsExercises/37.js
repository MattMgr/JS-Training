/*Write a JavaScript program to find the largest of three given integers.*/

function max(num1, num2, num3) {
  let maxNum;
  if (num1 > num2) {
    maxNum = num1;
  } else maxNum = num2;

  if (num3 > maxNum) {
    maxNum = num3;
  }

  return maxNum;
}

console.log(max(25, 15, 20));

//Solution 2 : Math.max(num1,num2,num3)

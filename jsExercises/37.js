//Write a JavaScript program to find the closest value to 100 from two numerical values.

function closeTo100(num1, num2) {
  if (num1 != num2) {
    const diff1 = Math.abs(num1 - 100);

    const diff2 = Math.abs(num2 - 100);

    if (diff1 < diff2) {
      return num1;
    } else return num2;
  }
  return `${num1}=${num2}`;
}

console.log(closeTo100(-90, -80));

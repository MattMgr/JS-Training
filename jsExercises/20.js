//Write a JavaScript program to calculate multiplication and division of two numbers (input from the user).

let num1 = Math.ceil(Math.random() * 10);
let num2 = Math.ceil(Math.random() * 10);

function multDiv(input1, input2) {
  const mult = input1 * input2;
  const div = input1 / input2;

  console.log(`multiplication is ${mult} and result of division is ${div}`);
}

console.log(num1, num2);

numbers = [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1];

function oddTimes(numbers) {
  const sum = numbers.reduce((prev, current) => prev + current, 0);
}

console.log(oddTimes(numbers));

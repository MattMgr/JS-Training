const outlierFinder = (numbers) => {
  let odd = numbers.filter((num) => {
    return num % 2;
  });

  console.log(odd);

  let even = numbers.filter((num) => {
    return !(num % 2);
  });

  console.log(even);

  let result = odd.length < even.length ? odd[0] : even[0];

  return result;
};

console.log(outlierFinder([2, 4, 0, 100, 4, 11, 2602, 36]));
console.log(outlierFinder([160, 3, 1719, 19, 11, 13, -21]));

let result;
let check = 0;

for (let i = 0; i < 3; i++) {
  if (integers[i] % 2 != 0) {
    check++;
  } else {
    check;
  }
}

if (check < 2) {
  result = integers.filter((number) => number % 2 != 0);
} else {
  result = integers.filter((number) => number % 2 == 0);
}

return result[0];

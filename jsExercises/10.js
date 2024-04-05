function isTenMinutes(array) {
  let total = 0;
  if (array.length === 10) {
    for (const dir of array) {
      if (dir === "n") total += 1;
      if (dir === "s") total -= 1;
      if (dir === "e") total += 1;
      if (dir === "w") total -= 1;
    }
  } else return false;
  return total == 0;
}

console.log(isTenMinutes(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));
console.log(
  isTenMinutes(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"])
);
console.log(isTenMinutes(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]));
console.log(isTenMinutes(["n", "n", "n", "s", "n", "s", "e", "s", "w", "s"]));

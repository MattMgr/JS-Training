const str = "salamui";

function countElements(string) {
  let obj = {};
  string.split("").forEach((element) => {
    if (Object.keys(obj).includes(element)) {
      obj[element]++;
    } else {
      obj[element] = 1;
    }
  });
  return obj;
}

function countElements2(string) {
  return string.split("").reduce((prev, current) => {
    if (Object.keys(prev).includes(current)) {
      prev.current++;
    } else {
      prev.current = 1;
    }
  }, {});
}

function count2(string) {
  return string.split("").reduce((prev, current) => {
    if (prev[current]) {
      prev[current]++;
    } else {
      prev[current] = 1;
    }
    return prev;
  }, {});
}

console.log(countElements(str));
console.log(countElements2(str));
console.log(count2(str));

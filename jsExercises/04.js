const toCamelCase = (string) => {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "_" || string[i] === "-") {
      i++;
      result += string[i].toUpperCase();
    } else {
      result += string[i];
    }
  }
  return result;
};

console.log(toCamelCase("ala-bebe-decs"));

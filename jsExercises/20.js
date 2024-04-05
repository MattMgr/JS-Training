//Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.

function toFahr(c) {
  return (c * 9) / 5 + 32;
}

console.log(toFahr(40));

/*----------------------------------------------------------------------------------------------------*/

function checkFahrCel(temperatures) {
  if (temperatures.includes("°C")) {
    temp = temperatures.replace("°C", "");
    console.log((+temp * 9) / 5 + 32);
  } else if (temperatures.includes("°F")) {
    temp = temperatures.replace("°F", "");
    console.log(((+temp - 32) * 5) / 9);
  }
}

checkFahrCel("40 °C");

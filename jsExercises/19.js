//Write a JavaScript program to calculate the days left before Christmas.

function daysBeforeChristmas() {
  today = new Date();
  let xmas = new Date(today.getFullYear(), 11, 25);
  console.log(
    Math.ceil(xmas.getTime() - today.getTime()) / (1000 * 60 * 60 * 24) +
      " giorni a Natale"
  );
}

daysBeforeChristmas();

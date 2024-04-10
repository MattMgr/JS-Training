//Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050. */

function firstSunday() {
  for (let year = 2014; year <= 2050; year++) {
    const d = new Date(year, 0, 1);
    if (d.getDay() === 0) {
      console.log(`Il primo gennaio del ${year} Ã¨ una domenica`);
    }
  }
}

//Write a JavaScript program to calculate the days left before Christmas.

firstSunday();
function daysBeforeChristmas() {
  const today = new Date();
  const xmas = new Date(today.getFullYear(), 11, 25);
  console.log(
    Math.ceil((xmas.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)) +
      " giorni a Natale"
  );
}

daysBeforeChristmas();

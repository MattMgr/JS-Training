//Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

function checkLeapYear(year) {
  if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
    console.log(year + " è un anno bisestile");
  } else {
    console.log(year + " non è un anno bisestile");
  }
}

checkLeapYear(2800);

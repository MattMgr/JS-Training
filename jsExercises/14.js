/*  Write a JavaScript program to get the current date.  
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy  
*/

day = new Date(Date.now()).toLocaleString();
console.log(day);

function today() {
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1;
  let dd = today.getDate();

  const day1 = mm + "-" + dd + "-" + yyyy;
  const day2 = mm + "/" + dd + "/" + yyyy;
  const day3 = dd + "-" + mm + "-" + yyyy;
  const day4 = dd + "/" + mm + "/" + yyyy;

  console.log(day1, day2, day3, day4);
}

today();

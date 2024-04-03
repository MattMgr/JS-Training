//Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number.
//The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".

let inputNum = Math.floor(Math.random() * 10) + 1;

function compareNums(myNum) {
  let pcNum = Math.floor(Math.random() * 10) + 1;
  if (myNum == pcNum) {
    console.log("Good work");
  } else console.log("Not matched");
}

compareNums(inputNum);

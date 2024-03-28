/*Write a JavaScript program to rotate the string 'w3resource' in the right direction.
This is done by periodically removing one letter from the string end and attaching it to the front.*/

function reverse(word) {
  const newWord = word.split("").reverse().join("");
  console.log(newWord);
}

reverse("w3resource");

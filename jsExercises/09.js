const str = "The quick brown fox jumps over the lazy dog";
function pangramCheck(string) {
  const alphabet = "abcdefghijklmnopqrstuvwsyz";
  for (let i = 0; i < alphabet.length; i++) {
    if (string.toLowerCase().indexOf(alphabet[i]) === -1) {
      return false;
    }
  }
  return true;
}

console.log(pangramCheck(str));
/*
function isPangram(string) {
  const alphabet = "abcdefghijklmnopqrstuvwsyz";
  const result = alphabet.split("").every((letter) => string.includes(letter));
  return result;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"));*/

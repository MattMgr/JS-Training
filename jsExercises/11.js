function rgbConverter(r, g, b) {
  const rHex = parseInt(r).toString(16).padStart(2, "0");
  const gHex = parseInt(g).toString(16).padStart(2, "0");
  const bHex = parseInt(b).toString(16).padStart(2, "0");
  return "#" + rHex + gHex + bHex;
}

console.log(rgbConverter(123, 234, 20));

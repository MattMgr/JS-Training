//Write a JavaScript exercise to get the filename extension.
function findExtension(fileName) {
  if (fileName) {
    extension = fileName.split(".").pop();
  }
  return extension;
}

console.log(findExtension("00.js"));

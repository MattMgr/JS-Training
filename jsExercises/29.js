/*Write a JavaScript program to create another string by adding "Py" in front of a given string.
If the given string begins with "Py" return the original string.*/

function pyCheck(str) {
    if (str.toLowerCase().substring(0, 2) === 'py') {
      return str;
    }
    return "Py" + str;
  }

  console.log(pyCheck("pyskate"));
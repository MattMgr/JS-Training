const createPhoneNumber = (num) => {
  let phoneNumber = "";
  for (var i = 0; i < num.length; i++) {
    if (i === 0) {
      phoneNumber += "(" + `${num[i]}`;
    } else if (i === 3) {
      phoneNumber += ")" + " " + `${num[i]}`;
    } else if (i === 6) {
      phoneNumber += "-" + `${num[i]}`;
    } else {
      phoneNumber += `${num[i]}`;
    }
  }
  return phoneNumber;
};

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

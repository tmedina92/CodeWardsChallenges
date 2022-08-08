const NarcissisticNumber = (value) => {
  let strNumber = value.toString();
  let exponent = strNumber.length;

  let arrayValue = strNumber.split("");
  let poweredValue,
    sum = 0;
  for (let i = 0; i < exponent; i++) {
    poweredValue = Number(arrayValue[i]) ** exponent;
    sum += poweredValue;
  }
  if (sum === value) {
    return true;
  }
  return false;
};
console.log(NarcissisticNumber(153));

// let m = 1,
// count = 0;
// while (number / m > 1) {
// m *= 10;
// count++;
// }
// let sum = 0,
// temp = number;
// while (temp) {
// sum += Math.pow(temp % 10, count);
// temp = Math.floor(temp / 10);
// }
// return sum === number;

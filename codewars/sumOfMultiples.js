function sumOfMultiples(number) {
  // OLD
  // let sum = 0;
  // for (let i = 0; i < number; i++) {
  // if (number < 0) return 0;
  // if (i % 3 === 0 || i % 5 === 0) {
  //   sum += i;
  // }
  // }
  // return sum;
  // OLD
  if (number < 0) return 0;
  return Array.from(Array(number).keys()).reduce((acc, curr) => {
    if (curr % 3 === 0 || curr % 5 === 0) {
      acc += curr;
    }
    return curr;
  }, 0);
}

console.log(sumOfMultiples(10));

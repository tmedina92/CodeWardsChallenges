const a = [1, 2, 6, 2, 3, 3, 3, 4, 5];
const b = [3, 2];

function arrayDiff(array1, array2) {
  let filtrado = array1.filter((i) => !array2.includes(i));
  return console.log(filtrado.sort());
}
arrayDiff(a, b);

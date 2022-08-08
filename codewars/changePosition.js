function changePosition(array) {
  const firstItem = array[0];
  const lastItem = arr[arr.length - 1];

  arr.splice(firstItem, 1, lastItem);
  return array;
}
console.log(changePosition(arr));
Rogério;
var array = ["a", "b", "c", "d", "e"];

const changePositions = (array) => {
  const firstItem = array[0];
  const lastItem = array[array.length - 1];

  array[0] = lastItem;
  array[array.length - 1] = firstItem;

  return array;
};

console.log(changePositions(array));
Daniel;
let arr = ["a", "b", "c", "d"];

function trocaIndice(lista) {
  return [
    lista[lista.length - 1],
    ...lista.slice(1, lista.length - 1),
    lista[0],
  ];
}

trocaIndice(arr);

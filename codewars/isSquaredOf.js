a = [3, 5, 4, 6];
b = ["9", "16", "25", "b"];

const comp = (a, b) => {
  if (!Array.isArray(a) || !Array.isArray(b) || a.length !== b.length) {
    return false;
  }
  return (
    a.reduce((x, y) => x + y, 0) === b.reduce((x, y) => x + Math.sqrt(y), 0)
  );
};

console.log(comp(a, b));

// function comp(arr1, arr2) {
//   let arrAoQuadrado = arr1
//     .sort((a, b) => a - b)
//     .map((item) => item * item)
//     .toString();
//   let array2 = arr2.sort((a, b) => a - b).toString();

//   if (arrAoQuadrado === array2) return true;
//   else {
//     return false;
//   }
// }
// console.log(comp(a, b));
// function buscaAoQuadrado(arr1, arr2) {
//   let countEquals = 0;
//   let indexRemovidos = [];

//   let arrAoQuadrado = arr1.map((item) => item * item);

//   for (let i = 0; i < arrAoQuadrado.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (!indexRemovidos.includes(j)) {
//         if (arrAoQuadrado[i] === arr2[j]) {
//           countEquals += 1;
//           indexRemovidos.push(j);
//         }
//       }
//     }
//   }

//   if (countEquals === arrAoQuadrado.length) {
//     return true;
//   }

//   return false;
// }
// console.log(buscaAoQuadrado(a, b));

// const comp = (arr1, arr2) => {
//   if (
//     Array.isArray(arr1) &&
//     arr1.length &&
//     Array.isArray(arr2) &&
//     arr2.length
//   ) {
//     return (
//       arr1.sort((a, b) => a - b).toString() ===
//       arr2
// .sort((a, b) => a - b)
// .map((c) => Math.sqrt(c))
// .toString()
//     );
//   }
//   return false;
// };
// console.log(comp(a, b));

// function buscaAoQuadrado(arr1, arr2) {
//   if (arr1.length !== arr2.length) return false;
//   return arr1.every((x) => arr2.some((y) => y == x * x));
// }

// console.log(buscaAoQuadrado(a, b));

// let countEquals = 0;

//   let arrAoQuadrado = arr1.map((item) => item * item);

//   arrAoQuadrado.forEach((itemQuadrado) => {
//     arr2.forEach((item, index) => {
//       console.log("itemQuadrado ::", itemQuadrado);
//       console.log("item ::", item);
//       if (itemQuadrado === item) {
//         arr2.splice(arr2.indexOf(index));
//         countEquals += 1;
//       }
//     });
//   });
//   console.log(countEquals);
//   console.log(arrAoQuadrado.length);
//   console.log("Arr2 Tamanho ::", arr2);

//   if (countEquals === arrAoQuadrado.length) {
//     return console.log("Tudo aqui iqualzinho ::", arrAoQuadrado, arr2);
//   }

//   return console.log("Ta diferente ::", arrAoQuadrado, arr2);

function fatorial(n) {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * fatorial(n - 1);
  }
}
let n = 7;
resultado = fatorial(n);
console.log(resultado);

// function factorial(n){
//   //base case
//   if(n == 0 || n == 1){
//       return 1;
//   //recursive case
//   }else{
//       return n * factorial(n-1);
//   }
// }
// let n = 5;
// answer = factorial(n)
// console.log("The factorial of " + n + " is " + answer);

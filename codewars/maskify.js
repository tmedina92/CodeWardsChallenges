// var cardNumber       = '4761640026000000000000883566';

// function maskCard(cc) {
//   return Array(cc.replace(/[^\d]/g, "").length - 3).join("*") + cc.substr(cc.length - 4);
// }
// console.log(maskCard(cardNumber));

// var ensureOnlyNumbers  = R.replace(/[^0-9]+/g, '');
// var maskAllButLastFour = R.replace(/[0-9](?=([0-9]{4}))/g, '*');
// var hashedCardNumber   = R.compose(maskAllButLastFour, ensureOnlyNumbers);

// console.log(hashedCardNumber('1234567898765432')); // ************5432
// var cardNumber       = '476164002688300000000099999988887777566';
// console.log(maskCard(cardNumber));

// function maskCard(num) {
//   return `${'*'.repeat(num.length - 4)}${cardNumber.substr(num.length - 4)}`;
// }

// let keyWord = '45563646000000000000007935616';

// function maskify(cc) {
//   let tralha = '#'
//   let mask = tralha.repeat(cc.length - 4).toString()
//   let number = cc.substr(cc.length - 4)
//   return mask + number
// }

// var masked = Array(cc.replace(/[^\d]/g, "").length - 3).join("*") + cc.substr(cc.length - 4);

let cardNumber = "109220903293099999999999991902910102910";
function maskify(cc) {
  return cc.replace(/.(?=.{4})/g, "#");
}

console.log(maskify(cardNumber));

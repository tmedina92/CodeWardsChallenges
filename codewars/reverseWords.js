let str = "Hello world, i am here!! lets try again!!";
function getStr(str) {
  let word = str
    .split(" ")
    .map((item) =>
      item.length >= 5 ? item.split("").reverse().join("") : item
    )
    .join(" ");
  return word;
}
console.log(getStr(str));
const revertWordsMoreFiveLetters = (str) => {
  return str
    .split(" ")
    .map((word) =>
      word.length >= 5 ? word.split("").reverse().join("") : word
    )
    .join(" ");
};
console.log(
  revertWordsMoreFiveLetters("The quick brown fox jumps over the lazy dog.")
);

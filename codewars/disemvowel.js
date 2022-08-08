let string = "The quick brown fox jumps over the lazy dog.";

function disemvowel(str) {
  let listVogais = ["a", "e", "i", "o", "u"];
  return str
    .split("")
    .filter((letra) => !listVogais.includes(letra))
    .join("");
  OLD;
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (
      char == "a" ||
      char == "e" ||
      char == "i" ||
      char == "o" ||
      char == "u"
    ) {
      strArr[i] = "";
    }
  }
  OLD;
}
console.log(disemvowel(string));

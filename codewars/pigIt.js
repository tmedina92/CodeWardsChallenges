function pigIt(str) {
  let word = str
    .split(" ")
    .map((item) => {
      return item.match(/[A-z]/i)
        ? item.replace(item[0], "").concat(item.charAt(0) + "ay")
        : item;
    })
    .join(" ");
  return console.log(word);
}
pigIt("Hello world !");

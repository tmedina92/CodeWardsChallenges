function generateHashtag(str) {
  if (str === "") return false;
  let hashtag = "# " + str;
  let result = hashtag
    .split(" ")
    .map((word) => {
      return word.match(/[A-z]/i)
        ? word.charAt(0).toUpperCase() + word.slice(1)
        : word;
    })
    .join("")
    .trim();
  if (result === "#" || result.length > 140) return false;
  return result;
}

console.log(generateHashtag("   "));

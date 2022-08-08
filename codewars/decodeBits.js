let codeBitString = "110011111100";
function decodeBits(bits) {
  let bitCodeRef = {
    111111: "-",
    11: ".",
  };
  return bits
    .split("000000")
    .map((word) =>
      word
        .split("00")
        .map((letter) => bitCodeRef[letter])
        .join("")
        .toUpperCase()
    )
    .join("  ")
    .trim();
}

console.log(decodeBits(codeBitString));

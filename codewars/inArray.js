let a1 = ["arp", "strong", "medina", "live"];
let a2 = ["lively", "alive", "harp", "sharp", "armstrong"];

function inArray(array1, array2) {
  let matches = array1.filter((word) => {
    return Boolean(array2.filter((word2) => word2.includes(word)).length);
  });
  return matches.sort();
}
inArray(a1, a2);

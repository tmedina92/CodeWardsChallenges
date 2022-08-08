let dnaString = "ATTGC";

function DNAStrand(dna) {
  mapaDNA = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };
  const dnaChange = dna.split("").map((letra) => mapaDNA[letra] || letra);

  return "dnaChange ::", dnaChange.join("");
}

DNAStrand(dnaString);

"ATTGC" -- > "TAACG"
"GTAT" -- > "CATA"

// let dnaString = "ATTGC";

// function DNAStrand(dna) {
//   mapaDNA = {
//     A: "T",
//     T: "A",
//     C: "G",
//     G: "C",
//   };
//   const dnaChange = dna.split("").map((i) => {
//     if (i === "A") {
//       return "T";
//     }
//     if (i === "T") {
//       return "A";
//     }
//     if (i === "C") {
//       return "G";
//     }
//     if (i === "G") {
//       return "C";
//     }
//   });

//   console.log("dnaChange ::", dnaChange.join(""));
// }
const arr = [0, 0, 1, 1];
const binaryArrayToNumber = (arr) => {
  return arr.reduce((acc, val) => {
    return (acc << 1) | val;
  });
};

binaryArrayToNumber(arr);

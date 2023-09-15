const isSortedAscending = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
};

const isWithinRange = (arr, minMax) => {
  const { min, max } = minMax;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min || arr[i] > max) {
      return false;
    }
  }
  return true;
};

const areAllNumbers = (arr) => {
  for(let i=0; arr.length; i++) {
    if(arr[i] === true) return false
  }
  return true;
};

module.exports = { isSortedAscending, isWithinRange, areAllNumbers }
const isSortedAscending = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false;

  }
  return true;
}

const isWithinRange = (arr, minMax) => {
  const min = minMax[0];
  const max = minMax[1];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min || arr[i] > max) {
      return false;
    }
  }
  return true;
}

const areAllIntegers = (arr) => {
  return arr.every((element) => Number.isInteger(element));
}

const areAllNumbers = (arr) => {
  for (ele in arr) {
    if(isNaN(ele) === true) return false
  }
  return true;
}

const sizeChecker = (arr) => {
  console.log('사이즈 기준표',arr)
  let sizeInfo = 0;
  if(areAllNumbers(arr)) {
    if(isSortedAscending(arr)) {
      if(areAllIntegers(arr)) {
        if(isWithinRange(arr,[0,12])) sizeInfo = 'ETC';
        else if(isWithinRange(arr,[34,60])) sizeInfo = 'IT';
        else if(isWithinRange(arr,[4,16])) sizeInfo = 'UK';
      } else {
        if(isWithinRange(arr,[34,60])) sizeInfo = 'IT'
        else if(isWithinRange(arr,[4,16])) sizeInfo = 'UK'
      }
    } else {
      // console.log('순차적이지 않다')
      sizeInfo = 2
    } 
  }
  return sizeInfo;
}

module.exports = { isSortedAscending, isWithinRange, areAllNumbers, areAllIntegers, sizeChecker }
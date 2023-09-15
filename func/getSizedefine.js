module.exports = (size) => {
  const { isSortedAscending, isWithinRange, areAllNumbers } = require('./function');
  // 바잉 팀에서 넘겨준 사이즈 정보를 토대로 유추
  let sizeInfo = 0
  if(size !== undefined) {
    // 구분하자 
    // 제너럴사이즈 0 국가사이즈 1  치수 2
    let country = ['IT', 'EU', 'UK', 'US']
    let general = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL']
    let sequence = ['~', '-']
    let measure = ['CM', '*', 'X']
    let countryUnit = ''

    const pattern = /[\uAC00-\uD7A3]/g;
    const generalSizeRegex = /\bXXS\b|\bXS\b|\bS\b|\bM\b|\bL\b|\bXL\b|\bXXL\b/g;
    const sizeOrg = size.toUpperCase().replaceAll(/\([^)]*\)/g,'').trim();
      
    if (country.some(countryCode => sizeOrg.includes(countryCode))) sizeInfo = country.find((ini) => sizeOrg.includes(ini));
    else if(sizeOrg.match(generalSizeRegex)) sizeInfo = 1;
    else if(sizeOrg.match(generalSizeRegex)) sizeInfo = 1;
    else if(measure.some(ms => sizeOrg.includes(ms))) sizeInfo = 2;
    else if(sequence.some(sq => sizeOrg.includes(sq))) {
      const delimiter = /[~-]/; // Match either '~' or '-'
      const _size = sizeOrg.split(delimiter).join(' ');
      const numberRegex = /[0-9]+(?:\.[0-9]+)?/g;
      const _sizeArray = _size.match(numberRegex).map(Number);
      // 배열이 순차적인 경우
      if(isSortedAscending(_sizeArray)) {
        if(isWithinRange(_sizeArray,[34,60])) sizeInfo = 'IT'
        else if(isWithinRange(_sizeArray,[0,12])) sizeInfo = 'ETC'
        else if(isWithinRange(_sizeArray,[4,16])) sizeInfo = 'UK'
      } else { // 순차적이지 않은 경우
        sizeInfo = 2; // 치수로 정의
      }
    };

    const sizeOptArr = sizeOrg.replaceAll(pattern,'').split(/[\/+,&\s]/);
    const sizeOpt = sizeOptArr.map((s) => s.replaceAll(/[ ]/g, '')).filter((s) => s !== '');
    // console.log(size)

    if(areAllNumbers(sizeOpt)) {
      console.log('숫자변환')
      const sizeNumArray = sizeOpt.map((s) => Number(s))
      if(isSortedAscending(sizeNumArray)) {
        if(isWithinRange(sizeNumArray,[34,60])) sizeInfo = 'IT'
        else if(isWithinRange(sizeNumArray,[0,12])) sizeInfo = 'ETC'
        else if(isWithinRange(sizeNumArray,[4,16])) sizeInfo = 'UK'
      } 
    }
    console.log('\n')
    console.log('사이즈 옵션  :  ',sizeOpt)
    // console.log('사이즈 정의: ',sizeInfo)
  }
  return sizeInfo;
}
module.exports = (size) => {
  const { sizeChecker } = require('./function');
  // 바잉 팀에서 넘겨준 사이즈 정보를 토대로 유추
  if(size !== undefined) {
    let sizeInfo = 0
    // 구분하자 
    // 제너럴사이즈 0 국가사이즈 1  치수 2
    let country = ['IT', 'EU', 'UK', 'US']
    let sequence = ['~', '-']
    let measure = ['CM', '*', 'X']

    const pattern = /[\/+,&\s]+(?![\d.])/g;
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
      sizeInfo = sizeChecker(_sizeArray)
    };
    if(sizeInfo === 0)  { // 알수없음 0 으로 분류된 것 따로 정리
      const sizeOptArr = sizeOrg.replaceAll(pattern,'').split(/[\/+,&\s]/);
      const sizeOpt = sizeOptArr.map((s) => s.replaceAll(/[ ]/g, '')).filter((s) => s !== '');
      const sizeNumArray = sizeOpt.map((s) => s.replaceAll('​', '').trim()).filter((s) => !isNaN(s)).map((s) => Number(s))
      sizeInfo = sizeChecker(sizeNumArray)
    }
    // console.log('사이즈 :', sizeOrg)
    // console.log('사이즈 정보 :',sizeInfo)
    return sizeInfo;
  }
  return 0;
}
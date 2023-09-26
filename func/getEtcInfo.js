module.exports = (etc, buyerInitial) => {
  const getSpec = require('../asset/template/buyerspec')
  if(etc === undefined) return '';
  else {
    let ref = ''
    let result = getSpec(buyerInitial);
    if(etc.includes('굽높이') || etc.includes('굽')) ref = '굽높이:' + etc;
    else if(etc.includes('모델') ||  etc.includes('ㅇ') || etc.includes('착용')) {
      if(result !== 0) ref = '모델:' + etc + result;
    }
    const buyerSizeTemplate = '** 모델사이즈: 키 Acm, 국내 B / 착용사이즈: C **';
    if(ref.includes('모델:')) {
      return buyerSizeTemplate
        .replace('A', result[0])
        .replace('B', result[1])
        .replace('C', etc);
    } else return ref;
  }
  
}
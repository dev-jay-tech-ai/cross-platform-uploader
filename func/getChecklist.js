module.exports = (productInfo, cate, brand) => {
  const { category_bag, category_wallet, category_belt } = require('../asset/category_divide');
  let package = '본품';  
  let boxInc = '브랜드 박스 포함□ 미포함■'
  let dustInc = '더스트백 포함□ 미포함■'

  if(productInfo === '2315292') { // 신발
    package = '본품+더스트백+하드케이스'; 
    boxInc = '브랜드 박스 포함■ 미포함□';
    dustInc = '더스트백 포함■ 미포함□';
  } else if(category_bag.includes(cate)) { // 가방
    if(!brand.includes('롱샴') && !brand.includes('토리버치')) {
      package = '본품+더스트백';
      boxInc = '브랜드 박스 포함□ 미포함■';
      dustInc = '더스트백 포함■ 미포함□';
    } else if(brand.includes('미우미우')) {
      package = '본품+하드케이스';
      boxInc = '브랜드 박스 포함■ 미포함□';
      dustInc = '더스트백 포함□ 미포함■';
    }
  } else if(category_wallet.includes(cate)) { // 자갑
    package = '본품+하드케이스';
    boxInc = '브랜드 박스 포함■ 미포함□';
    dustInc = '더스트백 포함□ 미포함■';
  } else if(category_belt.includes(cate)) { // 벨트
    package = '본품+더스트백';
    boxInc = '브랜드 박스 포함□ 미포함■';
    dustInc = '더스트백 포함■ 미포함□';
  }

  return { package, boxInc, dustInc }
}
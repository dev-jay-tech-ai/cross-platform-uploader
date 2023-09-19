module.exports = (title, size, brand, category) => {
  const { 
    category_m_cloth,
    category_m_shoes,
    category_w_cloth,
    category_w_shoes,
    category_bag,
    category_belt,
    category_wallet
  } = require('../asset/category_divide')
  const getSizedefine = require('./getSizedefine');
  const getSizetemplate = require('./getSizetemplate');
  
  // 정보없음 0 제너럴사이즈 1 치수 2 국가사이즈 3
  // 카테고리를 통해서 추출
  let div = ''
  if(category_m_cloth.includes(category)) div = '남성의류'
  else if(category_m_shoes.includes(category)) div = '남성슈즈'
  else if(category_w_cloth.includes(category)) div = '여성의류'
  else if(category_w_shoes.includes(category)) div = '여성슈즈'
  else if(category_bag.includes(category)) div = '가방'
  else if(category_belt.includes(category)) div = '벨트'
  else if(category_wallet.includes(category)) div = '지갑'
  else div = '기타'
  
  let gender = div.includes('남성') ? 'm' : 'w';
  const sizeDefine = getSizedefine(size)
  const sizeTemplate = getSizetemplate(gender, sizeDefine, brand, div);
  
  console.log('----------------')
  console.log('브랜드: ', brand)
  console.log('제품명: ', title)
  console.log('카테고리: ', category)
  console.log('분류 :',div) 
  console.log('사이즈정의 :',sizeDefine)
  console.log('사이즈타입 :', sizeTemplate)
  console.log('----------------')
  console.log('\n')

  return sizeTemplate;
}
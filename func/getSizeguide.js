module.exports = (title, size, brand, category) => {
  const { 
    category_m_cloth,
    category_m_shoes,
    category_w_cloth,
    category_w_shoes,
    category_belt 
  } = require('../asset/category_divide')
  const getSizedefine = require('./getSizedefine');
  
  // 정보없음 0 제너럴사이즈 1 치수 2 국가사이즈 3
  const sizeDefine = getSizedefine(size)
  if(sizeDefine === 0) console.log('정보없음')
  else if(sizeDefine === 1) console.log('제너럴사이즈')
  else if(sizeDefine === 2) console.log('치수')
  else console.log(sizeDefine)
  // 카테고리를 통해서 추출
  let div = ''
  if(category_m_cloth.includes(category)) div = '남성의류'
  else if (category_m_shoes.includes(category)) div = '남성슈즈'
  else if (category_w_cloth.includes(category)) div = '여성의류'
  else if (category_w_shoes.includes(category)) div = '여성슈즈'
  else if (category_belt.includes(category)) div = '벨트'
  else div = '기타'
  console.log(sizeDefine)
  console.log('제품명: ', title)
  console.log('분류 :',div) 
  console.log('\n')

    // if(category_m_cloth.includes(category) || 
    //   category_m_shoes.includes(category) ||
    //   title.includes('남성')) {
    //   // 의류
    //   if(size.includes('M') || size.includes('L')) { // 제너럴 사이즈
    //     template = `
    //     XS(국내 90)
    //     S(국내 95)
    //     M (국내 100)
    //     L (국내 105)
    //     XL (국내 110)
    //     XXL (국내 115)
    //     XXXL (국내 120)`;
    //   } else if (34 <= Number(size) && Number(size) < 50) {
    //     // FR EU IT
    //     template = `
    //     IT34(국내 44)
    //     IT36(국내 44반)
    //     IT38 (국내 55)
    //     IT40 (국내 55반)
    //     IT42 (국내 66)
    //     IT44 (국내 66반)
    //     IT46 (국내 77)`;
    //   }

    // } else {
    //   if(size.includes('M') || size.includes('L')) { // 제너럴 사이즈
    //     template = `
    //     XS(국내 44)
    //     S(국내 55)
    //     M(국내 66)
    //     L(국내 77)
    //     XL (국내 88)`;
    //   } else if (34 <= Number(size) && Number(size) < 50) {
    //     template = `
    //     IT34(국내 44)
    //     IT36(국내 44반)
    //     IT38 (국내 55)
    //     IT40 (국내 55반)
    //     IT42 (국내 66)
    //     IT44 (국내 66반)
    //     IT46 (국내 77)

    //     샤넬
    //     FR34 (44반)
    //     FR38 (국내55반)
    //     FR40 (국내66)
    //     FR42 (국내66반)

    //     FR34(국내 55)
    //     FR36(국내 55반)
    //     FR38(국내 66)
    //     FR40(국내 66반)
    //     FR42(국내 77)`;
    //   } else if (4 <= Number(size) && Number(size) < 20) {
    //     // UK
    //     template = `
    //     UK4 (국내44반)
    //     UK6 (국내55)
    //     UK8 (국내55반)
    //     UK10 (국내66)
    //     UK12 (국내 66반)
    //     UK14 (국내77)
    //     UK16 (국내77반)`;
    //   } else if (brand === '페라가모') {
    //     // UK
    //     template = `
    //     US0(국내 44반)
    //     US2(국내 55)
    //     US4(국내 55반)
    //     US6(국내 66)
    //     US8(국내 66반)
    //     US10(국내 77)
    //     US12(국내 77반)`;
    //   } else if (brand === '몽클레어' || brand === '산드로') {
    //     template = `
    //     00 (국내 44반-마른55)
    //     0(국내 55)
    //     2(국내 55반)
    //     4(국내 66)
    //     6(국내 66반)
    //     8(국내 77)
    //     10(국내 77반)
    //     12(국내 88)`;
    //   }

    // }
  
}
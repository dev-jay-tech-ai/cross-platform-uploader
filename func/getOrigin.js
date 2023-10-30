module.exports = (brand, category, category_bag) => {
  let origin = '이탈리아 및 그 외 국가 oem 생산';
  const itOrigin = ['펜디','토즈','로저비비에','발렌티노','페라가모','알렉산더맥퀸'];
  const maxmaraLine = ['위켄드','위크엔드막스마라','막스앤코'];
  if(itOrigin.includes(brand)) origin = '이탈리아';
  else if(maxmaraLine.includes(brand)) origin = '영국은 원산지 정보 표기가 필수가 아니라 해당정보 상품 택을 통해 확인불가';
  else if(brand.includes('페라가모') && category_bag.includes(category)) origin = '이탈리아';
  return origin;
}
module.exports = (productInfo, cate) => {
  const bagCate = [50000651,50000650,50000646,50000648,50000649,50000647,50000652,50003977,50000644,50000639,50015340,50000641,50000642,50000640,50000643,50000645];
  const walletCate = [50003985,50003987,50000664,50000661,50003982,50003984,50000663,50000662];  
  let package = '본품';  
  let boxInc = '브랜드 박스 포함□ 미포함■'
  let dustInc = '더스트백 포함□ 미포함■'
  if(productInfo === '2315292') { // 신발
    package = '본품+더스트백+하드케이스'; 
    dustInc = '더스트백 포함■ 미포함□'
    boxInc = '브랜드 박스 포함■ 미포함□'
  }  
  if(bagCate.includes(cate)) { // 가방
    package = '본품+더스트백';
    dustInc = '더스트백 포함■ 미포함□'
  }  
  if(walletCate.includes(cate)) { // 자갑
    package = '본품+하드케이스';
    boxInc = '브랜드 박스 포함■ 미포함□'
  } 
  return { package, boxInc, dustInc }
}
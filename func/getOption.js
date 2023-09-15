module.exports = (category, color) => {
  let option = 0;
  const jewel_glass_belt = [
    50000554, // 안경
    50003988, // 벨트
    50000539, // 주얼리
    50004164,
    50004174,
    50004155,
    50004194,
    50004140, // 시계
    50006188,
    50004141,
    50000570, // 키홀더
    50002337, // 휴대폰 기타
    50001588,
    50004590,
    50004594
  ];
  // 카테고리가 주얼리 선글라스 벨트 키홀더 안경
  if(jewel_glass_belt.includes(category)) {
    if(color !== undefined) {
      const coloOptArr = color.split(/[\/+,&]/);
      const colorOpt = coloOptArr.map((col) => col.replaceAll(/[() ]/g, '')).join(',');
      console.log('옵션 카테고리: ',colorOpt)
      console.log('\n')
      option = colorOpt;
    }
  }
  return option;
}
module.exports = (num) => {
  // console.log('카테고리 번호:', num)
  const categoryNum = {
  '가구/인테리어 인테리어소품 시계 알람/탁상시계': 50003344,
  '가구/인테리어 인테리어소품 장식인형 ': 50001069,
  '디지털/가전 음향가전 이어폰/헤드폰액세서리 케이스/파우치': 50002337,
  '디지털/가전 주변기기 태블릿/액세서리 태블릿액세서리': 50002936,
  '디지털/가전 태블릿PC액세서리 케이스/파우치 ': 50001588,
  '디지털/가전 휴대폰액세서리 휴대폰케이스 가죽케이스': 50004590,
  '디지털/가전 휴대폰액세서리 휴대폰케이스 기타케이스': 50004594,
  '생활/건강 문구/사무용품 노트/수첩 노트패드': 50003557,
  '생활/건강 욕실용품 수건/타월 바스/비치타월': 50008608,
  '스포츠/레저 수영 남성수영복 남성사각': 50003049,
  '스포츠/레저 수영 여성수영복 비키니': 50003056,
  '스포츠/레저 수영 여성수영복 원피스수영복': 50003055,
  '패션의류 남성의류 니트/스웨터 ': 50000831,
  '패션의류 남성의류 레인코트 ': 50000844,
  '패션의류 남성의류 바지 ': 50000836,
  '패션의류 남성의류 셔츠/남방 ': 50000833,
  '패션의류 남성의류 재킷 ': 50000838,
  '패션의류 남성의류 점퍼 ': 50000837,
  '패션의류 남성의류 조끼 ': 50000834,
  '패션의류 남성의류 청바지 ': 50000835,
  '패션의류 남성의류 카디건 ': 50000832,
  '패션의류 남성의류 코트 ': 50000839,
  '패션의류 남성의류 트레이닝복 ': 50000841,
  '패션의류 남성의류 티셔츠 ': 50000830,
  '패션의류 여성언더웨어/잠옷 잠옷/홈웨어 ': 50000826,
  '패션의류 여성의류 니트/스웨터 ': 50000805,
  '패션의류 여성의류 레깅스 ': 50000812,
  '패션의류 여성의류 레인코트 ': 50000822,
  '패션의류 여성의류 바지 ': 50000810,
  '패션의류 여성의류 블라우스/셔츠 ': 50000804,
  '패션의류 여성의류 스커트 ': 50000808,
  '패션의류 여성의류 원피스 ': 50000807,
  '패션의류 여성의류 재킷 ': 50000815,
  '패션의류 여성의류 점퍼 ': 50000814,
  '패션의류 여성의류 점프슈트 ': 50000811,
  '패션의류 여성의류 조끼 ': 50000817,
  '패션의류 여성의류 청바지 ': 50000809,
  '패션의류 여성의류 카디건 ': 50000806,
  '패션의류 여성의류 코트 ': 50000813,
  '패션의류 여성의류 트레이닝복 ': 50000818,
  '패션의류 여성의류 티셔츠 ': 50000803,
  '패션잡화 남성가방 백팩 ': 50000651,
  '패션잡화 남성가방 브리프케이스 ': 50000650,
  '패션잡화 남성가방 숄더백 ': 50000646,
  '패션잡화 남성가방 크로스백 ': 50000648,
  '패션잡화 남성가방 클러치백 ': 50000649,
  '패션잡화 남성가방 토트백 ': 50000647,
  '패션잡화 남성가방 힙색 ': 50000652,
  '패션잡화 남성신발 구두 ': 50000787,
  '패션잡화 남성신발 모카신/털신 ': 50000784,
  '패션잡화 남성신발 보트슈즈 ': 50000785,
  '패션잡화 남성신발 부츠 ': 50000792,
  '패션잡화 남성신발 샌들 ': 50000789,
  '패션잡화 남성신발 스니커즈 ': 50000788,
  '패션잡화 남성신발 슬리퍼 ': 50000790,
  '패션잡화 남성신발 슬립온 ': 50000783,
  '패션잡화 남성신발 실내화 ': 50000666,
  '패션잡화 남성신발 운동화 하이탑': 50003856,
  '패션잡화 남성신발 워커 ': 50000791,
  '패션잡화 모자 귀달이모자 ': 50000548,
  '패션잡화 모자 방울털모자 ': 50000549,
  '패션잡화 모자 베레모 ': 50006868,
  '패션잡화 모자 비니 ': 50000543,
  '패션잡화 모자 사파리모자 ': 50000546,
  '패션잡화 모자 선캡 ': 50000542,
  '패션잡화 모자 야구모자 일반캡': 50003990,
  '패션잡화 모자 페도라 ': 50000544,
  '패션잡화 모자 헌팅캡 ': 50000547,
  '패션잡화 벨트 남성벨트 정장벨트': 50003988,
  '패션잡화 벨트 남성벨트 캐주얼벨트': 50003989,
  '패션잡화 벨트 여성벨트 ': 50000539,
  '패션잡화 선글라스/안경테 선글라스 ': 50000554,
  '패션잡화 선글라스/안경테 안경케이스 ': 50000557,
  '패션잡화 선글라스/안경테 안경테 ': 50000556,
  '패션잡화 시계 시계소품 시계보관함': 50004147,
  '패션잡화 시계 패션시계 가죽밴드시계': 50004140,
  '패션잡화 시계 패션시계 기타밴드시계': 50006188,
  '패션잡화 시계 패션시계 메탈밴드시계': 50004141,
  '패션잡화 시계 패션시계 뱅글/팔찌형시계': 50004143,
  '패션잡화 양말 여성양말 니삭스': 50003997,
  '패션잡화 양말 여성양말 중목/장목양말': 50003996,
  '패션잡화 여성가방 가방소품 가방끈': 50003977,
  '패션잡화 여성가방 백팩 ': 50000644,
  '패션잡화 여성가방 숄더백 ': 50000639,
  '패션잡화 여성가방 에코백 ': 50015340,
  '패션잡화 여성가방 크로스백 ': 50000641,
  '패션잡화 여성가방 클러치백 ': 50000642,
  '패션잡화 여성가방 토트백 ': 50000640,
  '패션잡화 여성가방 파우치 ': 50000643,
  '패션잡화 여성가방 힙색 ': 50000645,
  '패션잡화 여성신발 단화 로퍼': 50003818,
  '패션잡화 여성신발 단화 모카신/털신': 50003820,
  '패션잡화 여성신발 단화 스니커즈': 50003822,
  '패션잡화 여성신발 단화 슬립온': 50003821,
  '패션잡화 여성신발 단화 플랫': 50003817,
  '패션잡화 여성신발 부츠 롱부츠': 50003834,
  '패션잡화 여성신발 부츠 미들부츠': 50004190,
  '패션잡화 여성신발 부츠 앵클/숏부츠': 50004191,
  '패션잡화 여성신발 부티 ': 50000779,
  '패션잡화 여성신발 샌들 뮬/블로퍼': 50003847,
  '패션잡화 여성신발 샌들 스트랩샌들': 50003842,
  '패션잡화 여성신발 샌들 슬링백샌들': 50003841,
  '패션잡화 여성신발 샌들 웨지힐샌들': 50003843,
  '패션잡화 여성신발 샌들 젤리샌들': 50003845,
  '패션잡화 여성신발 슬리퍼 ': 50000780,
  '패션잡화 여성신발 운동화 러닝화': 50003835,
  '패션잡화 여성신발 운동화 워킹화': 50003839,
  '패션잡화 여성신발 운동화 캔버스화': 50003840,
  '패션잡화 여성신발 운동화 하이탑': 50003837,
  '패션잡화 여성신발 워커 워커힐': 50003833,
  '패션잡화 여성신발 워커 플랫워커': 50003832,
  '패션잡화 여성신발 힐/펌프스 가보시힐': 50003824,
  '패션잡화 여성신발 힐/펌프스 스트랩힐': 50003825,
  '패션잡화 여성신발 힐/펌프스 슬링백힐': 50003826,
  '패션잡화 여성신발 힐/펌프스 토오픈힐': 50003828,
  '패션잡화 여성신발 힐/펌프스 통굽힐': 50003829,
  '패션잡화 여성신발 힐/펌프스 펌프스': 50003830,
  '패션잡화 여성신발 힐/펌프스 하이힐': 50003823,
  '패션잡화 여행용가방/소품 기내용 캐리어 ': 50007808,
  '패션잡화 여행용가방/소품 네임태그 ': 50000659,
  '패션잡화 여행용가방/소품 보스턴가방 ': 50000653,
  '패션잡화 여행용가방/소품 슈트케이스 ': 50000656,
  '패션잡화 여행용가방/소품 여권지갑/케이스 ': 50000657,
  '패션잡화 장갑 암워머/토시 ': 50000553,
  '패션잡화 장갑 여성장갑 ': 50000551,
  '패션잡화 주얼리 귀걸이 은귀걸이': 50004161,
  '패션잡화 주얼리 귀걸이 패션귀걸이': 50004164,
  '패션잡화 주얼리 목걸이 패션목걸이': 50004174,
  '패션잡화 주얼리 반지 패션반지': 50004155,
  '패션잡화 주얼리 발찌 패션발찌': 50006175,
  '패션잡화 주얼리 주얼리세트 패션주얼리세트': 50004186,
  '패션잡화 주얼리 주얼리소품 보관함/케이스': 50004187,
  '패션잡화 주얼리 팔찌 패션팔찌': 50004194,
  '패션잡화 주얼리 펜던트 패션펜던트': 50004179,
  '패션잡화 지갑 남성지갑 반지갑': 50003985,
  '패션잡화 지갑 남성지갑 장지갑': 50003987,
  '패션잡화 지갑 남성지갑 중지갑': 50003986,
  '패션잡화 지갑 동전지갑 ': 50000664,
  '패션잡화 지갑 머니클립 ': 50000661,
  '패션잡화 지갑 여성지갑 반지갑': 50003982,
  '패션잡화 지갑 여성지갑 장지갑': 50003984,
  '패션잡화 지갑 여성지갑 중지갑': 50003983,
  '패션잡화 지갑 열쇠지갑 ': 50000663,
  '패션잡화 지갑 카드/명함지갑 ': 50000662,
  '패션잡화 패션소품 기타패션소품 ': 50000434,
  '패션잡화 패션소품 넥워머 ': 50000566,
  '패션잡화 패션소품 넥케이프 ': 50000568,
  '패션잡화 패션소품 넥타이 기본넥타이': 50004014,
  '패션잡화 패션소품 넥타이 나비넥타이': 50004015,
  '패션잡화 패션소품 머플러 ': 50000565,
  '패션잡화 패션소품 브로치 패션브로치': 50004028,
  '패션잡화 패션소품 손수건 여성용': 50004013,
  '패션잡화 패션소품 숄 ': 50000567,
  '패션잡화 패션소품 스카프 롱': 50004010,
  '패션잡화 패션소품 스카프 쁘띠/미니': 50004011,
  '패션잡화 패션소품 커프스 ': 50000564,
  '패션잡화 패션소품 키홀더 ': 50000570,
  '패션잡화 헤어액세서리 헤어끈 ': 50000562,
  '패션잡화 헤어액세서리 헤어밴드 ': 50000560,
  '패션잡화 헤어액세서리 헤어액세서리소품 ': 50000563,
  '패션잡화 헤어액세서리 헤어핀 ': 50000561,
  };

  // Check each keyword and return the corresponding category if found
  for (const category in categoryNum) {
    if (num === categoryNum[category]) {
      return category;
    }
  }

  // If no matching keyword is found, return a default category
  return 0; // You can change this to your default category code
};
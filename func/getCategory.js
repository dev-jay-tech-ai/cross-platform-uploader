module.exports = (name) => {
  let cate = '';
  if(name.includes('남성')) {
    if(name.includes('토트') || name.includes('숄더백') || name.includes('더플백')) cate = 50000647
    if(name.includes('크로스백') || name.includes('크로스바디백') ||name.includes('메신저')) cate = 50000648
    if(name.includes('클러치') || name.includes('파우치')) cate = 50000649
    if(name.includes('브리프') || name.includes('서류')) cate = 50000650
    if(name.includes('백팩') || name.includes('배낭')) cate = 50000651
    if(name.includes('범백') || name.includes('벨트백') || name.includes('힙색')) cate = 50000652

    // 남성신발
    if(name.includes('슬립온')) cate = 50000783
    if(name.includes('MOCASSIN')) cate = 50000784

    if(name.includes('슈즈') && name.includes('보트')) cate = 50000785
    if(name.includes('스니커즈')) cate = 50000788
    if(name.includes('운동화')) cate = 50000788
    if(name.includes('스피드러너')) cate = 50000788
    if(name.includes('비브런')) cate = 50000788
    if(name.includes('샌들') || name.includes('플립플랍') || 
      name.includes('쪼리') || name.includes('조리')) cate = 50000789
    if(name.includes('슬리퍼')) cate = 50000790
    if(name.includes('워커')) cate = 50000791
    if(name.includes('부츠')) cate = 50000792
    // 남성 구두 50000787
    if(name.includes('로퍼') || name.includes('드라이빙') ||
      name.includes('고미노') || name.includes('단화') ||
      name.includes('옥스퍼드') || name.includes('옥스포드') ||
      name.includes('슈즈') || name.includes('구두')
    ) cate = 50000787
    if(name.includes('티셔츠') || name.includes('반팔') || name.includes('맨투맨') || name.includes('슬리브리스')) cate = 50000830
    if(name.includes('니트') || name.includes('풀오버') || name.includes('스웨터') ||
      name.includes('터틀넥') || name.includes('스웻셔츠')) cate = 50000805
    if(name.includes('로브')) cate = 50000832
    if(name.includes('가디건') || name.includes('카디건')) cate = 50000832  
    if(name.includes('셔츠') || name.includes('남방') || name.includes('브라우스')) cate = 50000833
    if(name.includes('바지') || name.includes('숏츠') || name.includes('쇼츠') ||  
      name.includes('진') || name.includes('슬랙스') ||
      name.includes('팬츠') || name.includes('펜츠') ) cate = 50000836
    if(name.includes('조끼') || name.includes('베스트')) cate = 50000834
    if(name.includes('바지') || name.includes('숏츠') || name.includes('쇼츠') ||  
    name.includes('진') || name.includes('슬랙스') ||
    name.includes('팬츠') || name.includes('펜츠')) {
        if(name.includes('데님') || name.includes('청')) cate = 50000836
        else cate = 50000835
    }
    if(name.includes('점퍼') || name.includes('파카') || 
      name.includes('패딩') || name.includes('무스탕')) cate = 50000837  
    if(name.includes('재킷') || name.includes('자켓') || name.includes('집업') || 
      name.includes('윈드브레이커') || name.includes('후드') || name.includes('후디') ||
      name.includes('블레이저') || name.includes('블레이져') || name.includes('짚업') ||  
      name.includes('케이프') || name.includes('블루종')) cate = 50000838  
    if(name.includes('코트')) cate = 50000839
    if(name.includes('점프') || name.includes('바디수트')) cate = 5000896
    if(name.includes('레인코트')) cate = 50000844  
    if(name.includes('트레이닝') || name.includes('피트니스') || name.includes('조거')) cate = 50000841
    if(name.includes('수영복') || name.includes('스웜')) cate = 50003049  
    if(name.includes('벨트')) cate = 50003988  // 정장벨트로 통일
    if(name.includes('지갑') || name.includes('월렛')) {
      if(name.includes('반지갑') || name.includes('폴딩') || name.includes('콤팩트')) cate = 50003985
      if(name.includes('장지갑')) cate = 50003987
    } 

    if(name.includes('스카프')) cate = 50004010

    if(name.includes('비니')) cate = 50000546
    if(name.includes('안경') || name.includes('선글라스')) cate = 50000554 
    if(name.includes('장갑') || name.includes('글로브') || name.includes('글러브')) cate = 50000551
    if(name.includes('목도리') || name.includes('머플러')) cate = 50000565
    if(name.includes('멀버리') && name.includes('카라')) cate = 50000568

    if(name.includes('선캡') || name.includes('바이저') || name.includes('바이져') || name.includes('스트로')) cate = 50000542 
    if(name.includes('비니')) cate = 50000543
    if(name.includes('페도라')) cate = 50000544
    if(name.includes('햇')) {
      if(name.includes('파나마') || name.includes('라피아') || name.includes('클로슈') ||   
        name.includes('버킷') || name.includes('챙')) cate = 50000544
    }
    
  } else {
    // 여성
    
    // 패션잡화  
    if(name.includes('스카프링') || name.includes('쥬얼리박스')) cate = 50000434
    if(name.includes('벨트')) cate = 50000539
    if(name.includes('모자')) {
      if(name.includes('귀') || name.includes('귀달이') || name.includes('이어')) cate = 50000548
    }
    if(name.includes('커프스링') || name.includes('커프스 링')) cate = 50000564
    if(name.includes('숄') || name.includes('스톨') ||  
      name.includes('케이프') || name.includes('판초')) cate = 50000567
    if(name.includes('카드') || name.includes('명함') || name.includes('비즈니스 카드')) cate = 50000662
    if(name.includes('브리프케이스')) cate = 50000650 // 남성 브리프케이스
    if(name.includes('백') || name.includes('가방')) {
      /** 
      if(name.includes('버킷')) cate = 50000639
      if(name.includes('숄더')) cate = 50000639
      */
      if(name.includes('브리프') || name.includes('서류')) cate = 50000650 // 남성 브리프케이스
      if(name.includes('박스')) cate = 50000640
      if(name.includes('토트')) cate = 50000640
      if(name.includes('보스턴')) cate = 50000653
      if(name.includes('탑') && name.includes('핸들')) cate = 50000639
      else cate = 50000639 // 버킷 숄더 바스켓 복조리
    }
    if(name.includes('숄더백')) cate = 50000639
    if(name.includes('크로스백') || name.includes('크로스바디백') ||name.includes('메신저')) cate = 50000641
    if(name.includes('클러치')) cate = 50000642
    if(name.includes('파우치')) cate = 50000643
    if(name.includes('넥')) {
      if(name.includes('넥타이')) cate = 50004014
      if(name.includes('보우')) cate = 50004015
      if(name.includes('워머') || name.includes('넥워머')) cate = 50000566
    }
    if(name.includes('보우')) {
      if(name.includes('타이')) cate = 50004015
    }
    if(name.includes('선캡') || name.includes('바이져') || name.includes('스트로')) cate = 50000542 
    if(name.includes('비니')) cate = 50000543
    if(name.includes('페도라')) cate = 50000544
    if(name.includes('햇')) {
      if(name.includes('파나마') || name.includes('라피아') || name.includes('클로슈') ||   
        name.includes('버킷') || name.includes('챙')) cate = 50000544
    }
    if(name.includes('비니')) cate = 50000546
    if(name.includes('안경') || name.includes('선글라스')) cate = 50000554 
    if(name.includes('장갑') || name.includes('글로브') || name.includes('글러브')) cate = 50000551
    if(name.includes('목도리') || name.includes('머플러')) cate = 50000565
    if(name.includes('멀버리') && name.includes('카라')) cate = 50000568

    if(name.includes('헤어')) {
      if(name.includes('머리띠') || name.includes('밴드')) cate = 50000560
      if(name.includes('핀') || name.includes('클립')) cate = 50000561
      if(name.includes('슈슈') || name.includes('스크런치')) cate = 50000562
      if(name.includes('스카프') || name.includes('반다나')) cate = 50000563
      else cate = 50000563
    }
    if(name.includes('키링') || name.includes('키 링') || 
      name.includes('키홀더') || name.includes('키체인') ||
      name.includes('키 홀더') || name.includes('열쇠고리')) cate = 50000570
      
    if(name.includes('백팩') || name.includes('배낭')) cate = 50000644
    if(name.includes('범백') || name.includes('벨트백') || name.includes('힙색')) cate = 50000645
    if(name.includes('토트백')) cate = 50000640
    if(name.includes('쇼퍼백')) cate = 50000640

    if(name.includes('여권') || name.includes('패스포트')) cate = 50000657
    if(name.includes('슬리퍼')) cate = 50000780

    // 여성의류
    if(name.includes('셔츠') || name.includes('블라우스')) cate = 50000804
    if(name.includes('니트') || name.includes('풀오버') || 
      name.includes('스웨터') || name.includes('터틀넥') || name.includes('스웻셔츠')) cate = 50000805 
    if(name.includes('원피스') || name.includes('드레스')) cate = 50000807
    if(name.includes('치마') || name.includes('스커트')) cate = 50000808
    if(name.includes('바지') && name.includes('청')) cate = 50000809  
 
    if(name.includes('바지') || name.includes('숏츠') || name.includes('쇼츠') ||  
    name.includes('진') || name.includes('슬랙스') ||
    name.includes('팬츠') || name.includes('펜츠')) {
        if(name.includes('데님') || name.includes('청')) cate = 50000809
        else cate = 50000810
    }
    if(name.includes('티셔츠') || name.includes('반팔')  || name.includes('맨투맨') ||
      name.includes('후드') || name.includes('후디') || name.includes('슬리브리스')) cate = 50000803
    if(name.includes('가디건') || name.includes('카디건')) cate = 50000806
    if(name.includes('로브')) cate = 50000806
    if(name.includes('코트')) cate = 50000813
    if(name.includes('조끼') || name.includes('베스트')) cate = 50000817 
    if(name.includes('트레이닝') || name.includes('피트니스') || name.includes('조거')) cate = 50000818
    if(name.includes('점퍼') || name.includes('파카') || 
      name.includes('패딩') || name.includes('무스탕')) cate = 50000814  
    if(name.includes('재킷') || name.includes('자켓') || name.includes('집업') || 
      name.includes('윈드브레이커') || name.includes('블레이저') || name.includes('블레이져') || 
      name.includes('짚업') || name.includes('케이프') || name.includes('블루종')) cate = 50000815  
    if(name.includes('점프') || name.includes('바디수트')) cate = 50000811
    if(name.includes('파자마')) cate = 500008260  
    if(name.includes('펜디') && name.includes('스트랩')) cate = 50003977

    if(name.includes('아이패드')) cate = 50001588
    if(name.includes('에어팟') && name.includes('케이스')) cate = 50002337 
    if(name.includes('워커')) {
      if(name.includes('힐')) cate = 50003833
      else cate = 50003832
    }
    if(name.includes('비키니')) cate = 50003056
    if(name.includes('스웜')) cate = 50003055
    if(name.includes('수영복')) {
      if(name.includes('원피스')) cate = 50003055
      if(name.includes('비키니')) cate = 50003056
      else cate = 50003055
    }
    if(name.includes('캡')) cate = 50003990 // 야구모자 일반캡
    if(name.includes('머니클립')) cate = 50000661
    if(name.includes('동전') || name.includes('코인')) cate = 50000664

    // 패션쥬얼리 <> 링과 이어링 카테고리 구분
    if(/**name.includes('링') || */name.includes('반지')) cate = 50004155

    if(name.includes('지갑') || name.includes('월렛')) {
      if(name.includes('반지갑') || name.includes('폴딩') || name.includes('콤팩트')) cate = 50003982
      if(name.includes('장지갑')) cate = 50003984
      if(name.includes('키') || name.includes('키링')) cate = 50000663
      else cate = 50003982
    }
    if(name.includes('양말') || name.includes('삭스')) {
      if(name.includes('미드') || name.includes('하이')) cate = 50003997 // 니삭스
      else cate = 50003996 // 중목 장목 양말
    }
    // 여성 신발
    if(name.includes('플랫') || name.includes('플렛') || name.includes('메리제인')) cate = 50003817
    if(name.includes('드라이빙') || name.includes('로퍼') || 
      name.includes('고미노') || name.includes('고미니')) cate = 50003818  
    if(name.includes('슈즈') || 
      name.includes('신발') || name.includes('구두')) {
      if(name.includes('발레리나') || name.includes('로우힐')) cate = 50003817 // 플렛
      if(name.includes('옥스퍼드') || name.includes('옥스포드')) cate = 50003818 // 로퍼
      if(name.includes('삭스')) cate = 50003822
      if(name.includes('젤리')) cate = 50003845
      else cate = 50003818
    }
    if(name.includes('모카신')) cate = 50003820
    if(name.includes('슬립온') || name.includes('에스빠듀') || name.includes('에스파듀')) cate = 50003821
    if(name.includes('스니커즈') || name.includes('운동화') || name.includes('스피드러너')) cate = 50003822
    if(name.includes('비브런')) cate = 50003822
    if(name.includes('펌프스') || name.includes('힐')) {
      if(name.includes('토') || name.includes('오픈')) cate = 50003822
      if(name.includes('하이힐')) cate = 50003823
      if(name.includes('스트랩')) cate = 50003825
      if(name.includes('슬링백')) cate = 50003826
      if(name.includes('통굽') || name.includes('굽')) cate = 50003829
      else cate = 50003830
    }
    if(name.includes('오픈 토') || name.includes('오픈토')) cate = 50003830
    if(name.includes('러닝화')) cate = 50003834
    if(name.includes('부츠')) {
      if(name.includes('하이') || name.includes('롱') || name.includes('웨스턴')) cate = 50003834
      else if(name.includes('미들') || name.includes('레인')) cate = 50004190
      else if(name.includes('앵클') || name.includes('첼시')) cate = 50004191
      else cate = 50004191
    }
    if(name.includes('샌들')) {
      if(name.includes('슬링백')) cate = 50003841
      else if(name.includes('스트랩') || name.includes('쪼리')) cate = 50003842
      else if(name.includes('웨지')) cate = 50003843
      else if(name.includes('뮬') || name.includes('블로퍼') ||  name.includes('클로그')) cate = 50003847
      else cate = 50004191
    }
    if(name.includes('플립플랍')) cate = 50003842
    if(name.includes('뮬') || name.includes('블로퍼')) cate = 50003847
    if(name.includes('클로그')) cate = 50003847
    if(name.includes('브로치')) cate = 50004028
    if(name.includes('시계')) {
      if(name.includes('가죽')) cate = 50004140
      else if(name.includes('메탈')) cate = 50004141
      else cate = 50006188
    }

    if(name.includes('귀걸이') || name.includes('귀찌') || 
      name.includes('이어링') || name.includes('이어커프') || 
      name.includes('이어링') || name.includes('커프스')) cate = 50004164
    if(name.includes('네크리스') || name.includes('목걸이')) cate = 50004164
    if(name.includes('팔찌') || name.includes('브레이슬릿') || name.includes('블레이슬릿')) cate = 50004194
    
    if(name.includes('케이스')) {
      if(name.includes('아이폰')) {
        if(name.includes('가죽')) cate = 50004590
        else cate = 50004594
      }
      if(name.includes('도큐먼트')) cate = 50000643
    }
    
    if(name.includes('베레모')) cate = 50006868
    if(name.includes('햇') || name.includes('캡')) {
      if(name.includes('보이')) cate = 50006868
    }  
    
    if(name.includes('부티')) cate = 50000779
    if(name.includes('에코백')) cate = 50015340  
    if(name.includes('캡') || name.includes('볼캡') || name.includes('베이스볼')) cate = 50003990
    if(name.includes('스카프')) cate = 50004010
    if(name.includes('스카프')) {
      if(name.includes('트윌') || name.includes('방도')) cate = 50004011
    }
    if(name.includes('방도')) cate = 50004011
  }
  return cate;
}
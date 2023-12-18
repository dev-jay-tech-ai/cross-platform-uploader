module.exports = (num) => {
  // console.log('카테고리 번호:', num)
  const categoryNum = {
    2007158 : [ // 의류
      50000811, 
      50008960,
      50002337,
      50001588,
      50004590,
      50004594,
      50000551,
      50004164,
      50004174,
      50004155,
      50004194,
      50003985,
      50003987,
      50000664,
      50000661,
      50003982,
      50003984,
      50000663,
      50000662,
      50000434,
      50000566,
      50000568,
      50004014,
      50004015,
      50000565,
      50004028,
      50000567,
      50004010,
      50004011,
      50000564,
      50000570,
      50000562,
      50000560,
      50000563,
      50000561,
      50000548,
      50006868,
      50000543,
      50000546,
      50000542,
      50003990,
      50000544,
      50003988,
      50000539,
      50000554,
      50004140,
      50006188,
      50004141,
      50003997,
      50003996
    ],
    2009506 : [ // 가방
      50000651,
      50000650,
      50000646,
      50000648,
      50000649,
      50000647,
      50000652,
      50003977,
      50000644,
      50000639,
      50015340,
      50000641,
      50000642,
      50000640,
      50000643,
      50000645,
      50007808,
      50000653,
      50000657
    ],
    2315292 : [ // 신발
      50003818,
      50003820,
      50003822,
      50003821,
      50003817,
      50003834,
      50004190,
      50004191,
      50000779,
      50003847,
      50003842,
      50003841,
      50003843,
      50003845,
      50000780,
      50003835,
      50003839,
      50003840,
      50003837,
      50003833,
      50003832,
      50003824,
      50003825,
      50003826,
      50003828,
      50003829,
      50003830,
      50003823,
      50000648,
      50000649,
      50000647,
      50000652,
      50000787,
      50000784,
      50000785,
      50000792,
      50000789,
      50000788,
      50000790,
      50000783,
      50000666,
      50003856,
      50000791
    ],
    2460658 : [ // 패션잡화
      50000550,
      50000639,
      50003049,
      50003056,
      50003055,
      50000648,
      50000831,
      50000844,
      50000836,
      50000833,
      50000838,
      50000837,
      50000834,
      50000835,
      50000832,
      50000839,
      50000841,
      50000830,
      50000826,
      50000805,
      50000810,
      50000804,
      50000808,
      50000807,
      50000815,
      50000814,
      50000817,
      50000809,
      50000806,
      50000813,
      50000818,
      50000803
    ]
  };

  // Check each keyword and return the corresponding category if found
  for (const category in categoryNum) {
    if (categoryNum[category].includes(num)) {
      return category;
    }
  }

  // If no matching keyword is found, return a default category
  return 0; // You can change this to your default category code
};
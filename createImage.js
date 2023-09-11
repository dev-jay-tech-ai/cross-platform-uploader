const csv = require('csv-parser');
const fs = require('fs');
const axios = require('axios');
const results = []; // 'Link', 'Name', 'Comments', 'Images'

/** 👇 아래에 있는 file에 
    CSV 파일 명을 복사해주세요 :) 46(40*/
const file = '2023-09-11_160136(40)';
/** 👆 위에 있는 file에
    CSV 파일 명을 복사해주세요 :) */

const filename = (name) => { return name };
module.exports = filename(file);

const path = 'csv/'+file+'.csv';
fs.readdir('images/'+file, (err) => { 
  if(err) {
    console.error('There is no folder. Create soon');
    fs.mkdirSync('images/'+file);
  }
})

fs.createReadStream(path)
  .pipe(csv({}))
  .on('data',(data) => results.push(data))
  .on('end', () => {
    results.map((result,index) => {
      if(!result.Name.startsWith('-')) {
        if(index >= 0 && index <= 100) { /////// 이미지 양이 많을 때 끊어서 진행할 것!!!!!
          const str = result.Images; 
          const link = result.Link;
          const imgName = link.slice(link.indexOf('articleid=')+10,link.indexOf('&referrerAllArticles=false'));
          const arr = str.split(',');
          try {
            arr.map(async(link, idx) => {
              const imgResult = await axios.get((link), { // 요청: 이미지주소 응답: 이미지 데이터
                responseType: 'arraybuffer', // buffer가 연속적으로 들어있는 자료구조
              });
            fs.writeFileSync(`images/${file}/${imgName}_${idx}.jpg`,imgResult.data);
            })
          } catch {
            console.error(error)
          }
        }
      }
    })
  });
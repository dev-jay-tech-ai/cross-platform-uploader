const csv = require('csv-parser');
const fs = require('fs');
const results = []; // 'Link', 'Name', 'Comments', 'Images'
const csvFile = '2023-09-10_161349(200)';
const getCate = require('./getCategory');
const getCateNum = require('./asset/category_num');
let len = 2;
// csv에서 정보 가져오기
fs.createReadStream('csv/'+csvFile+'.csv')
  .pipe(csv({}))
  .on('data',(data) => results.push(data))
  .on('end',() => {
    results.map((result) => {
      if(!result.Name.startsWith('-')) {
        len++;
        const orgarr = result.Name.replaceAll(/[\{\}\[\]\/?.,;:|\*~`!^\-_+<>@\#$%&\\\=\\'\"]/gi,'').split(' ');
        //  const cate = formEtc&&formEtc.includes('ㅇ')?50000815:50000651; 
        const title = result.Name;
        const cate  = getCate(title);
        const cateInfo = getCateNum(cate); 
        console.log('\n'+cate)
        console.log(title,'\n', '*****'+cateInfo+'\n')

      } 
    })
  });
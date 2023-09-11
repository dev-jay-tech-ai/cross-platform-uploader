const csv = require('csv-parser');
const fs = require('fs');
const Excel = require('exceljs');
const results = []; // 'Link', 'Name', 'Comments', 'Images'
const totalData = [];
const { PythonShell } = require('python-shell');
const filename = require('./fileName');
const detail = require('./detail');
const csvFile = require('./createImage');
const brandcode = require('./brandcode');
const getCate = require('./getCategory');
let len = 2;
// csv에서 정보 가져오기
fs.createReadStream('csv/'+csvFile+'.csv')
  .pipe(csv({}))
  .on('data',(data) => results.push(data))
  .on('end',() => {
    results.map((result) => {
      if(!result.Name.startsWith('-')) {
        len++;
        const imgName = result.Link.match('(?<=articleid=)(.*?)(?=\&)')[0];
        const linkInfo = 'cafe.naver.com/soimarket/'+ imgName;
        const orgarr = result.Name.replaceAll(/[\{\}\[\]\/?.,;:|\*~`!^\-_+<>@\#$%&\\\=\\'\"]/gi,'').split(' ');
        const org = orgarr.slice(1,orgarr.length);
        const string = orgarr.slice(2,orgarr.length-1).join(' ');
        let name = '';
        const form = result.Comments.split('■');
        const formPrice = form[1]&&form[1].split(':')[1].trim().replaceAll('\n','');
        const formColor = form[2]&&form[2].split(':')[1].trim().replaceAll('\n','');
        const formSize = form[3]&&form[3].split(':')[1].trim().replaceAll('\n','');
        const formEtc = form[4]&&form[4].split(':')[1].trim().replaceAll('\n','');
        const title = result.Name;
        const cateInfo  = getCate(title);
        const cate = cateInfo !== 0 ? cateInfo : formEtc&&formEtc.includes('ㅇ')?50000815:50000651; 
        /** 상품 정보 제고 공시 템플릿 */
        const productInfo = {
          '의류' : 2460658,
          '신발' : 2315292,
          '가방' : 2009506,
          '패션잡화' : 2007158
        }

        const brand = org[0];
        const num = org[org.length-1]; // result.Images
        const buyerCodeArr = title.split(' ').filter((t) => t.match(/^1000?\d+(\(\d+\))?$/));
        const getByerPrice = (code) => {
          if(code.includes('(')) {
            const arr = code.split('(');
            const ex1 = code.match(/\((\d+)\)/)[1];
            const ex2 = arr[1].replace(')','');
            const num = arr[0].includes('1000') ? arr[0].replace('1000','') : arr[0].replace('100','')
            const result = Number(num)-(Number(ex1)/100 * Number(num));
            const numUnit = arr[0].includes('1000') ? '1000' : '100';
            if(ex1 === ex2) return numUnit+result;
          } else return code; 
        }
        const buyerCode = buyerCodeArr.length > 0 ? getByerPrice(buyerCodeArr[buyerCodeArr.length-1]) : '';
        if(string.includes('정가')) {
          name = string.slice(0, string.indexOf('정가'));
          price = string.slice(string.indexOf('정가'),string.length);
        } else if (string.includes('정상가')) {
          name = string.slice(0, string.indexOf('정상가'));
          price = string.slice(string.indexOf('정상가'),string.length);
        } else {
          name = string.slice(0, string.indexOf('모포'));
          price = string.slice(string.indexOf('모포'),string.length);
        }
        name = name.replace(formColor&&formColor.slice(0, formColor.length-1),'');
        const total = brand + ' ' + name + '/ ' + formColor + ' ' + buyerCode;
        let tmp;
        if(formPrice !== undefined) {
          if(formPrice.includes('만') && formPrice.includes('천')) {
            const mil = formPrice.slice(0,formPrice.indexOf('만'));
            const thou = formPrice.slice(formPrice.indexOf('만')+1,formPrice.indexOf('천'));
            tmp = mil+thou+'000';
          } else if (formPrice.includes('만')) {
            const mil = formPrice.slice(0,formPrice.indexOf('만'));
            tmp = mil+'0000';
          } else {
            tmp = formPrice;
          }
          tmp = tmp.replace(/[^0-9]/g,'');
        } else tmp = 1234500;
        const imgLen = result.Images.split(',').length;
        let addImg = [];
        for(let i=1; i<imgLen; i++) { // 이미지 최대 9개까지 업로드 가능
          if(i<10) addImg.push(imgName + '_' + i + '.jpg');
        }
        const imgEle = `<p class="se-text-paragraph se-text-paragraph-align-center" style="text-align: center!important"><span style="color:#000000;"class="se-fs-fs16 se-ff-nanumgothic">​</span></p><img src="*****이미지*****" alt="" >`;
        const imgArr = [];
        const imgList = result.Images.split(',');
        for(let j=0; j<imgLen; j++) {
          imgArr.push(imgEle.replace('*****이미지*****', imgList[j]))
        } 

        const orgDetail = detail
        .replace('*****오리지널제목*****', title)
        .replace('*****바잉팀코멘트*****', formPrice+'\n'+formColor+'\n'+formSize+'\n'+formEtc+'\n')
        .replace('*****바잉가격*****', '바잉가격코드: '+ buyerCode)
        .replace('*****카페링크*****', linkInfo)
        .replace('//신발치수//', '굽높이 써라잉')
        .replaceAll('*****브랜드*****', brand)
        .replaceAll('*****이미지*****', imgArr.join(''))
        .replaceAll('*****사이즈*****', formSize)
        .replaceAll('*****색상*****', formColor)
        .replaceAll('//브랜드//', brand);
        //정보 : [0 상품명, 1 판매가, 2 대표이미지파일명, 3 추가이미지파일명, 4 상품상세정보, 5 브랜드]
        //상세페이지 만들기 [풀제목] [가격] [바잉코멘트] [이미지]
        console.log(num, buyerCode)
        let orgData = [];
        orgData.push(imgName+' '+total, tmp, imgName+'_0'+'.jpg', addImg.join(','), orgDetail, brandcode(brand), cate);
        totalData.push(orgData);
      } 
    })
    // 엑셀 정보 읽고 각자 열에 쓰기
    async function saveExcel () {
    //엑셀 데이터 읽고 워크북 불러오기
    const workbook = new Excel.Workbook();
    await workbook.xlsx.readFile('excel/template.xlsx')
      .then(function()  {
        const worksheet = workbook.getWorksheet('ver.2.1');
        // 반복문으로 데이터 넣기
        totalData.forEach((data,idx) => {
          let i = idx+2;
          worksheet.getCell(`B${i}`).value = data[6]; // 카테고리
          worksheet.getCell(`C${i}`).value = data[0]; // 상품명
          worksheet.getCell(`D${i}`).value = data[1] === ''?1234500:data[1]; // 판매가
          worksheet.getCell(`H${i}`).value = data[2]; // 대표이미지파일명
          worksheet.getCell(`I${i}`).value = data[3]; // 추가이미지파일명
          worksheet.getCell(`J${i}`).value = data[4]; // 추가이미지파일명
          worksheet.getCell(`N${i}`).value = data[5]; // 브랜드
          worksheet.getCell(`U${i}`).value = data[5]; // 수입사
        })
        return workbook.xlsx.writeFile(`excel/cafe_${csvFile}.xlsx`);
    })
    }
    const pythonPro = () => {
      const options = {
        mode: 'text',
        pythonPath: '',
        pythonOptions: ['-u'],
        scriptPath: '',
        args: [`cafe_${csvFile}`,len]
      };
      PythonShell.run('./python/excel.py', options, function (err, data) {
        if (err) throw err;
      });
    }
    const process =  async () => {
      await saveExcel();
      await pythonPro();
    }
    process();
  });
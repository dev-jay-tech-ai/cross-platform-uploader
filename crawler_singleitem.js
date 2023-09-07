const puppeteer = require('puppeteer');
const iframe = require('puppeteer-get-iframe').iframeAttached;
const stringify = require('csv-stringify/lib/sync');
const fs = require('fs');
const filename = require('./fileName');
const getFileName = filename();
const { PythonShell } = require('python-shell');
require("dotenv").config();

fs.readdir('csv', (err) => {
  if(err) { // 폴더 생성 전에 존재 여부 체크
    console.error('There is no folder. Create soon');
    fs.mkdirSync('csv');
  }
})
fs.readdir('images', (err) => {
  if(err) {
    console.error('There is no folder. Create soon');
    fs.mkdirSync('images');
  }
})

const crawler = async () => {
  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--window-size=1680,1080', '--disable-notifications']
    });
    const page = await browser.newPage();
    await page.setViewport({
      width: 1080,
      height: 1080
    })
    
    const url = 'https://nid.naver.com/nidlogin.login?mode=form&url=https%3A%2F%2Fwww.naver.com';
    const cafeUrl = 'https://cafe.naver.com/soimarket';
    const naver_id = process.env.NAVER_ID;
    const naver_pw = process.env.NAVER_PW;
    await page.goto(url); 
    await page.evaluate((id, pw) => {
      document.querySelector('#id').value = id;
      document.querySelector('#pw').value = pw;
    }, naver_id, naver_pw);
    await page.click('button.btn_login');
    await page.waitForNavigation();
    await page.goto(cafeUrl);
    await page.click('#group284 li:nth-child(2)');
    const frame = await iframe(page, 'cafe_main');
    await frame.waitForTimeout('ul.article-album-sub')

    const products = await frame.evaluate(() => {
      const productLinks = Array.from(document.querySelectorAll('ul.article-album-sub li > a')).map(productLink => productLink.href);
      return productLinks.map((productLink) => {
        return productLink;
      });
    });

    const results = [];
    let productNum = 0;
    for (let i=0; i<4; i++) {
      /**  originalMessage: 'Invalid parameters' 에러의 경우 아래의 주석을 해제해 주세요. */
      await frame.waitForTimeout(7000);
      await page.goto(products[i]);
      // 아이프레임 전환
      const elementHandle = await iframe(page, 'cafe_main');
      await Promise.race([
        elementHandle.waitForSelector('h3.title_text'), // name
        elementHandle.waitForSelector('.se-component.se-text.se-l-default'), // buying comment
        elementHandle.waitForSelector('.se-component.se-image.se-l-default'), // images
      ]);

      const name = await elementHandle.evaluate(() => {
        return document.querySelector('h3.title_text') && document.querySelector('h3.title_text').innerText;
      });
      const text = await elementHandle.evaluate(() => {
        return document.querySelector('.se-component.se-text.se-l-default') && document.querySelector('.se-component.se-text.se-l-default').innerText;
      });
      const imgs = await elementHandle.evaluate(() => {
        return document.querySelector('.se-component.se-image.se-l-default') && Array.from(document.querySelectorAll('.se-component.se-image.se-l-default img')).map((img) => img.src).join();
      });
      const linkId = products[i].match('(?<=articleid=)(.*?)(?=\&)')[0];
      const mText = 'cafe.naver.com/soimarket/'+ linkId; 
      productNum++;
      results.push([products[i], name, text, imgs, mText]);
    }

    await page.close();
    await browser.close();

    const str = stringify(results, { header: true, columns: [ 'Link', 'Name', 'Comments', 'Images', 'Mcomments' ] });
    fs.writeFileSync(`csv/original/${getFileName}(${productNum}).csv`, str); 
    fs.writeFileSync(`csv/${getFileName}(${productNum}).csv`, str); 
    
    PythonShell.run('./python/index.py', null, function (err, results) {
      if (err) throw err;
    });
    
    console.log(new Date(),'크롤링 끝');
  } catch(err) {
    console.log(err)
  }
}

crawler();
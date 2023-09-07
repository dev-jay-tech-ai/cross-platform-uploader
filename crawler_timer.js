const crawler = require('./crawler_singlepage');

/*
const schedule = require('node-schedule');
console.log(new Date(),'타이머 시작');
schedule.scheduleJob('0 0/15 * * * *',() => {
  console.log(new Date(),'크롤링 시작');
  crawler();
});*/

crawler();
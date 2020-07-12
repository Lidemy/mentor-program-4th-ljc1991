/* eslint-disable no-plusplus */
const request = require('request');
const process = require('process');

request(
  `https://restcountries.eu/rest/v2/name/${process.argv[2]}`, (error, response, body) => { // eslint: prefer-template, consistent-return
    if (error) {
      console.log('抓取失敗', error);
      return;
    }

    let json;
    try {
      json = JSON.parse(body);
    } catch (err) { // eslint: no-shadow
      console.log(err);
      return; // eslint: consistent-return
    }

    if (json.status === 404) {
      console.log('找不到國家資訊');
      return;
    }

    for (let i = 0; i < json.length; i++) {
      console.log('============');
      console.log(`國家：${json[i].name}`);
      console.log(`首都：${json[i].capital}`);
      console.log(`貨幣：${json[i].currencies[0].code}`);
      console.log(`國碼：${json[i].callingCodes}`);
      // 自我檢討中是 json[i].callingCodes[0]，是不是因為 callingCodes 裡面只有一個所以我這樣寫也可以抓得到呢？
    }
  },
);

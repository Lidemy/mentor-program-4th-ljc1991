/* eslint-disable no-plusplus */
const request = require('request');

request(
  'https://lidemy-book-store.herokuapp.com/books?_limit=10', (error, response, body) => { // eslint: consistent-return
    /*
    // 原code
    // console.log(body)
    const json = JSON.parse(body)

    for (let i = 0; i < json.length; i++) {
      console.log(`${json[i].id} ${json[i].name}`)
    }
    */

    // 看完自我檢討後修正如下
    // 補上錯誤處理
    if (error) {
      console.log('抓取失敗', error);
      return;
    }

    // 補上例外處理
    let json;
    try {
      json = JSON.parse(body);
    } catch (err) { // eslint: no-shadow
      console.log(err);
      return; // eslint: consistent-return
    }

    for (let i = 0; i < json.length; i++) {
      console.log(`${json[i].id} ${json[i].name}`);
    }
  },
);

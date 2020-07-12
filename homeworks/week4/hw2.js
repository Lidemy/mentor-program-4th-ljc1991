/* eslint-disable no-plusplus */
const request = require('request');
const process = require('process');

// 印出前 20 本 (概念同 hw1)
if (process.argv[2] === 'list') {
  request(
    'https://lidemy-book-store.herokuapp.com/books?_limit=20', (error, response, body) => { // eslint: consistent-return
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

      for (let i = 0; i < json.length; i++) {
        console.log(`${json[i].id} ${json[i].name}`);
      }
    },
  );
}

// 輸出特定 id 的書籍
if (process.argv[2] === 'read') {
  request(
    `https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`, (error, response, body) => { // eslint: prefer-template, consistent-return
      if (error) {
        console.log('抓取失敗', error);
        return;
      }

      let json;
      try {
        json = JSON.parse(body);
      } catch (err) {
        console.log(err);
        return; // eslint: consistent-return
      }
      // console.log(json.name) // 原本只有印出書名
      console.log(json); // 看完自我檢討後所修改，但我對題目的解讀是印出書籍名稱啦...
    },
  );
}

// 刪除特定 id 的書籍
if (process.argv[2] === 'delete') {
  request.delete(
    `https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`, (error) => { // eslint: prefer-template, consistent-return, no-unused-vars(response, body)
      if (error) {
        console.log('刪除失敗', error);
        return;
      }
      /*
      // 原code
      let json
      try {
        json = JSON.parse(body)
      } catch (error) {
        console.log(error)
        return
      }
      console.log(json) // 會印出'{}'
      */
      console.log('刪除成功'); // 看完自我檢討後所補上
    },
  );
}

// 新增書籍
if (process.argv[2] === 'create') {
  request.post({
    url: 'https://lidemy-book-store.herokuapp.com/books/',
    form: {
      name: `${process.argv[3]}`,
    },
  }, (error) => { // eslint: consistent-return, no-unused-vars(response, body)
    if (error) {
      console.log('新增失敗', error);
      return;
    }
    /*
    // 原code
    let json
    try {
      json = JSON.parse(body)
    } catch (error) {
      console.log(error)
      return
    }
    console.log(json)
    */
    console.log('新增成功'); // 看完自我檢討後所補上
  });
}

// 更新特定 id 書籍的名稱
if (process.argv[2] === 'update') {
  request.patch({
    url: `https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`, // eslint: prefer-template
    form: {
      name: `${process.argv[4]}`,
    },
  }, (error) => { // eslint: consistent-return, no-unused-vars(response, body)
    if (error) {
      console.log('更新失敗', error);
      return;
    }
    /*
    // 原code
    let json
    try {
      json = JSON.parse(body)
    } catch (error) {
      console.log(error)
      return
    }
    console.log(json)
    */
    console.log('更新成功'); // 看完自我檢討後所補上
  });
} // eslint: no-extra-semi

/*
心得：
看完自我檢討才發現：
  1. 可以把 url 和 process.argv 用變數存起來，方便重複使用以及提升 process.argv 的語意
  2. 條件判斷可以用 switch case 來做
  3. 使用函數可以提升 code 的可讀性、可維護性和可變更性
然後就覺得自己怎麼會寫出這種東西來... XDDD
*/

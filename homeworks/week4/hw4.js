/* eslint-disable no-plusplus, spaced-comment */
const request = require('request');

const options = {
  url: 'https://api.twitch.tv/kraken/games/top',
  headers: {
    //'User-Agent': 'request.GET', // 助教批改完後進行修正
    Accept: 'application/vnd.twitchtv.v5+json', // eslint: quote-props
    'Client-ID': 'vudqmec43lb95kg44zg15xur4ik6b4',
  },
};

request(options, (error, response, body) => { // eslint: consistent-return
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

  for (let i = 0; i < json.top.length; i++) {
    console.log(`${json.top[i].viewers} ${json.top[i].game.name}`);
  }
});

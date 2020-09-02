/* eslint-disable arrow-parens, no-restricted-syntax */
/* 跟著範例影片做一次初版的code
const request = new XMLHttpRequest()
request.open('GET', 'https://api.twitch.tv/kraken/games/top?limit=5', true)
request.setRequestHeader('Client-ID', 'vudqmec43lb95kg44zg15xur4ik6b4')
request.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json')

request.onload = function () {
  if (this.status >= 200 && this.status < 400) {
    // console.log(this.response)
    const games = JSON.parse(this.response).top
    for (let game of games) {
      // console.log(game)
      let element = document.createElement('li')
      element.innerText = game.game.name
      document.querySelector('.navbar__nav').appendChild(element)
    }

    // 顯示第一個遊戲的實況
    document.querySelector('h1').innerText = games[0].game.name

    // 抓取第一個遊戲的實況內容
    const request2 = new XMLHttpRequest()
    request2.open('GET', 'https://api.twitch.tv/kraken/streams?game=' + encodeURIComponent(games[0].game.name), true)
    request2.setRequestHeader('Client-ID', 'vudqmec43lb95kg44zg15xur4ik6b4')
    request2.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json')

    request2.onload = function () {
      if (this.status >= 200 && this.status < 400) {
        const data = JSON.parse(this.response).streams
        // console.log(data)
        for (let stream of data) {
          let element = document.createElement('div')
          document.querySelector('.streams').appendChild(element)
          element.outerHTML = `<div class="stream">
            <img src="${stream.preview.large}" />
            <div class="stream__data">
                <div class="stream__avatar">
                    <img src="${stream.channel.logo}">
                </div>
                <div class="stream__intro">
                    <div class="stream__title">${stream.channel.status}</div>
                    <div class="stream__channel">
                        ${stream.channel.name}
                    </div>
                </div>
            </div>
          </div>`
        }
      }
    }
    request2.send()
  }
}
request.send()

document.querySelector('.navbar__nav').addEventListener('click', e => {
  // console.log(e.target)
  if (e.target.tagName.toLowerCase() === 'li') {
    const gameName = e.target.innerText
    document.querySelector('h1').innerText = gameName
    document.querySelector('.streams').innerHTML = ''

    // 抓取遊戲的實況內容
    const request2 = new XMLHttpRequest()
    request2.open('GET', 'https://api.twitch.tv/kraken/streams?game=' + encodeURIComponent(gameName), true)
    request2.setRequestHeader('Client-ID', 'vudqmec43lb95kg44zg15xur4ik6b4')
    request2.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json')

    request2.onload = function () {
      if (this.status >= 200 && this.status < 400) {
        const data = JSON.parse(this.response).streams
        // console.log(data)
        for (let stream of data) {
          let element = document.createElement('div')
          document.querySelector('.streams').appendChild(element)
          element.outerHTML = `<div class="stream">
            <img src="${stream.preview.large}" />
            <div class="stream__data">
                <div class="stream__avatar">
                    <img src="${stream.channel.logo}">
                </div>
                <div class="stream__intro">
                    <div class="stream__title">${stream.channel.status}</div>
                    <div class="stream__channel">
                        ${stream.channel.name}
                    </div>
                </div>
            </div>
          </div>`
        }
      }
    }
    request2.send()
  }
})
*/

// 優化
const API_URL = 'https://api.twitch.tv/kraken';
const CLIENT_ID = 'vudqmec43lb95kg44zg15xur4ik6b4';
const STREAM_TEMPLATE = `<div class="stream">
        <img src="$preview" />
        <div class="stream__data">
            <div class="stream__avatar">
              <img src="$logo">
            </div>
            <div class="stream__intro">
                <div class="stream__title">$title</div>
                <div class="stream__channel">
                  $name
                </div>
            </div>
        </div>
      </div>`;

function getGames(callback) {
  const request = new XMLHttpRequest();
  request.open('GET', `${API_URL}/games/top?limit=5`, true);
  request.setRequestHeader('Client-ID', CLIENT_ID);
  request.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json');

  request.onload = function () {
    if (this.status >= 200 && this.status < 400) {
      const games = JSON.parse(this.response).top;
      callback(games);
    }
  };
  request.send();
}

function getStreams(gameName, callback) {
  const request = new XMLHttpRequest();
  request.open('GET', `${API_URL}/streams?game=${encodeURIComponent(gameName)}&limit=20`, true);
  request.setRequestHeader('Client-ID', CLIENT_ID);
  request.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json');

  request.onload = function () {
    if (this.status >= 200 && this.status < 400) {
      const data = JSON.parse(this.response).streams;
      callback(data);
    }
  };
  request.send();
}

function appendStream(stream) {
  const element = document.createElement('div');
  document.querySelector('.streams').appendChild(element);
  element.outerHTML = STREAM_TEMPLATE
    .replace('$preview', stream.preview.large)
    .replace('$logo', stream.channel.logo)
    .replace('$title', stream.channel.status)
    .replace('$name', stream.channel.name);
}

function addPlaceholder() {
  const placeholder = document.createElement('div');
  placeholder.classList.add('stream-empty');
  document.querySelector('.streams').appendChild(placeholder);
}

function changeGame(gameName) {
  document.querySelector('h1').innerText = gameName;
  document.querySelector('.streams').innerHTML = '';

  getStreams(gameName, streams => {
    for (const stream of streams) {
      appendStream(stream);
    }
    addPlaceholder();
    addPlaceholder();
  });
}

getGames(games => {
  for (const game of games) {
    const element = document.createElement('li');
    element.innerText = game.game.name;
    document.querySelector('.navbar__nav').appendChild(element);
  }

  changeGame(games[0].game.name);
});

document.querySelector('.navbar__nav').addEventListener('click', e => {
  if (e.target.tagName.toLowerCase() === 'li') {
    const gameName = e.target.innerText;
    changeGame(gameName);
  }
});

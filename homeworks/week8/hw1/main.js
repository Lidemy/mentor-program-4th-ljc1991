/* eslint-disable no-alert */
const apiUrl = 'https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery';
const lotteryBtn = document.querySelector('.lottery-info__btn');
const errorMessage = '系統不穩定，請再試一次';

/* 原始 code
lotteryBtn.addEventListener('click', () => {
  let xhr = new XMLHttpRequest()
  xhr.open('GET', apiUrl, true)
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 400) {
      let data
      try {
        data = JSON.parse(xhr.response)
      } catch (err) {
        alert(errorMessage)
        console.log(err)
        return
      }

      if (!data.prize) {
        alert(errorMessage)
        return
      }

      let className
      let title
      if (data.prize === 'FIRST') {
        className = 'first-prize'
        title = '恭喜你中頭獎了！日本東京來回雙人遊！'
      } else if (data.prize === 'SECOND') {
        className = 'second-prize'
        title = '二獎！90 吋電視一台！'
      } else if (data.prize === 'THIRD') {
        className = 'third-prize'
        title = '恭喜你抽中三獎：知名 YouTuber 簽名握手會入場券一張，bang！'
      } else if (data.prize === 'NONE') {
        className = 'none-prize'
        title = '銘謝惠顧'
      }
      document.querySelector('.lottery').classList.add(className)
      document.querySelector('.lottery-result__title').innerText = title

      document.querySelector('.lottery-info').classList.add('hidden')
      document.querySelector('.lottery-result').classList.remove('hidden')

    } else {
      alert(errorMessage)
    }
  }

  xhr.onerror = function () {
    alert(errorMessage)
  }

  xhr.send()
})
*/

// 整理後
function draw(callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', apiUrl, true);
  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 400) {
      let data;
      try {
        data = JSON.parse(xhr.response);
      } catch (err) {
        callback(errorMessage);
        console.log(err);
        return;
      }

      if (!data.prize) {
        callback(errorMessage);
        return;
      }

      callback(null, data);
    } else {
      callback(errorMessage);
    }
  };

  xhr.onerror = () => {
    callback(errorMessage);
  };

  xhr.send();
}

lotteryBtn.addEventListener('click', () => {
  draw((err, data) => {
    if (err) {
      alert(err);
      return;
    }

    let className;
    let title;
    if (data.prize === 'FIRST') {
      className = 'first-prize';
      title = '恭喜你中頭獎了！日本東京來回雙人遊！';
    } else if (data.prize === 'SECOND') {
      className = 'second-prize';
      title = '二獎！90 吋電視一台！';
    } else if (data.prize === 'THIRD') {
      className = 'third-prize';
      title = '恭喜你抽中三獎：知名 YouTuber 簽名握手會入場券一張，bang！';
    } else if (data.prize === 'NONE') {
      className = 'none-prize';
      title = '銘謝惠顧';
    }
    document.querySelector('.lottery').classList.add(className);
    document.querySelector('.lottery-result__title').innerText = title;

    document.querySelector('.lottery-info').classList.add('hidden');
    document.querySelector('.lottery-result').classList.remove('hidden');
  });
});

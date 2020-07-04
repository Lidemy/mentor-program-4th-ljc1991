## hw1：好多星星
>對應之課程內容：JS101 綜合題目練習 Lv 2 練習一

這題基本上就是 `for loop` 和 `console.log` 的基本應用，而且也不是要印出倒三角形、金字塔或是聖誕樹之類的進階題型，所以算是挺熟悉的，沒什麼特別的心得。

## hw2：水仙花數
>對應之課程內容：ALG101 Project 4

在上 ALG101 時看到這題就卡關了，卡住的點有兩個：
1. 不知道怎麼讓程式去判斷一個數字有幾位數。
2. 不知道怎麼讓程式去取出一個數字的各個位數。

看了講解影片後，才想到利用 `while loop` 來進行處理，就可以令一個數字一直除以 10。  
平常大多都是用 `for loop`，結果就對 `while loop` 不太熟練。

是說在學習這題以前，壓根就沒聽過水仙花數...，也不知道水仙花跟自戀有關 = = a。

## hw3：判斷質數
>對應之課程內容：JS101 綜合題目練習 Lv 3 練習五

由於除了 1 以外的質數，就僅有兩個因數，所以在看完題目後，我的想法就是設陣列來存每個數的因數，當陣列的長度不為 2 的時候，所對應的數字就不是質數。

但是在看完講解影片後，發現 Huli 的想法跟解法都簡單多了，排除掉 1 和該數字本身後直接去找因數就好，如果能找到的話就不是質數。

不過用自己想出來的方法來解題還是比較有成就感！

## hw4：判斷迴文
>對應之課程內容：ALG101 Project 5

一看到題目就知道是 `reverse` 的應用題，所以學會 `reverse` 後對這題便沒什麼特別的心得。

真的要說的話，大概就是 Python 的 `reverse` 比 JavaScript 的 `reverse` 好用多了...。

## hw5：聯誼順序比大小
>對應之課程內容：ALG101 Unit3.2 最重要的小事：輸入範圍

這題在上課時就有提示到要注意題目的輸入範圍，也常出現在 Slack 和 Spectrum 的討論中。所以有去複習一下 JavaScript 的整數最大範圍（2 的 53 次方 - 1，16位數），了解到 512 位數的數字太大，要以字串的形式來處理。

一開始完成的 if statement code 如下：
```js
// Wrong
if (K === '1') {
  if (A > B || A.length > B.length) {
    console.log('A')
  } else if (B > A || B.length > A.length) {
    console.log('B')
  } else {
    console.log('DRAW')
  }
}

if (K === '-1') {
  if (A < B || A.length < B.length) {
    console.log('A')
  } else if (B < A || B.length < A.length) {
    console.log('B')
  } else {
    console.log('DRAW')
  }
}
```
用 LIOJ 上的測資可以過，但實際上傳到 LIOJ 時就不行。想了很久不知道為什麼，就去觀摩同學的作業。

剛好看到一份解題邏輯相近的作業 [（by cwc329）](https://github.com/Lidemy/mentor-program-4th-cwc329/blob/master/homeworks/week3/hw5.js)，其中寫道：

```js
if ((a.length > b.length) || (a.length === b.length && a > b)) {
  console.log('A');
} else {
  console.log('B');
}
```
於是有樣學樣，修改一下 code 之後送 LIOJ 就過了：

```js
// Accepted
if (K === '1') {
  if ((A > B && A.length === B.length) || A.length > B.length) {
    console.log('A')
  } else if ((B > A && A.length === B.length) || B.length > A.length) {
    console.log('B')
  } else {
    console.log('DRAW')
  }
}

if (K === '-1') {
  if ((A < B && A.length === B.length) || A.length < B.length) {
    console.log('A')
  } else if ((B < A && A.length === B.length) || B.length < A.length) {
    console.log('B')
  } else {
    console.log('DRAW')
  }
}

```
雖然過了但還是有點搞不懂，於是去請教強者我朋友。  
討論後才發現，原來我沒有搞清楚字串是以第一個字元的字典序來依序進行比大小的處理。

也就是說，以 `'10'` 和 `'2'` 為例的話：
```js
'10' > '2' // false
'10' < '2' // true
'10'.length > '2'.length // true
```
想通了之後就知道該這樣寫，結果因為一開始沒搞清楚而卡關，實在是有夠蠢 = =。  
（是說 LIOJ 的測資是不是故意用相同位數的數字 XD）

參考資料：[理解 JavaScript 中物件的比大小行為](https://blog.techbridge.cc/2019/06/16/javascript-obj-compare/?fbclid=IwAR2AjZgVO4BZJ6b0rjrehI2sPiQ_dXesuGXZ58VzzZermfhlRtUwCsRPmGY)

---

## 補充：ESLint 使用心得

先上結論：我覺得有點麻煩 =  =。

我本身所使用的編輯器是 VS Code，一開始也有安裝 ESLint 的套件。原以為這樣在 commit 時不會有太多需要修改之處，沒想到我錯了。第一次 commit 後有兩百多個 errors，整個汗顏。

>被我 disable 的 rules

其中最常出現的是 `linebreak-style`，  
查了一下是涉及到不同作業系統的換行符號之差異。（原來是用 Windows 開發的原罪 =  =）  
不想修也不會修，於是就把這條 rule 給 disable 了。

接下來是 `no-plusplus`，  
查了一下文件知道這是為了避免非預期的錯誤，所以有把程式中的 `result++` 修成 `result += 1`，  
但也因為其實可以 `allowForLoopAfterthoughts`，所以保留 `for loop` 中的 `i++`。

最後是 `eol-last`，  
其實我不知道為什麼 code 的結尾要保留一行，而且我的 VS Code 的 ESLint 套件不讓我在最後多留這一空行 =   =。  
所以這條也被我 disable。

喔對了！`semi` 的部分在看 MTR04 的 ESLint 教學影片時就跟著把分號給補完了，但是說實在我也不知道為什麼要加 XD。
因為 ALPHA Camp 教說依循 [`JavaScript Standard Style`](https://standardjs.com/) 是不用加分號的。

>該認識一下的 ESLint rules

1. `no-param-reassign` -- 出現在 hw2 中，避免對函式中的參數重新賦值而導致錯誤。

    修改前：
    ```js
    function digitsCount(n) {
      if (n === 0) return 1;
      let result = 0;
      while (n !== 0) {
        n = Math.floor(n / 10);
        result += 1;
      }
      return result;
    }
    ```

    修改後：
    ```js
    function digitsCount(n) {
      let m = n;
      if (m === 0) return 1;
      let result = 0;
      while (m !== 0) {
        m = Math.floor(m / 10);
        result += 1;
      }
      return result;
    }
    ```

    基本上的概念就是取自同份作業中的 `isNarcissistic` 函式（因其最後要比較 `sum` 和 `n` 是否相等），  
    以 `m` 來把 `n` 存起來，避免動到 `n`。但是實際上不知道有沒有這個必要就是。

2. `no-else-return` -- 一樣出現在 hw2

    Huli 特別在第三週自我檢討中提到的 rule，但就這個 case 而言我感覺有沒有修改好像差別不大啊 XD。還是說會影響到程式運作的速度呢？

    修改前：
    ```js
        if (sum === n) {
          return true;
        } else {
          return false;
        }
    ```

    修改後：
    ```js
    if (sum === n) {
      return true;
    }
    return false;
    ```




相關資料：  
[linebreak-style](https://eslint.org/docs/rules/linebreak-style)  
[no-plusplus](https://eslint.org/docs/rules/no-plusplus)  
[eol-last](https://eslint.org/docs/rules/eol-last)  
[no-param-reassign](https://eslint.org/docs/rules/no-param-reassign)  
[no-else-return](https://eslint.org/docs/rules/no-else-return)
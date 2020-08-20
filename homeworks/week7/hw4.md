## 什麼是 DOM？

DOM 的全名是 Document Object Model，中文是「文件物件模型」。其在 MDN 上的定義為：

> 『HTML、XML 和 SVG 文件的程式介面。它提供了一個文件（樹）的結構化表示法，並定義讓程式可以存取並改變文件架構、風格和內容的方法。DOM 提供了文件以擁有屬性與函式的節點與物件組成的結構化表示。節點也可以附加事件處理程序，一旦觸發事件就會執行處理程序。本質上，它將網頁與腳本或程式語言連結在一起。』。

簡而言之，DOM 就是把 HTML 給物件模型化。在 DOM 的結構下，HTML 文件中的每個 `tag` 都被視為是物件，且最終會形成一個具有階層關係的樹狀結構。而這樣才能讓程式語言（JavaScript）對其進行操作。

也就是說，瀏覽器提供的 DOM API 就有如橋樑般，讓 JavaScript 能夠與 HTML 連結，彼此方能進行互動。

Reference:  
[文件物件模型 (DOM)](https://developer.mozilla.org/zh-TW/docs/Web/API/Document_Object_Model)  
[Day03-深入理解網頁架構：DOM](https://ithelp.ithome.com.tw/articles/10202689)

## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？

事件傳遞機制：  
當 DOM Event 在運作之時，依順序分為下列三個階段：

1. 捕獲階段（Capture Phase）──  
   DOM Event 從祖先層（window）開始往下尋找目標（target）。
2. 目標階段（Target Phase）──  
   到達目標本身。
3. 冒泡階段（Bubbling Phase）──  
   循著原路回去的過程。

![](https://www.w3.org/TR/DOM-Level-3-Events/images/eventflow.svg)

換言之，  
事件捕獲（event capturing）就是事件由根節點往下傳遞，直至目標節點。  
事件冒泡（event bubbling）則是事件從啟動事件的節點（event.target）開始，逐層往上傳遞。

**重點原則：**

1. 先捕獲，再冒泡。
2. 當事件傳到 target 本身，沒有分捕獲跟冒泡。

Reference:  
[DOM 的事件傳遞機制：捕獲與冒泡](https://blog.techbridge.cc/2017/07/15/javascript-event-propagation/)  
[UI Events](https://www.w3.org/TR/DOM-Level-3-Events/#event-flow)

## 什麼是 event delegation，為什麼我們需要它？

當我們需要針對 DOM 中的**很多個按鈕**，或是**清單中的每一個項目**來進行事件處理的時候，若是直接在**目標本身**掛載監聽器（eventListener），則會設置為數眾多且重複性質的監聽器，這樣除了浪費資源之外，也不易於進行監聽器的維護與刪除。

由於透過 DOM Event Flow 的冒泡機制，我們知道事件會由**目標**一層一層地往上傳遞。因此，我們可以將監聽器設置在**目標的上層元素**
，一樣可以達到監聽事件的效果。

所以，這樣透過父節點來處理子節點之事件的行為就是 event delegation，也就是事件代理（事件委派）。如此一來便無需過多的監聽器，同時也易於動態新增監聽器。

Reference:  
[DOM 的事件傳遞機制：捕獲與冒泡](https://blog.techbridge.cc/2017/07/15/javascript-event-propagation/)  
[Event Delegation — 事件委派介紹 與 觸發委派的回呼函數](https://medium.com/@realdennis/event-delegation-%E4%BA%8B%E4%BB%B6%E5%A7%94%E6%B4%BE%E4%BB%8B%E7%B4%B9-%E8%88%87-%E8%A7%B8%E7%99%BC%E5%A7%94%E6%B4%BE%E7%9A%84%E5%9B%9E%E5%91%BC%E5%87%BD%E6%95%B8-2990921a5ba2)

## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？

`event.preventDefault()` 為"**取消預設行為**"，**跟事件傳遞沒有任何關係**。

最常見用來阻止超連結：

HTML

```HTML
<a id="clickMe" href="https://ithelp.ithome.com.tw/articles?tab=tech">跳到鐵人幫幫忙</a>
```

JavaScript

```JavaScript
document.getElementById('clickMe').onclick = () =>{
  event.preventDefault()
}
```

加上 `event.preventDefault()` 後，當點擊超連結之時，並不會去執行其預設的行為（跳轉至特定網頁）。

---

`event.stopPropagation()` 為"**取消事件傳遞**"，讓事件不再往下傳遞。

利用簡易的 model 來觀察 DOM event 的捕獲與冒泡機制，可發現點擊子元素時，事件會冒泡至上層元素。

CodePen 連結：[DOM Event - bubbling demo](https://codepen.io/alpha-camp/pen/zyPyqa)

JavaScript

```JavaScript
const grandpa = document.querySelector('.grandpa')
const parent = document.querySelector('.parent')
const child = document.querySelector('.child')

// bubbling
child.addEventListener('click', function (event) {
  console.log('child is clicked!')
  console.log(this)
  console.log(event.target)
  child.append('click!')
})

parent.addEventListener('click', function (event) {
  console.log('parent is clicked!')
  console.log(this)
  console.log(event.target)
  parent.append('click!')
})

grandpa.addEventListener('click', function (event) {
  console.log('grandpa is clicked!')
  console.log(this)
  console.log(event.target)
  grandpa.append('click!')
})

```

示意圖：  
![](https://i.imgur.com/j35aBr0.png)

--

當在中間層加入 `event.stopPropagation()` 後，可觀察到事件無法繼續傳遞至外層（父層元素）。

CodePen 連結：[DOM Event - stopPropagation demo](https://codepen.io/alpha-camp/pen/xmPBpp)

JavaScript

```JavaScript
parent.addEventListener('click', function (event) {
  // stop propagation
  event.stopPropagation()
  console.log('parent is clicked!')
  console.log(this)
  console.log(event.target)
  parent.append('click!')
})
```

示意圖：  
![](https://i.imgur.com/dK6VYIM.png)

Reference:  
[DOM 的事件傳遞機制：捕獲與冒泡](https://blog.techbridge.cc/2017/07/15/javascript-event-propagation/)  
[[筆記][JavaScript]所謂的「停止事件」到底是怎麼一回事？](https://ithelp.ithome.com.tw/articles/10198999)

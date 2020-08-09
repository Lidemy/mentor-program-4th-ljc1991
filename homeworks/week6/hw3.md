## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。

1. `<article>`：用來標記特定之獨立的內容區塊，常用在論壇、blog、新聞等的貼文。
2. `<aside>`：用來標記網頁主內容以外的其他相關資訊，如：側邊欄（sidebar）。
3. `<blockquote>`：用來標記引用自其他來源之特定區塊。

reference:  
[HTML Element Reference](https://www.w3schools.com/tags/)

## 請問什麼是盒模型（box modal）

盒模型（box model）的意思是指每一個 `HTML` 的元素在瀏覽器中都會被視為是一個具有寬度和高度的"盒子"，這個盒子代表 `HTML` 元素實際占用的空間，進而可以針對盒子本身去進行所欲的調整。

在 box model 中，有三個基本的屬性：  
`border`：代表盒子的邊界。  
`padding`：從盒子的內容到邊界之間的距離（內距）。  
`margin`：從盒子的邊界到周圍其他盒子的邊界之間的距離（外距）。

## 請問 display: inline, block 跟 inline-block 的差別是什麼？

`display: inline`：`inline` 元素類似自然流動的文字，它占用的空間由內容決定，後面的元素會緊鄰在後。無法隨意控制 `inline` 元素的寬度和高度。

`display: block`：`block` 元素預設會占用整個容器的寬度，使相鄰元素被擠到下一行。

`display: inline-block`：`inline-block` 元素 以 `inline` 方式排版，但具有 `block` 屬性。這表示 `inline-block` 元素不會占用整個水平空間，而是可以彼此相鄰。

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？

`position: static`：預設的定位方式。

`position: relative`：相對定位，該 `HTML` 元素會以**原本排版的地方**作為參考點來進行相對地移動，且不會影響到其他元素的定位位置。

`position: absolute`：絕對定位，該 `HTML` 元素會以往上找所找到的**第一個不是 `position: static` 的元素**作為參考點來進行定位。  
（若往上找找不到 `position: static` 的元素，則會以 `body` 作為參考點來進行定位）。

`position: fixed`：固定定位，該 `HTML` 元素會相對於 viewport 來定位。當網頁捲動時，該 `HTML` 元素會固定在瀏覽器畫面中的一特定處。

reference:  
[學習 CSS 版面配置 ── 關於 position 屬性](https://zh-tw.learnlayout.com/position.html)  
[前端新手村 Position 定位](https://ithelp.ithome.com.tw/articles/10194075)

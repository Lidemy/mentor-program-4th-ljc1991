## 什麼是 Ajax？

AJAX 是「Asynchronous JavaScript and XML」的簡稱，其中文翻譯為「非同步的 JavaScript 與 XML 技術」。

在說明非同步之前，要先來說明什麼是同步：

- 同步請求（Synchronous request）： 客戶端（client）對伺服器端（server）送出 request ，並且在收到伺服器端的 response 之後才會繼續下一步的動作，等待的期間無法處理其他事情。這個作法並不理想，因為通常伺服器端的運算速度比本地電腦慢上好幾倍。
- 非同步請求（Asynchronous request）：客戶端對伺服器端送出 request 之後，不需要等待結果，仍可以持續處理其他事情，甚至繼續送出其他 request。Responese 傳回之後，就被融合進當下頁面或應用中。

因此，藉由 AJAX，使用者能夠非同步地和伺服器交換資料，提升資料交換的速度與效率，且不必重新載入頁面。  
（早期所使用的資料格式為 XML，而現今則是 JSON 較被廣泛使用，但仍不改其非同步交換資料的本質。）

Reference:  
[AJAX -- Wiki](https://zh.wikipedia.org/wiki/AJAX)  
[AJAX -- MDN](https://developer.mozilla.org/zh-TW/docs/Web/Guide/AJAX)  
[[JS] AJAX 筆記](https://medium.com/%E9%A6%AC%E6%A0%BC%E8%95%BE%E7%89%B9%E7%9A%84%E5%86%92%E9%9A%AA%E8%80%85%E6%97%A5%E8%AA%8C/js-ajax-%E7%AD%86%E8%A8%98-b9a57976fa60)  
[輕鬆理解 Ajax 與跨來源請求](https://blog.techbridge.cc/2017/05/20/api-ajax-cors-and-jsonp/)

## 用 Ajax 與我們用表單送出資料的差別在哪？

- 表單：  
  利用表單來送 request 到 server，server 回傳 response 之後直接由瀏覽器來重新 render 出頁面。
- AJAX：  
  發出 request 到 server 之後，回傳的 response 是交給 JavaScript 來處理，不需要重新載入網頁。

## JSONP 是什麼？

JSONP 是「JSON with Padding」的簡稱，其為一種能夠突破同源政策來進行跨來源請求之資料交換的方法。

簡言之，由於瀏覽器的同源政策會限制不同的網域來源其無法進行資料存取。舉例來說，位於 `server1.example.com` 的網頁無法與 `server2.example.com` 的伺服器溝通。然而，有些 HTML 的 `tag` 是不受到同源政策影響的，例如：`<img>`、`<script>`、`<video>`…等等。

因此，利用 `<script>` 元素的這個開放策略，網頁可以得到從其他來源動態產生的 JSON 資料，而這種使用模式就是所謂的 JSONP。

Reference:  
[同源政策 (Same-origin policy) -- MDN](https://developer.mozilla.org/zh-TW/docs/Web/Security/Same-origin_policy)  
[同源策略 -- Wiki](https://zh.wikipedia.org/wiki/%E5%90%8C%E6%BA%90%E7%AD%96%E7%95%A5)  
[JSONP -- Wiki](https://zh.wikipedia.org/wiki/JSONP)

## 要如何存取跨網域的 API？

想要進行跨網域的資料傳輸與存取，需遵行 **CORS** 這個規範。CORS，全名為 Cross-Origin Resource Sharing，中文為跨來源資源共享。

這套規範跟你說，如果你想開啟跨來源 HTTP 請求的話，Server 必須在 Response 的 Header 裡面加上 `Access-Control-Allow-Origin`（其決定哪些來源可以存取該 Server）。  
因此，如果你想要發起跨來源 HTTP 請求並且順利收到回應的話，需要確保 Server 端有加上 `Access-Control-Allow-Origin`，不然 Response 會被瀏覽器給擋下來並且顯示出錯誤訊息。

Reference:  
[輕鬆理解 Ajax 與跨來源請求](https://blog.techbridge.cc/2017/05/20/api-ajax-cors-and-jsonp/)  
[跨來源資源共用（CORS） -- MDN](https://developer.mozilla.org/zh-TW/docs/Web/HTTP/CORS)  
[原來 CORS 沒有我想像中的簡單](https://blog.techbridge.cc/2018/08/18/cors-issue/)

## 為什麼我們在第四週時沒碰到跨網域的問題，這週卻碰到了？

因為第四週是用 Node.js 來串 API，而本週是透過瀏覽器來串 API，跨網域的限制是由於瀏覽器為了安全性的緣故而來進行限制的。
只要不是透過瀏覽器來串 API 就不會遇到跨網域之限制的問題。

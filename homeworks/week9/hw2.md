## 資料庫欄位型態 VARCHAR 跟 TEXT 的差別是什麼

在 MySQL 中，VARCHAR 和 TEXT 都是用來儲存文字類型資料的型態，且兩者的最大長度限制皆為 65,535 bytes。

兩者的不同之處在於：

- VARCHAR 可以給預設值，TEXT 沒辦法給預設值。
- VARCHAR 建索引可不指定索引長度，但 TEXT 一定要指定長度。

Reference:  
[MySQL VARCHAR 最大長度限制(maximum length)](https://matthung0807.blogspot.com/2019/06/mysql-varcharmaximum-length.html)  
[MySQL TEXT 長度限制(maximum length)](https://matthung0807.blogspot.com/2019/06/mysql-textmaximum-length.html)  
[[Mysql] 資料型態 int, float, double, text, char, varchar, blob 大小](http://n.sfs.tw/content/index/10266)

## Cookie 是什麼？在 HTTP 這一層要怎麼設定 Cookie，瀏覽器又是怎麼把 Cookie 帶去 Server 的？

Cookie 是能夠讓網站辨別用戶身分的一種儲存於用戶端的資料，其類型為小型文字檔案。

在收到 request 之後，Server 會在回傳 response 時在 header 中設置 `Set-Cookie`，使得瀏覽器得以設置 Cookie 並儲存。  
之後，當瀏覽器發送 request 給相同的 Server 之時，就會在 request header 中代入 Cookie。

Reference:  
[Cookie -- Wiki](https://zh.wikipedia.org/wiki/Cookie)  
[HTTP cookies -- MDN](https://developer.mozilla.org/zh-TW/docs/Web/HTTP/Cookies)  
[什麼是 Cookie？如何管理 Cookie，防範網路隱私外洩?](https://blog.trendmicro.com.tw/?p=63387)  
[白話 Session 與 Cookie：從經營雜貨店開始](https://medium.com/@hulitw/session-and-cookie-15e47ed838bc)

## 我們本週實作的會員系統，你能夠想到什麼潛在的問題嗎？

在完成本週的留言板與會員系統後，我注意到的資安問題只有一個，就是使用者密碼會被明文地儲存於資料庫中。

而因為已經看完第十一週的課程內容，所以知道留言板還會有 XSS、SQL injection，以及使用者權限等相關的資安問題。  
簡單來說，所有來自 Client 端的資料都不可相信，所以要做好相關的準備（特殊字元跳脫、prepare statement 等）來避免被 Client 端惡意進行 code injection 而改變程式原本的功能。

Reference:  
[前端三十｜ 29. [WEB] 網站常見的資安問題有哪些？](https://medium.com/schaoss-blog/%E5%89%8D%E7%AB%AF%E4%B8%89%E5%8D%81-29-web-%E7%B6%B2%E7%AB%99%E5%B8%B8%E8%A6%8B%E7%9A%84%E8%B3%87%E5%AE%89%E5%95%8F%E9%A1%8C%E6%9C%89%E5%93%AA%E4%BA%9B-bc47b572d94d)

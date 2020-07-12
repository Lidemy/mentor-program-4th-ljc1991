## 請以自己的話解釋 API 是什麼

API 是 Application Programming Interface 的縮寫，中文是「應用程式介面」。  
簡單來說，API 就是擔任應用程式之間溝通的橋樑，提供一個具有共同的規範之**介面**來讓資料可以被處理運用，進而令使用者可以交換資料。

## 請找出三個課程沒教的 HTTP status code 並簡單介紹

1. `303 See Other`：對應 Request 的 Response 可以在另一個 URI 上使用 GET Method 來被找到。
2. `307 Temporary Redirect`：臨時的重定向。與 HTTP 302 有所區別的地方在於，收到 HTTP 307 後，客戶端應保持請求方法不變來向新的 URL 發出請求。
3. `451 Unavailable For Legal Reasons`：該存取因法律的要求而被拒絕，當使用者請求存取某個（經政府審核等查核方法所認定）不合法的來源時，就會顯示這個錯誤代碼。

Reference:

1. [HTTP 狀態碼 - Wiki](https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81)
2. [HTTP 狀態碼 - MDN](https://developer.mozilla.org/zh-TW/docs/Web/HTTP/Status)
3. [HTTP 狀態碼 302、303、307 區別](https://www.itread01.com/content/1520005094.html)
4. [URI - Wiki](https://zh.wikipedia.org/wiki/%E7%BB%9F%E4%B8%80%E8%B5%84%E6%BA%90%E6%A0%87%E5%BF%97%E7%AC%A6)

## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

|       說明       | Method |       path       |                          參數                           |          範例          |
| :--------------: | :----: | :--------------: | :-----------------------------------------------------: | :--------------------: |
| 獲得所有餐廳資料 |  GET   |   /restaurants   |                \_limit: 限制回傳資料數量                | /restaurants?\_limit=5 |
| 獲得單一餐廳資料 |  GET   | /restaurants/:id |                           無                            |     /restaurants/5     |
|   刪除餐廳資料   | DELETE | /restaurants/:id |                           無                            |           無           |
|   新增餐廳資料   |  POST  |   /restaurants   | name: 餐廳名稱, address: 餐廳地址, tel: 餐廳電話 ...etc |           無           |
|   更改餐廳資料   | PATCH  | /restaurants/:id | name: 餐廳名稱, address: 餐廳地址, tel: 餐廳電話 ...etc |           無           |

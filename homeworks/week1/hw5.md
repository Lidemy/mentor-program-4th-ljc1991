## 請解釋後端與前端的差異。

簡單來說，前端（Front-end）就是使用者看得到的部分，負責與使用者進行互動；  
而後端（Back-end）則是使用者看不到的部分，負責進行資料處理與控制輸出。 

就使用者瀏覽網頁而言，  
前端就是使用者操作瀏覽器時與網頁的互動，這部分主要是靠前端三兄弟（HTML、CSS、JavaScript）來進行。  
後端則是使用者操作網頁時，為了滿足使用者的需求而在背後所進行的數據運算以及資料處理等，這部分則大多是由各種程式語言與其所對應的框架，以及資料庫等等來負責。

有圖有真相：
![](https://content.altexsoft.com/media/2020/01/word-image-67.png)

## 假設我今天去 Google 首頁搜尋框打上：JavaScript 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。

1. 瀏覽器透過作業系統，令硬體設備中的網路卡送出「搜尋 JavaScript」的 Request。
2. Request 被 Google 伺服器（server）接收後，由資料庫（database）來進行運算與處理，接著回傳包含有相關搜尋結果的 Response。
3. Response 傳回至網路卡，最後經由瀏覽器 render 後，呈現出我們所看到之含有搜尋結果的網頁。

有圖有真相：
![](https://miro.medium.com/max/1266/1*VGO2Stzs2rzpEDX7aHlkrQ.png)

## 請列舉出 3 個「課程沒有提到」的 command line 指令並且說明功用
> Windows 10 CMD 為例
1. 系統版本系列：  
    `set` -- 顯示、設定或移除 Windows 環境變數。  
    `ver` -- 顯示 Windows 版本。
2. 日期時間系列：  
    `date` -- 顯示或設定日期。  
    `time` -- 顯示或設定系統時間。
3. 操作方面系列：  
    `cmd` -- 開始新的 Windows 命令直譯器（命令提示字元）。  
    `cls` -- 清除螢幕。  
    `exit` -- 結束命令直譯器。 

>在 Windows 作業系統下，Git Bash 中能用的指令在 CMD 中不一定能用…  
>Windows 和 MacOS / Linux 真的差好多…  
>結論：~~買MacBook~~

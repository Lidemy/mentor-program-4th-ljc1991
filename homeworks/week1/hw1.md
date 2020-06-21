## 交作業流程

> 以下流程預設使用者已於電腦中安裝 `git` 等相關軟體。

#### 首先，要先有一個檔案庫—
1. 點擊 [GitHub Classroom](https://classroom.github.com/a/SbDvk2VA)，在 **GitHub** 上生成屬於自己的檔案庫（**Repository**，簡稱 **repo**）。

2. 開啟 **Git Bash**，將在 **GitHub** 上的 **repo** （下稱 **Remote repo**）抓下來至使用者電腦中（生成 **Local repo**）。
  
    `git clone https://github.com/Lidemy/mentor-program-4th-UserName.git `

3. 切換至 **Local repo** 的資料夾。

    `cd mentor-program-4th-UserName`

4. 新開一個分支（branch）並切換至該分支底下（下以`week1`為例），接著進到`homeworks`資料夾中來進行作業的撰寫。

    `git branch week1`  
    `git checkout week1`  
    或是  
    `git checkout -b week1  // -b: branch`

#### 接下來，完成*當週所有作業以及自我檢討*之後—
5. 將完成的作業移入 **staging area**（暫存變更）。

    `git add hw1.md  // 一次加入一個檔案`  
    或是  
    `git add .  // 將資料夾中所有檔案一次加入`

6. 新建一個版本（提交變更），並留下相關說明。  

    `git commit -m "week1 HM done"  // -m: messenger`  
    或是  
    `git commit -am "week1 HM done"  // -a: all`

    >註：`git commit -am` 不會把 new file 加到 staging area。

7. 將 **Local repo** 推送至 **Remote repo**。

    `git push origin week1`

8. 在 **Remote repo** 中點選`Compare & pull request`，填入相關訊息之後`Create pull request`。

9. 至學習系統的 [作業列表](https://learning.lidemy.com/homeworks) 提交 PR（pull request）連結。

10. 待助教批改完畢後，助教會點選`merge`將 **Remote repo** 中的 `week1` branch 合併至 **master** branch 之中。 

11. 將批改完的 **Remote repo** 抓下來（令 **Local repo** 與 merge 之後的 **Remote repo** 同步）。

    `git checkout master  // 確認切換到 master 底下`  
    `git pull origin master`

12. 與 **Remote repo** 同步之後，即可將使用者電腦中`week1`這個 branch 刪除，便完成當週作業繳交。

    `git branch -d week1`

#### 流程結束
---
#### Note: 與課綱同步
1. 完成作業後，確認 **Local repo** 在 **master** 底下。  
  （若是在寫作業時想要執行同步，須把所有改動先 commit 再執行同步，但不建議這樣做。）

    以`git status`來確認，須顯示：
    ```
    On branch master
    Your branch is up to date with 'origin/master'.
    nothing to commit, working tree clean
    ```

2. 將最新的課綱抓下來（令 **Local repo** 與遠端課綱同步）。

    `git pull https://github.com/Lidemy/mentor-program-4th.git master`

3. 將同步後的 **Local repo** 推送至 **Remote repo**。

    `git push origin master`
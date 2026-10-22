# 湖中女人

向湖中女神祈求恩賜的互動小網站。純 HTML、CSS、JavaScript，不需要任何付費服務，可直接放在 GitHub Pages。

## 檔案結構

```
index.html          ← 首頁（第一頁故事＋第二頁召喚都在這個檔案）
data.js             ← 金色物品、吉祥物表情、隨機標語的資料
images/
  lake-bg.webp      ← 湖泊背景
  goddess.webp      ← 女神
  goddess-blur.webp ← 女神朦朧版（故事開場用）
  items/            ← 金色物品圖片（目前 24 張）
  mascot/           ← 吉祥物表情圖片（目前 9 張）
fonts/              ← 思源黑體（Noto Sans TC，SIL OFL 開源授權）與授權說明
```

## 1. 哪個檔案是首頁

`index.html`。

## 2. 吉祥物圖片在哪裡

`images/mascot/`。

| 表情 | 檔名 |
|---|---|
| 開心 | mascot-happy.webp |
| 歡樂 | mascot-joyful.webp |
| 震驚 | mascot-shocked.webp |
| 傷心 | mascot-sad.webp |
| 憤怒 | mascot-angry.webp |
| 呆住 | mascot-dazed.webp |
| 哀怨（也是平常的祈求姿勢） | mascot-plaintive.webp |
| 戀愛 | mascot-love.webp |
| 無奈 | mascot-helpless.webp |

## 3. 金色物品圖片在哪裡

`images/items/`，檔名以 `item-01` 到 `item-24` 編號。

## 4. 如何修改隨機標語

1. 在 GitHub 打開 `data.js`，按右上角鉛筆圖示編輯。
2. 找到 `slogans:` 清單，直接修改引號裡的文字。
3. 新增一句時，照現有格式寫一行，例如：`"這是新的標語。",`
4. 按「Commit changes」儲存，約 1 到 3 分鐘後網站更新。

注意：引號和逗號要用英文半形符號 `"` 和 `,`。

## 5. 如何增加新的金色物品（例如第 25 項「新月」）

1. 準備透明背景的圖片，建議正方形、WebP 格式，例如 `item-25-moon.webp`。
2. 上傳到 `images/items/` 資料夾。
3. 編輯 `data.js`，在 `items:` 清單最後一項的行尾加逗號，再加入：
   `{ name: "新月", src: "images/items/item-25-moon.webp" }`
4. 儲存。所有物品會自動維持等機率。

## 6. 如何增加吉祥物表情

1. 準備透明背景圖片，尺寸 360 × 413，角色腳底位置與現有圖片一致，切換時才不會跳動。
2. 上傳到 `images/mascot/` 資料夾。
3. 編輯 `data.js`，在 `expressions:` 清單加入一行，例如：
   `{ name: "害羞", src: "images/mascot/mascot-shy.webp" },`
4. 儲存。

## 7. 如何上傳到 GitHub Pages

1. 註冊並登入 GitHub（免費）。
2. 右上角「+」→「New repository」，名稱例如 `lake-woman`，選「Public」，建立。
3. 上傳檔案，保持資料夾結構不變：
   - **用電腦**：在 repository 頁面選「uploading an existing file」，把解壓縮後資料夾「裡面的所有東西」一次拖進去，再按「Commit changes」。
   - **只用手機**：GitHub 手機網頁一次只能把檔案放進目前所在的資料夾，需要分次上傳：
     1. 在最外層上傳 `index.html`、`data.js`、`README.md`。
     2. 選「Add file」→「Create new file」，檔名輸入 `images/x.txt` 建立資料夾，儲存後進入 `images`，上傳 `lake-bg.webp`、`goddess.webp`、`goddess-blur.webp`。
     3. 用同樣方式建立 `images/items/`、`images/mascot/`、`fonts/`，再分別進去上傳對應檔案。
     4. 最後刪除剛才建立的 `x.txt`（可不刪，不影響網站）。
4. 進入 repository 的「Settings」→ 左側「Pages」。
5. 「Source」選「Deploy from a branch」，Branch 選「main」、資料夾選「/ (root)」，按「Save」。
6. 等 1 到 3 分鐘，頁面上方會出現網址，格式為：
   `https://你的帳號.github.io/lake-woman/`

## 其他說明

- **字體**：`fonts/` 只保留網站目前用到的字。新增標語時若出現新字，會以手機內建黑體顯示，外觀接近但不完全相同。
- **音效**：使用瀏覽器內建合成音，不需要音效檔，預設靜音。
- **字體授權**：思源黑體採 SIL Open Font License 1.1，允許免費使用、商用及隨網站散布，授權全文見 `fonts/LICENSE-NotoSansCJK.txt`。

/* =============================================================
   《湖中女人》資料設定檔
   這個檔案集中管理：金色物品、吉祥物表情、隨機標語。
   三個資料池各自獨立、等機率抽取，彼此沒有關聯。

   ── 如何修改標語 ──
   在下方 slogans 清單裡改文字即可。每句前後要有英文雙引號 " "，
   句尾要有英文逗號 , （最後一句可以不加）。

   ── 如何增加金色物品 ──
   1. 把透明背景的圖片（建議 WebP，正方形）放進 images/items/ 資料夾。
   2. 在 items 清單最後加一行，例如：
      { name: "新月", src: "images/items/item-25-moon.webp" },

   ── 如何增加吉祥物表情 ──
   1. 把透明背景圖片放進 images/mascot/ 資料夾。
      圖片尺寸請與現有表情相同（360 × 413），角色腳底位置一致，
      切換時才不會跳動。
   2. 在 expressions 清單最後加一行，例如：
      { name: "害羞", src: "images/mascot/mascot-shy.webp" },
   ============================================================= */

window.LAKE_DATA = {

  /* 資料池 A：金色物品（目前 24 種，每種機率 1/24） */
  items: [
    { name: "蟑螂",         src: "images/items/item-01-cockroach.webp" },
    { name: "大便",         src: "images/items/item-02-poop.webp" },
    { name: "紅薯",         src: "images/items/item-03-sweet-potato.webp" },
    { name: "金魚",         src: "images/items/item-04-goldfish.webp" },
    { name: "摩托車",       src: "images/items/item-05-motorcycle.webp" },
    { name: "讚手勢",       src: "images/items/item-06-thumbs-up.webp" },
    { name: "標準拼圖",     src: "images/items/item-07-puzzle.webp" },
    { name: "蘋果",         src: "images/items/item-08-apple.webp" },
    { name: "發糕",         src: "images/items/item-09-fa-gao.webp" },
    { name: "花",           src: "images/items/item-10-flower.webp" },
    { name: "毒藥",         src: "images/items/item-11-poison.webp" },
    { name: "骨頭",         src: "images/items/item-12-bone.webp" },
    { name: "劍",           src: "images/items/item-13-sword.webp" },
    { name: "飛鏢",         src: "images/items/item-14-darts.webp" },
    { name: "三角內褲",     src: "images/items/item-15-briefs.webp" },
    { name: "盾牌",         src: "images/items/item-16-shield.webp" },
    { name: "弓箭",         src: "images/items/item-17-bow-arrow.webp" },
    { name: "鉛筆",         src: "images/items/item-18-pencil.webp" },
    { name: "錢",           src: "images/items/item-19-money.webp" },
    { name: "炸藥",         src: "images/items/item-20-dynamite.webp" },
    { name: "小提琴",       src: "images/items/item-21-violin.webp" },
    { name: "有椅背的塑膠椅", src: "images/items/item-22-plastic-chair.webp" },
    { name: "墨鏡",         src: "images/items/item-23-sunglasses.webp" },
    { name: "皇冠",         src: "images/items/item-24-crown.webp" }
    // 第 25 項「新月」：圖片準備好後，在上一行行尾加逗號，再加入：
    // { name: "新月", src: "images/items/item-25-moon.webp" }
  ],

  /* 資料池 B：吉祥物表情（9 種，每種機率 1/9） */
  expressions: [
    { name: "開心", src: "images/mascot/mascot-happy.webp" },
    { name: "歡樂", src: "images/mascot/mascot-joyful.webp" },
    { name: "震驚", src: "images/mascot/mascot-shocked.webp" },
    { name: "傷心", src: "images/mascot/mascot-sad.webp" },
    { name: "憤怒", src: "images/mascot/mascot-angry.webp" },
    { name: "呆住", src: "images/mascot/mascot-dazed.webp" },
    { name: "哀怨", src: "images/mascot/mascot-plaintive.webp" },
    { name: "戀愛", src: "images/mascot/mascot-love.webp" },
    { name: "無奈", src: "images/mascot/mascot-helpless.webp" }
  ],

  /* 吉祥物平常與召喚中的「祈求姿勢」 */
  prayPose: "images/mascot/mascot-plaintive.webp",

  /* 資料池 C：隨機標語（25 句，每句機率 1/25） */
  slogans: [
    "命運的齒輪，偷偷轉了一格。",
    "女神微笑了，但原因不明。",
    "湖水知道一些你不知道的事。",
    "這份恩賜，連女神都沒預料到。",
    "你的命運，似乎有點不太對勁。",
    "女神說，這已經是最好的了。",
    "恭喜你，至少不是空氣。",
    "你的運氣，成功引起女神注意。",
    "女神已讀了你的願望，然後裝死。",
    "這不是垃圾，這是命運的安排。",
    "一個人會迷路，一群人會走歪。",
    "寶物可以沒有，隊友不能丟。",
    "最好的戰利品，是一起胡鬧的夥伴。",
    "我們不一定最強，但一定最吵。",
    "有福一起享，有雷一起扛。",
    "今天可以輸，但氣勢不能輸！",
    "再小的勇氣，也能改變戰局。",
    "跌倒沒關係，記得爬起來開盾。",
    "只要還有隊友，就還有機會。",
    "真正的強者，連倒楣都很有氣勢。",
    "女神建議你，今天先不要做決定。",
    "你很特別，女神也不知道怎麼形容。",
    "這個結果，建議不要告訴別人。",
    "女神原本想祝福你，後來想想算了。",
    "別懷疑，這真的是隨機的。"
  ]
};

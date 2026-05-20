# my-classroom-tools

班級互動工具總專案。

## 入口

- GitHub Pages：https://oxsum324.github.io/my-classroom-tools/
- 工具目錄：`tools/`
- 專案藍圖：`AGENTS.md`
- Obsidian 工作筆記：`my-classroom-tools/工作筆記.md`

## 工具

- [座標獵人](https://oxsum324.github.io/my-classroom-tools/tools/coordinate-hunter/)

## Firebase

- Firebase project：`my-work-tools-c7a5a`
- 共用前端模組：`firebase-client.js`
- 已開放 Firestore collections：`wordcloud_words`、`game_scores`

工具頁可用以下方式連接 Firestore：

```html
<script type="module">
  import {
    addDoc,
    classroomCollection,
    firestoreCollections,
    serverTimestamp
  } from "../../firebase-client.js";

  await addDoc(classroomCollection(firestoreCollections.gameScores), {
    classCode: "demo",
    seatNo: "01",
    score: 100,
    createdAt: serverTimestamp()
  });
</script>
```

## 原則

- 學生資料去識別化。
- 每個工具獨立放在 `tools/<工具名>/`。
- 新增 Firestore collection 時先寫 Security Rules。

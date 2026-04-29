# my-classroom-tools — 我的班級工具總專案

## 對話開始時請先讀

進度與最近更動都在 Obsidian：`my-classroom-tools/工作筆記.md`

## 工作模式

- **加新工具**：對 Codex 說「我想做一個 XXX 工具」，Codex 會建立 `tools/<工具名>/` 子資料夾，並依班級工具模式開發、測試、上線。
- **結束工作**：對 Codex 說「收工」，Codex 會更新 Obsidian 工作筆記，並執行 `~/codex-tools/shutdown.ps1` 進行 commit + push。
- **接續工作**：對 Codex 說「讀工作筆記、告訴我上次做到哪」，Codex 會從 Obsidian 駕駛艙恢復上下文。

## 工作桌 + 三個家

- GDrive 工作桌：`G:\我的雲端硬碟\my-classroom-tools\`
- GitHub repo：`oxsum324/my-classroom-tools`（公開）
- Obsidian 駕駛艙：`my-classroom-tools/工作筆記.md`
- Firebase 專案：`my-work-tools-c7a5a`

## 「收工」觸發規則

當使用者說「收工」、「結束了」、「準備換電腦」、「該同步的同步」、「先到這裡」等收尾語時，請依照以下 SOP 執行：

1. 從對話歷史摘要今天做了什麼：完成檔案、決策、新坑。
2. 找到工作目錄與對應的 Obsidian 工作筆記：`my-classroom-tools/工作筆記.md`。
3. 更新 Obsidian 工作筆記：
   - 「上次做到哪」段：最後動作、完成檔案、對話脈絡。
   - 「最近更動紀錄」表格加一行：日期 + 摘要 + GDrive / Obsidian / GitHub 狀態。
   - 「踩坑筆記」記錄新坑與解法。
4. 執行：

```powershell
powershell -ExecutionPolicy Bypass -File "$HOME/codex-tools/shutdown.ps1" "<今天工作摘要>"
```

5. 回報三方同步狀態。

不該做：

- 不要對沒實質進度的對話跑同步。
- 不要把 `.claude/`、`.codex/` commit 進 repo。
- 不要用「更新」、「修改」這種沒有資訊量的 commit 訊息。

## 工具清單

- `tools/coordinate-hunter/`：座標獵人，座標平面找點與讀點練習。

## 工作注意事項

- 學生資料一律去識別化，只使用座號 + 班級代號。
- commit 訊息要寫清楚做了什麼與為什麼。
- 新增 Firestore collection 時，同步更新 `firestore.rules` 白名單。
- 收工前說「收工」，讓 Codex 同步 GDrive、Obsidian、GitHub。

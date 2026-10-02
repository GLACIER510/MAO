# 毛先生 · 学习领航

[打开网站](https://mao-study-guide.ample-reed-3188.chatgpt.site)

手机和电脑均可访问。站点按个人权限部署，使用站点所属ChatGPT账号登录。点击右上角钥匙按钮，输入DeepSeek密钥并检查连接。密钥只在当前页面会话使用，不进入浏览器持久存储或学习记录。

## 完整源码快照

本仓库保存当前上线版本的完整源码、目录结构、锁文件和原页图片。为适配网页编辑器，源码压缩包保存为4个Base64文本片段，附有恢复脚本。

运行以下命令恢复。Node.js至少22.13，解压命令适用于Windows PowerShell。

```powershell
node restore-source.mjs
Expand-Archive -LiteralPath mao-study-source.zip -DestinationPath source
cd source
npm run install:ci
npm run dev
```

快照对应上线源提交1da07ec6a8b817915c76987d1d83883f1e1e6ba8，恢复脚本校验SHA-256。后续取得插件仓库写入权限后，可把代码展开到仓库根目录进行常规版本管理。

## 功能与范围

一起读、想一件事、回头看三种互动，DeepSeek官方API实时对话，本机记录保存、恢复与Markdown下载。未连接密钥时提供明确标出的固定引导练习。

已核对12页，选取8个学习主题，提供原页及PDF与书内页码。表达采用毛泽东作品风格，现代应用与历史原文分别标明，不能代替阅读全文。

默认模型deepseek-flash，依据[DeepSeek官方文档](https://api-docs.deepseek.com/zh-cn/)，谈话按用户账户计费。

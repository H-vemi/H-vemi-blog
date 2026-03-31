# H-vemi Blog

> 我的个人博客 — 生活 · 技术 · 摄影

🌐 在线访问: https://H-vemi.github.io/H-vemi-blog

---

## 📖 博客内容

- 🌿 **生活** — 日常随笔、旅行日记、生活感悟
- 💻 **技术** — 编程心得、工具分享、项目记录
- 📷 **摄影** — 作品展示、拍摄技巧、后期分享

---

## 🚀 本地运行

直接用浏览器打开 `index.html` 即可：

```bash
# macOS
open index.html

# Windows
start index.html

# Linux
xdg-open index.html
```

---

## 🔧 部署

本博客使用纯静态 HTML/CSS/JS，可部署到：

- **GitHub Pages** — 免费，全球可访问
- **Vercel** — 免费，自动部署
- **Netlify** — 免费，拖拽即部署
- 任意 Web 服务器

### 部署到 GitHub Pages

1. 进入仓库 Settings → Pages
2. Source 选择 `main` 分支
3. 访问 `https://H-vemi.github.io/H-vemi-blog`

---

## 📝 添加文章

在 `index.html` 的 `<section class="latest-posts">` 中添加新的 `<article class="post-card">`：

```html
<article class="post-card">
    <div class="post-image" style="background: linear-gradient(...)">
        <span class="post-category">分类</span>
    </div>
    <div class="post-content">
        <h3 class="post-title">文章标题</h3>
        <p class="post-excerpt">文章摘要...</p>
        <div class="post-meta">
            <span class="post-date">2026-03-31</span>
            <span class="read-time">5 分钟阅读</span>
        </div>
    </div>
</article>
```

---

## 📁 项目结构

```
H-vemi-blog/
├── index.html     # 主页面
├── style.css      # 样式表
├── script.js      # 交互脚本
└── README.md      # 说明文档
```

---

© 2026 H-vemi | Made with ❤️

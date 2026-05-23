# MMing 的个人网站

这是一个静态个人主页 / 个人博客项目，用来记录 MMing 学习 AI、编程和前端基础的过程。

这个网站不是工作简历，也不是商业项目展示。它更像一个学习档案，用来放个人介绍、技能练习、学习项目和博客文章。

## 当前技术栈

这个项目只使用：

- HTML：负责页面内容和结构。
- CSS：负责页面样式、卡片布局、手机端适配和深色模式颜色。
- JavaScript：负责浅色 / 深色模式切换。

这个项目不使用：

- React
- Vue
- Next.js
- Node 后端
- 数据库
- 构建工具

所以它很适合部署到 GitHub Pages。

## 文件结构

```text
my-blog/
├── index.html
├── style.css
├── script.js
├── .nojekyll
├── README.md
├── AGENTS.md
├── CHATGPT_PROJECT_CONTEXT.md
└── posts/
    ├── my-first-post.html
    ├── learning-ai.html
    └── about-this-site.html
```

## 主要文件说明

- `index.html`：网站首页，必须放在项目根目录，这是 GitHub Pages 默认寻找的首页文件。
- `style.css`：网站样式文件。
- `script.js`：网站交互文件，目前主要负责浅色 / 深色模式切换。
- `.nojekyll`：告诉 GitHub Pages 不要使用 Jekyll 处理项目，直接按静态网站发布。
- `posts/`：博客文章页面所在文件夹。
- `AGENTS.md`：给 Codex 的维护规则。
- `CHATGPT_PROJECT_CONTEXT.md`：给 ChatGPT 理解项目用的说明。

## 什么是本地预览

本地预览就是先在自己的电脑上打开网站看看效果，还没有发布到互联网上。

最简单的方法：

1. 打开项目文件夹。
2. 双击 `index.html`。
3. 浏览器会打开网站首页。

如果首页能打开，博客文章也能点进去，说明本地预览基本正常。

## 什么是部署上线

部署上线就是把本地电脑里的网站文件上传到网上，让别人可以通过网址访问。

这个项目是静态网站，不需要服务器程序和数据库，所以适合用 GitHub Pages 免费发布。

## GitHub 和 GitHub Pages 是什么

GitHub 是一个保存代码的网站。你可以把项目上传到 GitHub，方便备份、管理和分享。

GitHub Pages 是 GitHub 提供的静态网站发布功能。它可以把你的 HTML、CSS、JavaScript 文件变成一个可以访问的网站。

## main 分支和 root 目录是什么意思

`main` 分支可以理解成项目的主要版本。新项目通常默认使用 `main` 分支。

`root` 目录就是项目根目录，也就是 `index.html` 所在的这一层文件夹。

这个项目部署到 GitHub Pages 时，建议选择：

- Branch：`main`
- Folder：`/root`

## 如何上传到 GitHub

第一种方式：使用 GitHub 网页上传，适合新手。

1. 打开 [GitHub](https://github.com/)。
2. 登录账号。
3. 点击右上角 `+`，选择 `New repository`。
4. 仓库名可以写 `my-blog` 或你喜欢的名字。
5. 建议选择 `Public`，这样 GitHub Pages 更容易直接发布。
6. 创建仓库后，点击 `uploading an existing file`。
7. 把项目里的文件和 `posts` 文件夹上传上去。
8. 确认根目录里能看到 `index.html`。
9. 点击 `Commit changes` 保存。

第二种方式：使用 Git 命令上传，适合之后再学习。

如果你还不熟悉 Git 命令，可以先用网页上传，不需要着急。

## 如何开启 GitHub Pages

1. 进入 GitHub 上的项目仓库。
2. 点击上方的 `Settings`。
3. 左侧找到 `Pages`。
4. 在 `Build and deployment` 里选择：
   - Source：`Deploy from a branch`
   - Branch：`main`
   - Folder：`/root`
5. 点击 `Save`。
6. 等待 1 到 3 分钟。
7. 页面会显示网站地址。

部署成功后，网址通常长这样：

```text
https://你的GitHub用户名.github.io/仓库名/
```

比如你的 GitHub 用户名是 `Snoopywww`，仓库名是 `my-blog`，网址大概会是：

```text
https://Snoopywww.github.io/my-blog/
```

## 如果打开后出现 404，先检查什么

404 的意思是：网页地址找不到对应文件。

优先检查：

1. GitHub Pages 是否已经开启。
2. Branch 是否选择了 `main`。
3. Folder 是否选择了 `/root`。
4. `index.html` 是否在仓库根目录，不要放进 `posts/` 或其他文件夹。
5. 仓库是否是 Public，或者你的账号是否支持私有仓库 Pages。
6. 等待几分钟后再刷新，有时 GitHub Pages 需要一点时间。
7. 网址是否拼错，尤其是用户名和仓库名。

如果首页能打开，但文章页 404，检查：

1. `posts/` 文件夹是否上传成功。
2. 文章文件名是否和首页链接完全一致。
3. 大小写是否一致，比如 `learning-ai.html` 和 `Learning-AI.html` 是不同名字。

## 上线前不要放隐私信息

发布到 GitHub Pages 后，网站内容是公开的。

不要放：

- 手机号
- 家庭住址
- 身份证号
- 学号
- 个人密码
- 不想公开的照片或文件

当前网站只放了邮箱和 GitHub 链接，适合公开展示。

## 维护建议

- 新增文章时，可以复制 `posts/` 里已有的文章页面，再修改标题、日期和正文。
- 新增文章后，要在 `index.html` 的博客区域添加对应文章卡片。
- 修改样式时优先改 `style.css`。
- 修改深色模式颜色时，查看 `style.css` 里的 `body.dark-mode`。
- 每次修改后检查首页链接、文章链接、返回首页链接和手机端显示。

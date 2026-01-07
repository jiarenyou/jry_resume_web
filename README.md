# MyWeb - 数据开发工程师作品集

极简、高性能的数据工程师个人作品集网站，采用现代 React 技术栈与响应式设计，全方位展示专业技能、项目经验与职业成就。

![MyWeb](https://img.shields.io/badge/React-19.2.0-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-blue) ![Vite](https://img.shields.io/badge/Vite-6.2.0-orange) ![License](https://img.shields.io/badge/License-MIT-green)

## 特性

- **现代化技术栈**：基于 React 19 + TypeScript + Vite 构建
- **响应式设计**：完美适配桌面、平板和移动设备
- **组件化架构**：模块化组件设计，易于维护和扩展
- **路由导航**：使用 React Router 实现单页应用路由
- **动态背景**：集成动画背景效果，提升视觉体验
- **项目详情页**：支持项目详情查看，采用 START 框架展示项目经验

## 技术栈

| 技术 | 版本 | 说明 |
|------|------|------|
| React | 19.2.0 | UI 框架 |
| TypeScript | 5.8.2 | 类型安全 |
| Vite | 6.2.0 | 构建工具 |
| React Router | 7.10.0 | 路由管理 |
| Lucide React | 0.555.0 | 图标库 |

## 项目结构

```
MyWeb/
├── components/           # 组件目录
│   ├── Background.tsx    # 动态背景组件
│   ├── Navigation.tsx    # 导航菜单组件
│   ├── Hero.tsx          # 英雄区域组件
│   ├── Skills.tsx        # 技能展示组件
│   ├── Projects.tsx      # 项目展示组件
│   ├── ProjectDetail.tsx # 项目详情组件
│   ├── Experience.tsx    # 工作经历组件
│   ├── DigitalPresence.tsx # 数字足迹组件
│   ├── Contact.tsx       # 联系方式组件
│   ├── Blog.tsx          # 博客组件
│   └── PlatformIcon.tsx  # 平台图标组件
├── App.tsx               # 主应用组件
├── index.tsx             # 应用入口
├── types.ts              # TypeScript 类型定义
├── vite.config.ts        # Vite 配置
├── tsconfig.json         # TypeScript 配置
├── package.json          # 项目依赖
└── .env.local            # 环境变量（需自行创建）
```

## 快速开始

### 环境要求

- Node.js >= 18.0.0
- npm 或 yarn 或 pnpm

### 安装依赖

```bash
npm install
```

### 配置环境变量

创建 `.env.local` 文件并添加（可选）：

```env
GEMINI_API_KEY=your_api_key_here
```

### 本地开发

```bash
npm run dev
```

访问 `http://localhost:3000` 查看网站。

### 构建生产版本

```bash
npm run build
```

构建产物将输出到 `dist/` 目录。

### 预览生产构建

```bash
npm run preview
```

## 组件说明

### Navigation
主导航菜单，支持桌面和移动端响应式布局，包含以下导航项：
- 首页
- 核心技术栈
- 精选项目
- 职业轨迹
- 数字足迹
- 建立连接

### Hero
英雄区域，展示个人简介和核心角色定位。

### Skills
技能展示区域，分类展示核心技术能力。

### Projects
项目展示区域，支持项目分类和筛选，点击可查看项目详情。

### ProjectDetail
项目详情页面，采用 START 框架展示项目经验：
- **Situation（情境）**：项目背景和需求
- **Task（任务）**：需要完成的具体任务
- **Action（行动）**：采取的具体行动和方法
- **Result（结果）**：取得的成果和效果
- **Takeaway（收获）**：经验教训和总结

### Experience
工作经历时间轴，展示职业发展轨迹。

### DigitalPresence
数字足迹展示，包括博客、社交媒体等链接。

### Contact
联系方式展示，提供多种沟通渠道。

## 类型定义

项目使用 TypeScript 进行类型定义，主要接口包括：

```typescript
interface Project {
  title: string;
  description: string;
  tags: string[];
  metrics?: string;
  link: string;
  highlights?: string[];
  techStack?: string[];
  category?: 'personal' | 'work';
  results?: string;
  startContent?: {
    situation: string;
    task: string;
    action: string;
    result: string;
    takeaway: string;
  };
}

interface Experience {
  company: string;
  role: string;
  period: string;
  details: string[];
  achievements?: string[];
  location?: string;
  type?: 'senior' | 'mid' | 'junior';
}
```

## 配置说明

### Vite 配置

- 开发服务器端口：3000
- 主机：0.0.0.0（支持局域网访问）
- 路径别名：`@` 映射到项目根目录

### TypeScript 配置

- 目标：ES2022
- 模块系统：ESNext
- 严格模式：启用

## 部署

### 静态站点部署

构建完成后，可将 `dist/` 目录部署到以下平台：
- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

### Docker 部署（可选）

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

## 许可证

MIT License

## 作者

贾仁友 (Jia Renyou)
数据开发工程师 | 大数据开发与数据挖掘

## 贡献

欢迎提交 Issue 和 Pull Request！

## 更新日志

### v1.0.0
- 初始版本发布
- 实现核心功能模块
- 支持响应式设计
- 集成项目详情展示


# 贡献指南

:+1::tada: 首先，感谢您抽出时间做出贡献！ :tada::+1:

以下是为 Lucide 做出贡献的一组指南。欢迎在拉取请求中对本文档提出更改建议。

## 拉取请求

欢迎打开拉取请求为这个项目做出贡献。

**第一次提交拉取请求？** 您可以从这个*免费*系列学习
[如何为 GitHub 上的开源项目做出贡献](https://app.egghead.io/playlists/how-to-contribute-to-an-open-source-project-on-github)

拉取请求指南：

- __让您的提交消息尽可能详细。__ 包含尽可能多的信息。解释文件差异本身不明显的任何内容。
- __记录您的拉取请求__。解释您的修复，链接到相关问题，在添加新图标时添加截图。
- __确保拉取请求的目标是相关分支__。大多数错误修复或新功能应该进入 `main` 分支。
- __只包含相关工作__。如果您的拉取请求包含不相关的提交，它将不会被接受。

### 图标拉取请求

#### 指南

请确保您遵循图标指南，这些指南应该被遵循以保持 Lucide 图标的质量和一致性。

在此阅读：[图标指南](https://lucide.dev/docs/icon-design-guide)。

#### Lucide Studio

为了格式化和调整 SVG 图标，[@jguddas](https://github.com/jguddas) 制作了一个很棒的工具叫 [Lucide Studio](https://studio.lucide.dev/)。它是一个基于 Web 的 SVG 编辑器，允许您以 Lucide 风格编辑和调整图标。您可以使用它创建新图标或修改现有图标。

#### 编辑器指南

在这里您可以找到如何使用不同的矢量图形编辑器实施指南的说明：

##### [Adobe Illustrator 指南](https://lucide.dev/docs/illustrator-guide)

您还可以[下载 Adobe Illustrator 模板](https://github.com/lucide-icons/lucide/blob/main/docs/public/templates/illustrator_template.ai)。

##### [Inkscape 指南](https://lucide.dev/docs/inkscape-guide)

##### [Figma 指南](https://lucide.dev/docs/figma-guide)

##### [Affinity Designer 指南](https://lucide.dev/guide/design/affinity-designer-guide)

#### 提交多个图标

如果您想提交多个图标，请分离图标并将它们分组。这样可以更容易地审查图标并保持线程清洁和范围明确。
因此，不要在一个 PR 中提交多个彼此无关的图标。
例如，不要创建一个包含图标 `arrow-up`、`bicycle`、`arrow-down` 的 PR。
将它们分成两个 PR；'pr-01' `arrow`、`arrow-down` 和 'pr-02' `bicycle`。

## 图标请求

在创建图标请求之前，请搜索查看是否有人已经请求了该图标。如果有一个开放的请求，请添加 :+1:。

如果尚未请求图标，[创建图标请求问题](https://github.com/lucide-icons/lucide/issues/new?assignees=&labels=%F0%9F%99%8C+icon+request&projects=&template=01_icon_request.yml)并尽可能添加详细信息。

### 来自 Feather 的图标请求

如果您是一位想为 Lucide 做出贡献的设计师，但不知道要制作哪些图标，那么请查看来自 Feather 的请求。所有开放、未完成和有效的请求都可以在 [Feather 图标请求](https://github.com/lucide-icons/lucide/issues/119)中找到。

## 开发

您需要最低版本的 [Nodejs 16.4+](https://nodejs.org)
对于包管理，您需要 [PNPM](https://pnpm.io/installation)。
对于 Flutter 包开发，您需要 [Flutter 1.17+](https://docs.flutter.dev/get-started/install)。

克隆项目后，您需要运行：

```sh
pnpm install # 安装依赖，包括工作区包
```

### 包 -> PNPM 工作区

为了分发不同的包，我们使用 [PNPM 工作区](https://pnpm.io/workspaces)。在开始之前，请确保您熟悉这个概念。工作区的概念是由 Yarn 创建的，他们有一个写得很好的介绍：[yarn 工作区](https://classic.yarnpkg.com/en/docs/workspaces)。

工作区配置的目录是根目录中的 [packages](https://github.com/lucide-icons/lucide/tree/main/packages) 目录。在那里您将找到 lucide 的所有当前包。
还定义了更多工作区，请参见 [`pnpm-workspace.yaml`](https://github.com/lucide-icons/lucide/blob/main/pnpm-workspace.yaml)。

> 注意：有一个包不由 pnpm 管理：**lucide-flutter**，这个包是用 Dart 编写的，使用 pub 进行发布。

### 生成的代码

对于图标，我们使用一个单一的真相来源，即位于 icons 目录中的图标 svg。为了将图标分发到包中，我们生成代码，包括：带有 svg 路径的图标文件、带有导入的索引文件和类型文件。根据用例，将生成其他必要的代码。

在下一章中，您将阅读生成此代码的命令。

### 常用脚本

#### 构建

构建脚本包括多个子命令：清理 dist 目录、生成图标文件、生成类型文件以及为每种构建格式构建/转译代码。

```sh
pnpm [package-name] build

#示例：

pnpm lucide-react build
```

#### 测试

为每个包运行 jest 单元测试，以确保所有包 API 仍按预期工作。

```sh
pnpm [package-name] test

#示例：

pnpm lucide-vue test
```

建议在进行更改时运行测试监视器。

```sh
pnpm [package-name] test:watch

#示例：

pnpm lucide-preact test:watch
```

### 单元测试

当向例如框架的图标组件添加新功能时，需要通过一些单元测试覆盖此功能。

### 本地测试

要在本地项目中测试更改，您可以使用 `yarn link`、`npm link`、`bun link` 或 `pnpm link` 来链接包。在执行此操作之前，请确保您已经构建了包。

```sh
# 在 packages/lucide-react 中

npm run build &&
npm link

# 在您的本地项目中

npm link lucide-react
```

## 项目结构

根目录

```sh
lucide
├── docs
│   ├── guide
├── icons
├── packages
└── scripts
```

### Docs

lucide.dev 网站使用 [vitepress](https://vitepress.dev/) 生成静态网站。markdown 文件位于 docs 目录中。

#### 本地运行文档网站

要在本地测试文档网站，请按照以下步骤操作：

1. **导航到 docs 目录**

```sh
cd docs
```

2. **启动本地开发服务器**

```sh
  pnpm run docs:dev
```

3. **在本地打开网站**

Vitepress 应该以以下格式打开：

VitePress 开发服务器正在运行：
- **本地**：`http://localhost:3000/`
- **网络**：`http://192.168.x.x:3000/`

### Guides

有关：安装、指南、包、设计指南等的详细文档。

### Icons

Lucide 的所有图标均为 SVG 格式。这些将用作所有包和 lucide 图标的其他分发版本的源。

### Packages

包含 lucide 的所有（npm）包。

### Scripts

包括有用的脚本来自动化某些工作。脚本的很大一部分是模板生成，例如它为所有包生成图标组件。这些脚本通常从 package.json 中的 "scripts" 部分执行。

## 文档

文档文件位于 [docs](https://github.com/lucide-icons/lucide/tree/main/docs) 目录中。所有这些 markdown 文件将在 lucide.dev 网站的构建中加载。

欢迎编写、调整或添加新的 markdown 文件来改进我们的文档。

## 支持

如果您需要任何帮助或在贡献时遇到问题。请随时联系 Lucide 社区，您可以在 [Github](https://github.com/lucide-icons/lucide) 和 [Discord](https://discord.gg/EH6nSts) 上找到我们。

## 致谢

感谢所有已经为 Lucide 做出贡献的人！

<a href="https://github.com/lucide-icons/lucide/graphs/contributors">
<img src="https://opencollective.com/lucide-icons/contributors.svg?width=800" /></a>


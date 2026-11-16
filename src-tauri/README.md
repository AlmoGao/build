# 桌面应用打包

本项目使用 Tauri 2，以下命令均在项目根目录（`package.json` 所在目录）运行。当前应用名为 `MANA`；改名后，安装包和 `.app` 名称随配置变化。

## macOS：免费 ad-hoc 签名

项目通过 `src-tauri/tauri.conf.json` 中的 `bundle.macOS.signingIdentity: "-"` 对完整应用进行 ad-hoc 签名，不需要 Apple 开发者证书，也不提交 Apple 公证。

如终端此前设置过 `APPLE_SIGNING_IDENTITY` 或 Apple 公证相关环境变量，请先清除，避免沿用正式签名配置。不要给打包命令添加 `--no-sign`，该参数会跳过应用签名。

ad-hoc 签名可校验应用内容是否被改动，但不提供 Apple 认可的开发者身份。通过浏览器、Telegram 等下载后，macOS 仍可能拦截应用并提示“已损坏”或无法验证。此方案适合可信范围内的测试分发，收件人通常需要对该应用单独放行；它无法实现正式签名、公证后的直接打开体验。

### 安装构建环境

- 安装 Node.js、npm、Rust（含 Cargo）。
- 在 Mac 上安装 Xcode Command Line Tools，然后安装项目依赖：

```bash
xcode-select --install
npm ci
```

已经安装 Command Line Tools 时，无需重复安装。构建使用现有的 `dist/` 前端文件；发布前确认它是准备分发的版本。

### 改名与图标

如需更换应用名称和图标，先替换根目录的 `logo.png`，再运行：

```bash
bash rename.sh
```

按提示输入应用名称，脚本会更新名称配置并生成各平台图标。随后重新打包。签名完成后不要再修改 `.app` 内的文件，否则签名校验会失败。

### 打包命令与架构

```bash
# 按当前 Mac 的默认目标架构打包
npm run tauri:dmg

# Apple Silicon（M 系列）
npm run tauri:dmg:arm64

# Intel Mac
npm run tauri:dmg:x64

# 同时支持 Apple Silicon 和 Intel
npm run tauri:dmg:universal
```

构建其他架构或 Universal 版本前，安装对应的 Rust 编译目标：

```bash
rustup target add aarch64-apple-darwin x86_64-apple-darwin
```

面向两类 Mac 分发时，使用 Universal 包。仅有 arm64 的安装包不能在 Intel Mac 上运行。

| 命令 | DMG 输出目录 |
| --- | --- |
| `npm run tauri:dmg` | `src-tauri/target/release/bundle/dmg/` |
| `npm run tauri:dmg:arm64` | `src-tauri/target/aarch64-apple-darwin/release/bundle/dmg/` |
| `npm run tauri:dmg:x64` | `src-tauri/target/x86_64-apple-darwin/release/bundle/dmg/` |
| `npm run tauri:dmg:universal` | `src-tauri/target/universal-apple-darwin/release/bundle/dmg/` |

对应的 `.app` 位于同级的 `bundle/macos/` 目录。以上为项目默认输出路径；如自行设置了 Cargo 输出目录，以构建日志为准。

### 可信内测用户的安装与放行

1. 确认安装包来自可信的开发者，打开 DMG，将 `MANA.app` 拖入“应用程序”。
2. 如系统拦截，在终端先检查这个应用的签名：

   ```bash
   codesign --verify --deep --strict --verbose=2 "/Applications/MANA.app"
   ```

   校验失败时，应让开发者重新打包；校验通过只说明内容与 ad-hoc 签名一致，不能证明开发者身份或应用安全。
3. 确认来源可信且校验通过后，仅移除这个应用的下载隔离标记，再从“应用程序”中打开：

   ```bash
   xattr -dr com.apple.quarantine "/Applications/MANA.app"
   ```

应用改名或安装在其他位置时，请替换命令中的路径。无需关闭系统全局 Gatekeeper。每次更换下载的应用版本，都可能需要重新完成上述步骤。

## Windows

在 Windows 上安装 Node.js、Rust，以及带“使用 C++ 的桌面开发”工作负载的 Visual Studio Build Tools，然后在项目根目录运行：

```powershell
npm ci
npm run tauri:build
```

安装包默认位于 `src-tauri/target/release/bundle/`。macOS 包在 Mac 上构建，Windows 包在 Windows 上构建。

本项目没有 `tauri:mac`、`tauri:win` 或自定义 `--sign` 打包脚本，请使用上面列出的实际 npm 命令。

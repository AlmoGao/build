# Tauri 桌面应用打包

## 环境安装

### macOS
```bash
# 安装 Rust
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source $HOME/.cargo/env

# 安装 Command Line Tools（如未安装）
xcode-select --install

# 安装项目依赖
npm install
```

### Windows

#### 1. 安装 Visual Studio Build Tools（必须先装）

1. 下载：https://visualstudio.microsoft.com/zh-hans/visual-cpp-build-tools/
2. 运行安装程序，在 **"工作负载"** 标签页勾选：
   - ✅ **使用 C++ 的桌面开发**
3. 在右侧 **"安装详细信息"** 确保勾选：
   - ✅ MSVC v143 - VS 2022 C++ x64/x86 生成工具
   - ✅ Windows 11 SDK（或 Windows 10 SDK）
4. 点击 **"安装"**（约 2-3 GB）
5. 安装完成后**重启电脑**

#### 2. 安装 Rust

```powershell
# 方式一：使用 winget
winget install Rustlang.Rustup

# 方式二：访问 https://rustup.rs/ 下载安装程序
```

安装时选择默认选项即可。安装完成后**重启 PowerShell**。

#### 3. 验证安装

```powershell
rustc --version   # 应显示 rustc 1.x.x
```

## 打包命令

### macOS（在 Mac 上运行）
```bash
# 完整构建（默认 Universal，支持 Intel + Apple Silicon）
npm run tauri:mac -- --mode aurexion

# 跳过前端构建（使用已有的 dist_aurexion）
npm run tauri:mac -- --mode aurexion --skip-build

# 指定目标架构
npm run tauri:mac -- --mode aurexion --arch universal  # 通用版本（默认）
npm run tauri:mac -- --mode aurexion --arch arm64      # 仅 Apple Silicon
npm run tauri:mac -- --mode aurexion --arch x64        # 仅 Intel

# 签名 + 公证（分发给用户时使用）
npm run tauri:mac -- --mode aurexion --sign
```

### Windows（在 Windows 上运行）
```bash
# 完整构建（自动检测架构）
npm run tauri:win -- --mode aurexion

# 跳过前端构建
npm run tauri:win -- --mode aurexion --skip-build

# 指定目标架构
npm run tauri:win -- --mode aurexion --arch x64      # 构建 x64 版本（给普通 PC）
npm run tauri:win -- --mode aurexion --arch arm64    # 构建 ARM64 版本
```

#### ARM64 Windows 交叉编译说明

在 ARM64 Windows 设备上构建 x64 版本，需要额外安装 MSVC ARM64 组件：

1. 打开 **Visual Studio Installer**
2. 找到 **Build Tools 2022**，点击 **"修改"**
3. 切换到 **"单个组件"** 标签
4. 搜索并勾选：**MSVC v143 - VS 2022 C++ ARM64/ARM64EC build tools**
5. 点击 **"修改"** 完成安装

安装完成后即可使用 `--arch x64` 交叉编译。

## 输出位置

| 平台 | 架构 | 类型 | 位置 |
|-----|------|------|------|
| **macOS** | universal | APP | `src-tauri/target/universal-apple-darwin/release/bundle/macos/` |
| **macOS** | universal | DMG | `src-tauri/target/universal-apple-darwin/release/bundle/dmg/` |
| **macOS** | arm64 | DMG | `src-tauri/target/aarch64-apple-darwin/release/bundle/dmg/` |
| **macOS** | x64 | DMG | `src-tauri/target/x86_64-apple-darwin/release/bundle/dmg/` |
| **Windows** | x64 | MSI/EXE | `src-tauri/target/x86_64-pc-windows-msvc/release/bundle/` |
| **Windows** | ARM64 | MSI/EXE | `src-tauri/target/aarch64-pc-windows-msvc/release/bundle/` |

## 目录结构

```
src-tauri/
├── Cargo.toml          # Rust 依赖
├── tauri.conf.json     # Tauri 配置
├── signing.json        # 代码签名配置
├── entitlements.plist  # macOS 权限配置
├── src/main.rs         # 主程序
└── icons/              # 应用图标（自动生成）

scripts/
├── build-tauri-mac.js  # macOS 打包脚本
└── build-tauri-win.js  # Windows 打包脚本
```

## macOS 签名 + 公证

使用 `--sign` 参数打包时会自动签名并提交 Apple 公证，用户打开应用时不会有任何警告。

### 前提条件

1. 拥有 [Apple Developer Program](https://developer.apple.com/programs/) 账户（年费 $99）
2. 在 Apple Developer 后台创建「Developer ID Application」证书
3. 证书已安装到本地钥匙串

### 配置文件 `signing.json`

```json
{
  "macOS": {
    "signingIdentity": "Developer ID Application: Your Name (TEAMID)",
    "teamId": "TEAMID",
    "notarize": {
      "appleId": "your@email.com",
      "password": "xxxx-xxxx-xxxx-xxxx"
    }
  }
}
```

### 如何获取配置信息

#### 1. 获取 signingIdentity

```bash
security find-identity -v -p codesigning
```

找到 `Developer ID Application:` 开头的那一行，复制引号内完整内容。

#### 2. 获取 teamId

Team ID 是括号中的 10 位字符，也可在 [Apple Developer](https://developer.apple.com/account) 右上角查看。

#### 3. 生成应用专用密码

1. 访问 [appleid.apple.com](https://appleid.apple.com)
2. 登录 → **登录和安全性** → **应用专用密码**
3. 点击 **生成应用专用密码**
4. 输入名称（如 "Notarization"）
5. 复制生成的密码（格式 `xxxx-xxxx-xxxx-xxxx`）

> ⚠️ 应用专用密码只显示一次，请安全保存

### 打包命令

```bash
npm run tauri:mac -- --mode aurexion --sign
```

公证过程需要几分钟，脚本会自动等待并附加票据。

## 注意事项

- **跨平台编译不支持**：Mac 只能打包 Mac 版本，Windows 只能打包 Windows 版本
- 图标优先从 `public/{mode}/app-icon.png` 读取，其次 `logo.png`
- 配置自动从 `.env.{mode}` 读取（应用名、版本等）

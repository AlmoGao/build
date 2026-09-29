#!/bin/bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"
CONFIG="$ROOT/src-tauri/tauri.conf.json"
CARGO="$ROOT/src-tauri/Cargo.toml"
LOGO="$ROOT/logo.png"

read -rp "请输入平台名字: " NAME
[ -n "$NAME" ] || { echo "平台名字不能为空"; exit 1; }
[ -f "$LOGO" ] || { echo "找不到 Logo: $LOGO"; exit 1; }

NAME="$NAME" CONFIG="$CONFIG" CARGO="$CARGO" python3 <<'PY'
import json
import os
import re
from pathlib import Path

name = os.environ["NAME"]
config_path = Path(os.environ["CONFIG"])
cargo_path = Path(os.environ["CARGO"])

config = json.loads(config_path.read_text())
old_name = config.get("productName", "")
config["productName"] = name
config_path.write_text(json.dumps(config, ensure_ascii=False, indent=2) + "\n")

cargo = cargo_path.read_text()
cargo = re.sub(
    r'(?m)^description\s*=\s*"[^"]*"$',
    f'description = "{name} Desktop Application"',
    cargo,
    count=1,
)
cargo = re.sub(
    r'(?m)^authors\s*=\s*\[[^\n]*\]$',
    f'authors = ["{name}"]',
    cargo,
    count=1,
)

if re.fullmatch(r"[A-Za-z][A-Za-z0-9_-]*", name):
    cargo = re.sub(
        r'(?m)^(\[package\]\nname\s*=\s*)"[^"]*"',
        lambda match: f'{match.group(1)}"{name}"',
        cargo,
        count=1,
    )
else:
    print("提示: 平台名含中文、空格或特殊字符，Cargo 技术包名保持不变，不影响安装包和应用显示名。")

cargo_path.write_text(cargo)
print(f"应用名称: {old_name} -> {name}")
PY

cd "$ROOT"
if [ ! -x "$ROOT/node_modules/.bin/tauri" ]; then
  echo "未检测到 @tauri-apps/cli，请先执行 npm install，然后重新运行本脚本生成图标。"
  echo "提示: 名称配置已更新，重跑脚本时再次输入相同名字即可。"
  exit 1
fi
npx --no-install tauri icon "$LOGO"

echo "名称配置和全平台图标已更新，现在可以执行 npm run tauri:dmg 打包。"

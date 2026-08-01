// Prevents additional console window on Windows in release mode
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use hmac::{Hmac, Mac};
use sha2::{Digest, Sha256};
use std::process::Command;
use tauri::{WebviewUrl, WebviewWindowBuilder, WindowEvent};

const DEVICE_HMAC_SECRET: &[u8] = b"X7mK9pQ2dL4a";

fn device_hash(device_id: &str) -> String {
    if device_id.is_empty() {
        return String::new();
    }
    let mut mac = Hmac::<Sha256>::new_from_slice(DEVICE_HMAC_SECRET).expect("hmac key");
    mac.update(device_id.as_bytes());
    hex::encode(mac.finalize().into_bytes())
}

/// 严格获取设备唯一编号（mac/win/linux），失败返回空串
/// 与 Electron 端实现保持一致：取平台原生 ID 后做 SHA256，输出小写 hex
fn get_device_id() -> String {
    let raw: Option<String> = if cfg!(target_os = "macos") {
        Command::new("ioreg")
            .args(["-rd1", "-c", "IOPlatformExpertDevice"])
            .output()
            .ok()
            .and_then(|o| String::from_utf8(o.stdout).ok())
            .and_then(|s| {
                s.lines()
                    .find(|l| l.contains("IOPlatformUUID"))
                    .and_then(|l| l.split('"').nth(3).map(String::from))
            })
    } else if cfg!(target_os = "windows") {
        Command::new("reg")
            .args([
                "query",
                r"HKLM\SOFTWARE\Microsoft\Cryptography",
                "/v",
                "MachineGuid",
            ])
            .output()
            .ok()
            .and_then(|o| String::from_utf8(o.stdout).ok())
            .and_then(|s| {
                s.lines()
                    .find(|l| l.to_lowercase().contains("machineguid"))
                    .and_then(|l| l.split_whitespace().last().map(String::from))
            })
    } else {
        std::fs::read_to_string("/etc/machine-id")
            .ok()
            .map(|s| s.trim().to_string())
    };

    match raw {
        Some(s) if !s.is_empty() => {
            let mut hasher = Sha256::new();
            hasher.update(s.as_bytes());
            hex::encode(hasher.finalize())
        }
        _ => String::new(),
    }
}

fn main() {
    let device_id = get_device_id();
    let dev_hash = device_hash(&device_id);
    eprintln!("[device-id]   {}", device_id);
    eprintln!("[device-hash] {}", dev_hash);

    // 在页面任何 JS 之前注入 window.electronAPI，使复用 vueadmin 的前端代码无需修改
    let init_script = format!(
        "window.electronAPI = {{ isElectron: true, deviceId: \"{}\", deviceHash: \"{}\" }};",
        device_id.replace('"', ""),
        dev_hash.replace('"', "")
    );

    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .setup(move |app| {
            let title = app.package_info().name.clone();
            let win = WebviewWindowBuilder::new(app, "main", WebviewUrl::App("index.html".into()))
                .title(title)
                .inner_size(1200.0, 800.0)
                .resizable(true)
                .fullscreen(false)
                .center()
                .maximized(true)
                .initialization_script(&init_script)
                .build()?;

            // 拦截窗口关闭：隐藏而不是销毁，避免重新激活时白屏
            let win_for_close = win.clone();
            win.on_window_event(move |event| {
                if let WindowEvent::CloseRequested { api, .. } = event {
                    api.prevent_close();
                    let _ = win_for_close.hide();
                }
            });

            #[cfg(debug_assertions)]
            win.open_devtools();

            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

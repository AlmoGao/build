//! Scale the entire native WebView to a configurable minimum design width.
//! Native page zoom also covers body portals, fixed elements and viewport units.

use tauri::{WebviewWindow, WindowEvent};

pub const DEFAULT_DESIGN_WIDTH: f64 = 1600.0;

#[derive(Clone, Copy)]
pub struct AutoScale {
    design_width: f64,
    enabled: bool,
}

impl AutoScale {
    pub fn new(design_width: f64, enabled: bool) -> Result<Self, &'static str> {
        if !design_width.is_finite() || design_width <= 0.0 {
            return Err("design width must be a positive finite number");
        }
        Ok(Self {
            design_width,
            enabled,
        })
    }

    /// Attach once after creating the window. Page-load hooks should also call
    /// refresh(), because a WebView can reset its zoom when loading a document.
    pub fn attach(self, window: &WebviewWindow) {
        if !self.enabled {
            return;
        }

        let window_for_event = window.clone();
        window.on_window_event(move |event| {
            let result = match event {
                WindowEvent::Resized(size) => window_for_event
                    .scale_factor()
                    .and_then(|dpi| self.apply(&window_for_event, size.width, dpi)),
                WindowEvent::ScaleFactorChanged {
                    scale_factor,
                    new_inner_size,
                    ..
                } => self.apply(&window_for_event, new_inner_size.width, *scale_factor),
                _ => return,
            };
            if let Err(error) = result {
                eprintln!("[auto-scale] window update failed: {error}");
            }
        });

        self.refresh(window);
    }

    pub fn refresh(self, window: &WebviewWindow) {
        if !self.enabled {
            return;
        }
        let result = (|| {
            let size = window.inner_size()?;
            let dpi = window.scale_factor()?;
            self.apply(window, size.width, dpi)
        })();
        if let Err(error) = result {
            eprintln!("[auto-scale] page update failed: {error}");
        }
    }

    fn apply(self, window: &WebviewWindow, physical_width: u32, dpi: f64) -> tauri::Result<()> {
        if let Some(factor) = zoom_factor(physical_width, dpi, self.design_width) {
            // Use native dimensions, never the zoomed renderer's innerWidth.
            // This changes page layout but does not resize the native window.
            // No application mutex is held while calling into the native API.
            window.set_zoom(factor)?;
        }
        Ok(())
    }
}

fn zoom_factor(physical_width: u32, dpi: f64, design_width: f64) -> Option<f64> {
    if physical_width == 0
        || !dpi.is_finite()
        || dpi <= 0.0
        || !design_width.is_finite()
        || design_width <= 0.0
    {
        return None;
    }
    let factor = (f64::from(physical_width) / dpi / design_width).min(1.0);
    (factor.is_finite() && factor > 0.0).then_some(factor)
}

/// Wry uses WKWebView.pageZoom on macOS, which requires macOS 11 or newer.
/// Determine support once at startup. Older/unknown macOS versions keep the
/// frontend fallback enabled instead of calling an unavailable native selector.
#[cfg(target_os = "macos")]
pub fn native_zoom_supported() -> bool {
    std::process::Command::new("/usr/bin/sw_vers")
        .arg("-productVersion")
        .output()
        .ok()
        .filter(|output| output.status.success())
        .and_then(|output| String::from_utf8(output.stdout).ok())
        .is_some_and(|version| macos_version_supports_zoom(&version))
}

#[cfg(not(target_os = "macos"))]
pub fn native_zoom_supported() -> bool {
    true
}

#[cfg(any(target_os = "macos", test))]
fn macos_version_supports_zoom(version: &str) -> bool {
    version
        .trim()
        .split('.')
        .next()
        .and_then(|major| major.parse::<u32>().ok())
        .is_some_and(|major| major >= 11)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn fits_small_windows_and_never_enlarges_wide_windows() {
        for (width, expected) in [
            (960, 0.6),
            (1024, 0.64),
            (1280, 0.8),
            (1366, 0.85375),
            (1600, 1.0),
            (1920, 1.0),
        ] {
            assert_eq!(zoom_factor(width, 1.0, 1600.0), Some(expected));
        }
    }

    #[test]
    fn converts_physical_client_width_to_logical_width_once() {
        assert_eq!(zoom_factor(1600, 1.25, 1600.0), Some(0.8));
        assert_eq!(zoom_factor(1920, 1.5, 1600.0), Some(0.8));
        assert_eq!(zoom_factor(2560, 2.0, 1600.0), Some(0.8));
    }

    #[test]
    fn supports_other_design_widths() {
        assert_eq!(zoom_factor(1280, 1.0, 1920.0), Some(2.0 / 3.0));
        assert!(AutoScale::new(1920.0, true).is_ok());
    }

    #[test]
    fn ignores_minimized_or_invalid_native_dimensions() {
        assert_eq!(zoom_factor(0, 1.0, 1600.0), None);
        for dpi in [0.0, -1.0, f64::NAN, f64::INFINITY] {
            assert_eq!(zoom_factor(1280, dpi, 1600.0), None);
        }
    }

    #[test]
    fn rejects_invalid_design_widths() {
        for width in [0.0, -1.0, f64::NAN, f64::INFINITY] {
            assert!(AutoScale::new(width, true).is_err());
            assert_eq!(zoom_factor(1280, 1.0, width), None);
        }
    }

    #[test]
    fn keeps_native_zoom_off_on_older_or_unknown_macos_versions() {
        for version in ["10.13.6", "10.15.7", "", "unknown", "not.a.version"] {
            assert!(!macos_version_supports_zoom(version));
        }
        for version in ["11.0", "12.7.6", "15.5\n", " 26.0.1 "] {
            assert!(macos_version_supports_zoom(version));
        }
    }
}

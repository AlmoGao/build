<script>
  (function () {
    function showErr(msg) {
      var box = document.getElementById('__err_overlay__');
      if (!box) {
        box = document.createElement('div');
        box.id = '__err_overlay__';
        box.style.cssText = 'position:fixed;left:0;bottom:0;right:0;max-height:50%;overflow:auto;z-index:999999;' +
          'background:rgba(200,0,0,.92);color:#fff;font:12px/1.6 monospace;padding:10px;white-space:pre-wrap;word-break:break-all;';
        (document.body || document.documentElement).appendChild(box);
      }
      box.textContent += msg + '\n----------------\n';
    }
    window.addEventListener('error', function (e) {
      if (e.target && (e.target.src || e.target.href)) {
        showErr('[资源加载失败] ' + (e.target.src || e.target.href));
      } else {
        showErr('[JS错误] ' + e.message + ' @ ' + (e.filename || '') + ':' + (e.lineno || ''));
      }
    }, true);
    window.addEventListener('unhandledrejection', function (e) {
      var r = e.reason;
      showErr('[Promise未捕获] ' + (r && (r.stack || r.message) || r));
    });
  })();
</script>
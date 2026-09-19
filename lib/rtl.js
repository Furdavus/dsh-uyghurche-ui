  // B1 级：RTL 文字方向与对齐。ug 激活时给 <html> 设 dir="rtl" 并注入覆盖层样式，
  // 切走/卸载时移除 dir 与 <style>，完全恢复 LTR。
  // 语言切换信号直接来自 locale 服务（locale 服务自己维护 <html lang>，只写 lang 不写 dir）。
  function installRtl(ctx) {
    if (typeof document === 'undefined') return function () {}
    var styleEl = null

    function ensureStyle() {
      if (styleEl) return
      var el = document.createElement('style')
      el.setAttribute('data-dsh-uyghurche-ui-rtl', '')
      el.textContent = RTL_CSS
      document.head.appendChild(el)
      styleEl = el
    }

    function selfCheck() {
      // 关键锚点自检：右栏面板或其容器应当存在；不命中说明上游 DOM 结构变了，覆盖层失效
      var ok = document.querySelector('[data-rightbar-col], [class*="_sidebarCol"]') !== null
      if (!ok && ctx.logger && ctx.logger.warn) {
        ctx.logger.warn('dsh-uyghurche-ui: RTL 覆盖层关键选择器未命中，上游 DOM 结构可能已变化')
      }
    }

    function sync() {
      var active = ctx.locale.getLocale().active
      if (active === 'ug') {
        document.documentElement.setAttribute('dir', 'rtl')
        ensureStyle()
        selfCheck()
      } else {
        document.documentElement.removeAttribute('dir')
        if (styleEl) {
          styleEl.remove()
          styleEl = null
        }
      }
    }

    sync()
    var unsubscribe = ctx.locale.subscribe(sync)
    return function () {
      unsubscribe()
      document.documentElement.removeAttribute('dir')
      if (styleEl) {
        styleEl.remove()
        styleEl = null
      }
    }
  }

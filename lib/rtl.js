  // B1 级（收窄版）：只镜像“内容面”，两侧栏保持 LTR —— 不换边、不做补偿。
  // 内容面 = lib/rtl.css 里的两个锚点：
  //   1. _centerCol（中栏：对话区 + main 槽面板）；
  //   2. [role="dialog"][aria-modal="true"]（设置界面等模态；设置模态 DOM 上挂在
  //      侧栏的 sidebar.settings 槽里，只锚中栏会漏掉）。
  // 关键：不给 <html> 设 dir="rtl"。设了会让 AppFrame 的三轨 grid 整体换边
  // （左栏翻到屏幕右侧），再想只留侧栏 LTR 就只能逐个补偿定位，脆弱。
  // 改为让 lib/rtl.css 把 direction:rtl 打在这两个锚点上：direction 可继承，
  // 等价于在该子树设 dir="rtl"，且是纯 CSS 命中，React 重渲染不会掉。
  // ug 激活时注入覆盖层 <style>，切走/卸载时移除，完全恢复 LTR。
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
      // 关键锚点自检：中栏容器应当存在（模态只在打开时才在，故不参与自检）；
      // 不命中说明上游 DOM 结构变了，覆盖层失效
      var ok = document.querySelector('[class*="_centerCol"]') !== null
      if (!ok && ctx.logger && ctx.logger.warn) {
        ctx.logger.warn('dsh-uyghurche-ui: RTL 覆盖层关键选择器未命中，上游 DOM 结构可能已变化')
      }
    }

    function sync() {
      var active = ctx.locale.getLocale().active
      if (active === 'ug') {
        ensureStyle()
        selfCheck()
      } else if (styleEl) {
        styleEl.remove()
        styleEl = null
      }
    }

    sync()
    var unsubscribe = ctx.locale.subscribe(sync)
    return function () {
      unsubscribe()
      if (styleEl) {
        styleEl.remove()
        styleEl = null
      }
    }
  }

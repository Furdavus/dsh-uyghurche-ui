  var UG_DICTS = {
    'common': ugCommon,
    'settings.locale': ugSettingsLocale,
    'conversation': ugConversation,
    'chat': ugChat,
    'workspace': ugWorkspace,
    'sidebar': ugSidebar,
    'sidebarFiles': ugSidebarFiles,
    'sidebarRight': ugSidebarRight,
    'model': ugModel,
    'command': ugCommand,
    'slash.menu': ugSlashMenu,
    'settings': ugSettings,
    'settings.models': ugSettingsModels,
    'settings.plugins': ugSettingsPlugins,
    'settings.agentPreset': ugSettingsAgentPreset,
    'settings.pluginInventory': ugSettingsPluginInventory,
    'settings.theme': ugSettingsTheme,
    'settings.permission': ugSettingsPermission,
    'permission.access': ugPermissionAccess,
    'cordis': ugCordis,
    'deliverables': ugDeliverables,
    'subagent': ugSubagent,
    'feedback': ugFeedback,
    'workflowRun': ugWorkflowRun,
    'schedule.catalog': ugScheduleCatalog,
    'job': ugJob,
    'question': ugQuestion,
    'open-in-app': ugOpenInApp,
    'goal': ugGoal,
    'plan': ugPlan,
    'skill': ugSkill,
    'reference': ugReference,
    'approval': ugApproval,
    'session-log-download': ugSessionLogDownload,
    'documentMarkdown': ugDocumentMarkdown,
    'documentHtml': ugDocumentHtml,
    'sidebarImage': ugSidebarImage,
    'sidebarPdf': ugSidebarPdf,
    'sidebarCodePreview': ugSidebarCodePreview,
    'sidebarDocumentPreview': ugSidebarDocumentPreview,
  }

  // C 级：ug 激活期间，把「未显式指定 locale」的 Intl / toLocale* / localeCompare
  // 调用默认切到 ug，使上游用浏览器默认 locale 的格式化（trajectory 的记录时间、
  // 日期解析辅助、文件排序 Collator 等 9 处裸调用）跟随界面语言。
  // 切走或卸载时原样恢复；对显式传了 locale 的调用零影响。
  function installUgIntl(ctx) {
    var originals = null
    var wrapped = false

    function restore() {
      if (!wrapped) return
      for (var key in originals) {
        var parts = key.split('.')
        if (parts[0] === 'Intl') {
          globalThis.Intl[parts[1]] = originals[key]
        } else if (key.indexOf('Date.') === 0) {
          Date.prototype[key.slice(5)] = originals[key]
        } else if (key === 'Number.toLocaleString') {
          Number.prototype.toLocaleString = originals[key]
        } else if (key === 'String.localeCompare') {
          String.prototype.localeCompare = originals[key]
        }
      }
      originals = null
      wrapped = false
    }

    function wrap() {
      originals = {}
      var ctorNames = ['DateTimeFormat', 'NumberFormat', 'RelativeTimeFormat']
      for (var i = 0; i < ctorNames.length; i++) {
        ;(function (name) {
          var Orig = globalThis.Intl[name]
          originals['Intl.' + name] = Orig
          globalThis.Intl[name] = function (locales, options) {
            if (locales === undefined || locales === null) locales = 'ug'
            return new Orig(locales, options)
          }
        })(ctorNames[i])
      }
      var dateMethods = ['toLocaleString', 'toLocaleDateString', 'toLocaleTimeString']
      for (var d = 0; d < dateMethods.length; d++) {
        ;(function (mname) {
          originals['Date.' + mname] = Date.prototype[mname]
          Date.prototype[mname] = function (locales, options) {
            var loc = (locales === undefined || locales === null) ? 'ug' : locales
            return originals['Date.' + mname].call(this, loc, options)
          }
        })(dateMethods[d])
      }
      originals['Number.toLocaleString'] = Number.prototype.toLocaleString
      Number.prototype.toLocaleString = function (locales, options) {
        var loc = (locales === undefined || locales === null) ? 'ug' : locales
        return originals['Number.toLocaleString'].call(this, loc, options)
      }
      originals['String.localeCompare'] = String.prototype.localeCompare
      String.prototype.localeCompare = function (that, locales, options) {
        var loc = (locales === undefined || locales === null) ? 'ug' : locales
        return originals['String.localeCompare'].call(this, that, loc, options)
      }
      wrapped = true
    }

    function sync() {
      var active = ctx.locale.getLocale().active
      if (active === 'ug' && !wrapped) wrap()
      else if (active !== 'ug' && wrapped) restore()
    }

    sync()
    var unsubscribe = ctx.locale.subscribe(sync)
    return function () {
      unsubscribe()
      restore()
    }
  }

  function apply(ctx) {
    return ctx.effect(function () {
      var disposers = []
      try {
        disposers.push(ctx.locale.addLanguage(UG_LANGUAGE))
      } catch (err) {
        if (ctx.logger && ctx.logger.warn) ctx.logger.warn('dsh-uyghurche-ui: addLanguage failed', err)
      }
      for (var ns in UG_DICTS) {
        try {
          disposers.push(ctx.locale.register(ns, 'ug', UG_DICTS[ns]))
        } catch (err) {
          if (ctx.logger && ctx.logger.warn) ctx.logger.warn('dsh-uyghurche-ui: ' + ns + ' dictionary failed', err)
        }
      }
      try {
        disposers.push(installUgIntl(ctx))
      } catch (err) {
        if (ctx.logger && ctx.logger.warn) ctx.logger.warn('dsh-uyghurche-ui: intl hook failed', err)
      }
      try {
        disposers.push(installRtl(ctx))
      } catch (err) {
        if (ctx.logger && ctx.logger.warn) ctx.logger.warn('dsh-uyghurche-ui: rtl hook failed', err)
      }
      return function () {
        for (var i = 0; i < disposers.length; i++) disposers[i]()
      }
    }, 'dsh-uyghurche-ui: ug language pack')
  }

  var plugin = { inject: ['locale'], apply: apply }

  // Diagnostics hook for the console / tests.
  if (typeof window !== 'undefined') {
    window.__dshUyghurUi = {
      language: UG_LANGUAGE,
      dictionaries: UG_DICTS,
    }
  }

  if (typeof window !== 'undefined' && window.__ModuleLoader__) {
    window.__ModuleLoader__.load({
      id: 'dsh-uyghurche-ui',
      factory: function () { return plugin },
    })
  }
})()

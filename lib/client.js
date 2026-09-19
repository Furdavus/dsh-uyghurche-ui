/**
 * dsh-uyghurche-ui client half — Uyghur (UEY) interface language pack.
 *
 * Scope (A1 + A2): register the `ug` language through the official DSH locale
 * API and provide Uyghur dictionaries for the `common`, `settings.locale` and
 * the nine main-surface namespaces (conversation / chat / workspace / sidebar
 * family / model / command / slash.menu). Every other upstream key falls back
 * to English through the SDK's per-key fallback chain, so a partially
 * translated pack is always safe to ship (no blank screens, no key leakage).
 *
 * Reference implementations this file mirrors:
 *   - @linxin666/dsh-i18n  (single-language pack, ru)
 *   - @huanlin/dsh-plugin-better-locale (19-language pack, upstream namespaces)
 *
 * Contract: loaded by the client module system as a classic script; must call
 * window.__ModuleLoader__.load({ id, factory }) with id = package name. The
 * factory returns the cordis plugin shape ({ inject, apply }). Unlike a DOM
 * self-booting plugin, this pack MUST NOT apply without ctx — it needs the
 * locale service that the framework injects.
 *
 * Generated file: edit lib/dict/*.js and run `node scripts/build-client.mjs`.
 */

;(function () {
  'use strict'

  var UG_LANGUAGE = { id: 'ug', label: 'ئۇيغۇرچە', fallback: 'en' }

var ugCommon = {
  'ok': 'ماقۇل',
  'cancel': 'بىكار قىلىش',
  'close': 'يېپىش',
  'copy': 'كۆچۈرۈش',
  'copied': 'كۆچۈرۈلدى',
  'copy.failed': 'كۆچۈرۈش مەغلۇپ بولدى',
  'copy.value': 'قىممەتنى كۆچۈرۈش',
  'copy.json': 'JSON نى كۆچۈرۈش',
  'copy.path': 'خاسلىق يولىنى كۆچۈرۈش',
  'copy.prettyJson': 'فورماتلانغان JSON نى كۆچۈرۈش',
  'copy.compactJson': 'ئىخچام JSON نى كۆچۈرۈش',
  'copy.optionsHint': '{action}؛ ئوڭ كۇنۇپكا بىلەن چېكىپ كۆچۈرۈش ئۇسۇلىنى تاللىغىلى بولىدۇ',
  'retry': 'قايتا سىناش',
  'loading': 'يۈكلىنىۋاتىدۇ…',
  'load.failed': 'يۈكلەش مەغلۇپ بولدى',
  'submit': 'تاپشۇرۇش',
  'submitting': 'تاپشۇرۇلۇۋاتىدۇ…',
  'next': 'كېيىنكى قەدەم',
  'previous': 'ئالدىنقى قەدەم',
  'skip': 'ئاتلاپ ئۆتۈش',
  'delete': 'ئۆچۈرۈش',
  'edit': 'تەھرىرلەش',
  'save': 'ساقلاش',
  'search': 'ئىزدەش',
  'more': 'تېخىمۇ كۆپ',
  'collapse': 'قاتلاش',
  'expand': 'يېيىش',
  'back': 'قايتىش',
  'brand.localBuild': 'DSH يەرلىك قۇرۇلمىسى',
  'unknown': 'نامەلۇم',
  'none': 'يوق',
  'truncated': 'قىسقارتىلدى',
  'json.collapseNode': 'JSON تۈگۈنىنى قاتلاش',
  'json.expandNode': 'JSON تۈگۈنىنى يېيىش',
  'json.label': 'JSON',
  'markdown.footnotes': 'ئاستى خاتىرە',
  'markdown.truncatedCharacters': '… قىسقارتىلدى، جەمئىي {total} بەلگە',
  'number.thousand': '{value}K',
  'number.million': '{value}M',
}

var ugSettingsLocale = {
  'language.title': 'تىل',
}

var ugConversation = {
  'hint.plan': 'پىلان ھاسىل قىلىش ئۈچۈن ۋەزىپىڭىزنى تەسۋىرلەڭ',
  'hint.goal': 'ئۇزۇن مۇددەتلىك ۋەزىپىنىڭ نىشانىنى تەسۋىرلەڭ',
  'hint.goal.active': 'نىشان ئاكتىپ — edit تەھرىرلەش / pause ۋاقىتلىق توختىتىش / resume داۋاملاشتۇرۇش / clear تازىلاش',
  'placeholder.plan': 'پىلان ھاسىل قىلىش ئۈچۈن ۋەزىپىڭىزنى تەسۋىرلەڭ',
  'placeholder.default': 'ئۇچۇر ئەۋەتىڭ ياكى ۋەزىپە ئىجرا قىلىڭ، / بۇيرۇقلار، @ ھۆججەت ياكى سېئانسلار',
  'placeholder.unavailable': 'سېئانسنى ئىشلەتكىلى بولمايدۇ',
  'placeholder.parentOffline': 'ئانا سېئانس تورسىز ھالەتتە؛ ئەۋەتىشكە بولمايدۇ، ئەمما يۈرگۈزۈشنى توختىتالايسىز',
  'placeholder.hero': 'قۇرماقچى بولغان نەرسىڭىزنى تەسۋىرلەڭ، / بۇيرۇقلار، @ ھۆججەت ياكى سېئانسلار',
  'placeholder.workspace': 'باشلاش ئۈچۈن خىزمەت بوشلۇقىنى تاللاڭ',
  'placeholder.steerQueue': 'Cmd/Ctrl+Enter ئۆچرەتتىكى بارلىق ئۇچۇرلارنى ئارىغا ئەۋەتىدۇ',
  'input.commands': 'بۇيرۇقلار',
  'input.stop': 'ھاسىل قىلىشنى توختىتىش',
  'input.send': 'ئۇچۇر ئەۋەتىش',
  'input.send.queue': 'ئۆچرەتكە قويۇش',
  'input.send.steer': 'ئارىغا ئەۋەتىش',
  'input.accessMode': 'زىيارەت ھالىتى، ھازىرقى: {name}',
  'attachment.pending': 'ئەۋەتىلىدىغان قوشۇمچىلار',
  'attachment.scrollLeft': 'قوشۇمچىلارنى سولغا سۈرۈش',
  'attachment.scrollRight': 'قوشۇمچىلارنى ئوڭغا سۈرۈش',
  'attachment.dropTitle': 'ھۆججەت ياكى سۈرەتلەرنى بۇ يەرگە سۆرەپ قوشۇڭ',
  'attachment.dropDesc': 'سۈرەت چېكى: ئەڭ كۆپ {count} دانە، ھەر بىرى {size}',
  'attachment.dropBlocked': 'ھازىرچە ھۆججەت ياكى سۈرەت قوشقىلى بولمايدۇ',
  'image.pending': 'ئەۋەتىلىدىغان سۈرەتلەر',
  'image.openOriginal': 'ئەسلى سۈرەتنى كۆرۈش',
  'image.openOriginalLabel': '{label}، ئەسلى سۈرەتنى كۆرۈش ئۈچۈن چېكىڭ',
  'image.remove': '{name} سۈرىتىنى چىقىرىۋېتىش',
  'image.original': 'ئەسلى سۈرەت',
  'image.label': 'سۈرەت',
  'image.loadFailed': 'سۈرەت يۈكلەش مەغلۇپ بولدى؛ قايتا سىناش ئۈچۈن چېكىڭ',
  'image.loading': 'سۈرەت يۈكلىنىۋاتىدۇ…',
  'image.preview': 'ئەسلى سۈرەتنى ئالدىن كۆرۈش',
  'image.closePreview': 'ئەسلى سۈرەت ئالدىن كۆرۈشنى يېپىش',
  'image.unsupportedType': 'پەقەت PNG، JPG، WebP، GIF فورماتىدىكى سۈرەتلەرلا قوللىنىلىدۇ',
  'image.tooMany': 'بىر ئۇچۇرغا ئەڭ كۆپ {count} سۈرەت قوشقىلى بولىدۇ',
  'image.fileTooLarge': 'ھەر بىر سۈرەت {size} دىن كىچىك بولۇشى كېرەك',
  'image.totalTooLarge': 'سۈرەتلەرنىڭ ئومۇمىي چوڭلۇقى {size} دىن ئېشىپ كەتتى؛ بەزى سۈرەتلەرنى چىقىرىۋېتىپ قايتا سىناڭ',
  'image.tooManyPixels': 'سۈرەتنىڭ ئېنىقلىقى بەك يۇقىرى؛ قىسىپ قايتا سىناڭ',
  'image.dimensionTooLarge': 'سۈرەتنىڭ كەڭلىك-ئېگىزلىكى ئەڭ كۆپ {size}px بولۇشى كېرەك؛ كىچىكلىتىپ قايتا سىناڭ',
  'image.modelUnsupported': 'ھازىرقى مودېل سۈرەتنى قوللىمايدۇ؛ سۈرەتنى قوللايدىغان مودېلغا ئالماشتۇرۇڭ',
  'image.sendFailed': 'سۈرەت ئەۋەتىش مەغلۇپ بولدى ({reason})؛ سۈرەتلەرنى قايتا قوشۇپ سىناڭ',
  'file.attach': 'قوشۇمچە قوشۇش',
  'file.pending': 'ئەۋەتىلىدىغان ھۆججەتلەر',
  'file.remove': '{name} ھۆججىتىنى چىقىرىۋېتىش',
  'file.uploading': 'يۈكلىنىۋاتىدۇ…',
  'file.uploadFailed': 'يۈكلەش مەغلۇپ بولدى؛ قايتا سىناش ئۈچۈن چېكىڭ',
  'file.retry': '{name} نى قايتا يۈكلەش',
  'file.stillUploading': 'ھۆججەتلەر تېخى يۈكلىنىۋاتىدۇ؛ يۈكلەش تاماملانغاندىن كېيىن ئەۋەتىڭ',
  'file.sessionUnavailable': 'سېئانسنى ئىشلەتكىلى بولمايدۇ؛ ھۆججەت يۈكلىگىلى بولمايدۇ',
  'file.notStaged': 'ھۆججەت تېخى يۈكلىنىپ بولمىدى؛ قايتا قوشۇپ سىناڭ',
  'file.label': 'ھۆججەت',
  'context.aria': 'كونتېكىستنىڭ {percent} ى ئىشلىتىلدى',
  'context.used': 'كونتېكىست ئىشلىتىلدى',
  'context.system': 'سىستېما كۆرسەتمىسى',
  'context.tools': 'قورال ئېنىقلىمىلىرى',
  'context.messages': 'سۆھبەت ئۇچۇرلىرى',
  'settings.enter.title': 'ئالدىراش چاغدىكى ئەۋەتىش ھەرىكىتى',
  'settings.enter.description': 'ۋاكالەتچى ئىجرا بولۇۋاتقاندا Enter ۋە ئەۋەتىش كۇنۇپكىسىنىڭ ھەرىكىتى؛ Cmd/Ctrl+Enter باشقا ھەرىكەتنى ئىشلىتىدۇ',
  'settings.enter.queue': 'ئۆچرەتكە قويۇش',
  'settings.enter.steer': 'ئارىغا ئەۋەتىش',
  'access.preset.readOnly': 'پەقەت ئوقۇش',
  'access.preset.workspaceWrite': 'خىزمەت بوشلۇقىدا ئۆزگەرتىش',
  'access.preset.fullAccess': 'تولۇق ھوقۇق',
  'access.confirm.title': 'تولۇق ھوقۇقنى قوزغىتامسىز؟',
  'access.confirm.description': 'تولۇق ھوقۇق قوزغىتىلسا، ۋاكالەتچى تەستىقلاش قەدەملىرىنى ئازايتىپ، سەزگۈر مەشغۇلاتلار، ھۆججەت ئۆزگەرتىش ياكى سىرتقى بۇيرۇقلارنى ئۆز ئىچىگە ئالغان تېخىمۇ كۆپ مەشغۇلاتنى بىۋاسىتە ئىجرا قىلالايدۇ. پەقەت ھازىرقى ۋەزىپىگە ئىشەنگەندىلا ئىشلىتىڭ.',
  'access.confirm.acknowledge': 'خەۋپنى چۈشەندىم، داۋاملاشتۇرۇشقا رازى',
  'access.confirm.cancel': 'بىكار قىلىش',
  'access.confirm.enable': 'تولۇق ھوقۇقنى قوزغىتىش',
  'hero.headline': 'نامەلۇم دۇنياغا سەپەر',
  'hero.preview': 'ئالدىن كۆرۈش نۇسخىسى',
  'hero.chooseWorkspace': 'خىزمەت بوشلۇقىنى تاللاش',
  'session.hierarchy': 'سېئانس قاتلىمى',
  'todo.title': 'ۋەزىپە تىزىمى',
  'todo.progress.done': '{done} تاماملاندى',
  'todo.progress.active': '{active} داۋاملاشماقتا',
  'todo.progress.pending': '{pending} ساقلىنىۋاتىدۇ',
  'todo.rowTitle': 'ۋەزىپە تىزىمىنى يېڭىلاش',
  'todo.completed': '{done}/{total} تاماملاندى',
  'command.attachmentsUnsupported': '/{command} قوشۇمچىنى قوبۇل قىلمايدۇ؛ ئاۋۋال قوشۇمچىنى چىقىرىۋېتىڭ',
  'ask.rowTitle': 'سوئال سوراش',
  'ask.waiting': 'جاۋاب كۈتۈلۈۋاتىدۇ',
  'ask.cancelled': 'بىكار قىلىندى',
  'ask.cancelledDetail': 'بۇ سوئال توپلىمى جاۋاب يوللانمىسىن بىكار قىلىندى.',
  'ask.interrupted': 'ئۈزۈلدى',
  'ask.interruptedDetail': 'بۇ سوئال توپلىمى جاۋاب يوللانمىسىن ئۈزۈلۈپ قالدى.',
  'ask.answered': '{answered}/{total} جاۋاب بېرىلدى',
  'ask.skipped': 'جاۋاب بېرىلمىدى',
  'bash.running': 'ئىجرا بولۇۋاتىدۇ',
  'bash.failed': 'مەغلۇپ بولدى',
  'bash.stopped': 'توختىتىلدى',
  'row.running': 'ئىجرا بولۇۋاتىدۇ',
  'row.failed': 'مەغلۇپ بولدى',
  'row.stopped': 'توختىتىلدى',
  'row.input': 'كىرگۈزۈش',
  'row.output': 'چىقىرىش',
  'row.inspect': 'كۆرۈش',
  'tool.title.search': 'ئىزدەش',
  'tool.title.read': 'ئوقۇش',
  'tool.title.bash': 'Bash',
  'tool.title.write': 'يېزىش',
  'tool.title.edit': 'تەھرىرلەش',
  'tool.title.code': 'كود',
  'tool.title.generic': 'قورال چاقىرىش',
  'tool.title.inspect': 'كۆرۈش',
  'tool.title.runCordis': 'Cordis قىستۇرمىسىنى ئىجرا قىلىش',
  'tool.title.stopCordis': 'Cordis قىستۇرمىسىنى توختىتىش',
  'tool.title.removeCordis': 'Cordis قىستۇرمىسىنى چىقىرىۋېتىش',
  'tool.title.pwsh': 'Pwsh',
  'tool.title.readImage': 'سۈرەت ئوقۇش',
  'tool.title.grep': 'Grep',
  'tool.title.glob': 'Glob',
  'tool.title.webSearch': 'تور ئىزدەش',
  'tool.title.webFetch': 'تور بەت ئېلىش',
  'diff.files.one': '{count} ھۆججەت',
  'diff.files.other': '{count} ھۆججەت',
  'diff.collapseAria': 'پەرقنى قاتلاش',
  'diff.expandAria': 'قالغان {count} قۇر پەرقنى يېيىش',
  'diff.expandRest': '… قالغان {count} قۇر',
  'read.window': '{shown} / {total} قۇر كۆرسىتىلدى',
  'read.collapseAria': 'مەزمۇننى قاتلاش',
  'read.expandAria': 'قالغان {count} قۇرنى يېيىش',
  'read.expandRest': '… قالغان {count} قۇر',
  'search.paths': '{shown} يول',
  'search.paths.truncated': '{shown} / جەمئىي {total} يول كۆرسىتىلدى',
  'search.matches': '{shown} جاي ماس كەلدى · {files} ھۆججەت',
  'search.matches.truncated': '{shown} / جەمئىي {total} جاي ماس كەلدى · {files} ھۆججەت',
  'search.noResults': 'نەتىجە يوق',
  'search.collapseAria': 'نەتىجىلەرنى قاتلاش',
  'search.expandAria': 'قالغان {count} قۇر نەتىجىنى يېيىش',
  'search.expandRest': '… قالغان {count} قۇر',
  'web.noResults': 'نەتىجە تېپىلمىدى',
  'web.sourcesTruncated': 'مەنبە تىزىملىكى قىسقارتىلدى',
  'web.http': 'HTTP',
  'web.contentTruncated': 'مەزمۇن قىسقارتىلدى',
  'details.running': 'ئىجرا بولۇۋاتىدۇ…',
  'queue.count': '{n} ئۆچرەتتىكى ئۇچۇر',
  'queue.sending': 'ئەۋەتىلىۋاتىدۇ…',
  'queue.image': 'ئۆچرەتتىكى ئۇچۇر سۈرىتى',
  'queue.file': 'ئۆچرەتتىكى ھۆججەت {name}',
  'queue.edit': 'ئۆچرەتتىكى ئۇچۇرنى تەھرىرلەش',
  'queue.edit.unsupported': 'تېكىستسىز مەزمۇن بار؛ تەھرىرلەشنى تېخى قوللىمايدۇ',
  'queue.save': 'ئۆچرەتتىكى ئۇچۇرنى ساقلاش',
  'queue.cancelEdit': 'تەھرىرلەشنى بىكار قىلىش',
  'queue.remove': 'ئۆچرەتتىكى ئۇچۇرنى ئۆچۈرۈش',
  'queue.steer': 'ئارىغا ئەۋەتىش',
  'queue.steer.unavailable': 'پەقەت ۋاكالەتچى ئىجرا بولۇۋاتقاندا ئارىغا ئەۋەتكىلى بولىدۇ',
  'queue.editFailed': 'تەھرىرلەش مەغلۇپ بولدى: بۇ ئۇچۇر ئەۋەتىلىشكە باشلىغان بولۇشى مۇمكىن.',
  'queue.removeFailed': 'ئۆچۈرۈش مەغلۇپ بولدى: بۇ ئۇچۇر ئەۋەتىلىشكە باشلىغان بولۇشى مۇمكىن.',
  'queue.steerFailed': 'ئارىغا ئەۋەتىش مەغلۇپ بولدى. قايتا سىناڭ.',
  'terminal.signal': 'سىگنال {signal}',
  'terminal.exitCode': 'چىقىش كودى {code}',
  'terminal.running': 'ئىجرا بولۇۋاتىدۇ',
  'terminal.failed': 'مەغلۇپ بولدى',
  'terminal.done': 'تاماملاندى',
  'terminal.noOutput': 'چىقىرىش يوق',
  'terminal.collapseAria': 'چىقىرىشنى قاتلاش',
  'terminal.expandAria': 'قالغان {n} قۇر چىقىرىشنى يېيىش',
  'terminal.expandRest': '… قالغان {n} قۇر',
  'terminal.sendInput': '(كىرگۈزۈشنى ئەۋەتىش)',
  'terminal.session': 'تېرمىنال {sessionId}',
}

var ugChat = {
  'view.chat': 'سۆھبەت',
  'number.groupSeparator': ',',
  'duration.compactSeconds': '{seconds} سېكۇنت',
  'duration.compactMinutes': '{minutes} مىنۇت {seconds} سېكۇنت',
  'duration.milliseconds': '{milliseconds} مىللىسېكۇنت',
  'stats.counts': '{turns} نۆۋەت {steps} قەدەم',
  'stats.cacheHit': 'غەملەك ئۇرۇشى {percent}%',
  'stats.dialog.title': 'سېئانس ستاتىستىكىسى',
  'stats.dialog.usageTitle': 'توكېن ئىشلىتىلىشى',
  'stats.dialog.llmTime': 'مودېل ۋاقتى',
  'stats.dialog.toolTime': 'قورال چاقىرىش ۋاقتى',
  'stats.dialog.ttft': 'تۇنجى توكېن ئوتتۇرىچە ۋاقتى (TTFT)',
  'stats.dialog.speed': 'چىقىرىش سۈرئىتى (TPS)',
  'chat.loadingHistory': 'تارىخ يۈكلىنىۋاتىدۇ…',
  'chat.loadError': 'تارىخنى يۈكلەش مەغلۇپ بولدى: {message} ({code})',
  'chat.loadOlder': 'تېخىمۇ بۇرۇنقىنى يۈكلەش',
  'chat.toBottom': 'ئاستىغا قايتىش',
  'chat.deepDiving': 'چوڭقۇر ئىزدىنىۋاتىدۇ...',
  'chat.turnNavigation.label': 'نۆۋەت يۆتكىلىشى',
  'chat.turnNavigation.jump': '{turn}-نۆۋەتكە ئاتلاش',
  'chat.turnNavigation.jumpLoad': 'يۈكلەپ {turn}-نۆۋەتكە ئاتلاش',
  'chat.turnNavigation.turn': '{turn}-نۆۋەت',
  'settings.transcript.title': 'سۆھبەت كۆرۈنۈشى',
  'settings.transcript.description': 'تاماملانغان نۆۋەتلەردىكى جەريان مەزمۇنىنى كونترول قىلىدۇ',
  'settings.transcript.normal': 'ئۆلچەملىك',
  'settings.transcript.compact': 'ئىخچام',
  'fileOpen.title': 'ھۆججەتنى ئاچقىلى بولمىدى',
  'fileOpen.unknown': 'بۇ ھۆججەتنى ئاچقىلى بولمىدى',
  'message.extraBlock': 'قوشۇمچە مەزمۇن بۆلىكى',
  'message.systemPrompt': 'سىستېما كۆرسەتمىسى',
  'message.systemPromptUpdate': 'سىستېما كۆرسەتمىسى يېڭىلاندى',
  'message.contextInjection': 'كونتېكىست قىستۇرۇش',
  'message.contextRecall': 'سېئانس ئارا ئەسلىيەلەش',
  'message.referenceSummary': 'نەقىل سېئانسى · {labels}',
  'message.referenceSeparator': '،',
  'message.context.instructions.loaded': 'يۈكلەندى',
  'message.context.instructions.added': 'قوشۇلدى',
  'message.context.instructions.updated': 'يېڭىلاندى',
  'message.context.instructions.removed': 'چىقىرىۋېتىلدى',
  'message.context.catalog.replaced': 'ئالماشتۇرۇش مۇندەرىجىسى',
  'message.context.catalog.more': '… يەنە {count} تال بار',
  'message.context.snapshot.supersedes': 'ئالدىنقى كۆرۈنۈشلەرنىڭ ئورنىنى ئالىدۇ',
  'message.context.relay.from': '{session} سېئانسىدىن كەلدى',
  'message.context.recall.counts': '{retained} تال ساقلاندى · {omitted} تال قالدۇرۇلدى',
  'message.context.recall.truncated': 'قىسقارتىلدى',
  'message.compaction': 'كونتېكىست قىسىلدى',
  'message.compaction.running': 'قىسىلىۋاتىدۇ…',
  'message.compaction.completed': '{items} تال تارىخىي خاتىرە قىسىلدى (تەخمىنەن {tokens} توكېن)',
  'message.compaction.expand': 'قىسىش خۇلاسىسىنى كۆرۈش',
  'message.compaction.unavailable': 'قىسىش خۇلاسىسىنى ئىشلەتكىلى بولمايدۇ',
  'message.compaction.commandTitle': 'compact',
  'message.think': 'ئويلىنىش',
  'message.unknownSurface': 'نامەلۇم surface ۋەقەسى: {type}',
  'message.unknownBlock': 'نامەلۇم مەزمۇن بۆلىكى',
  'message.turnProcess.toolCalls.one': '{count} قېتىم قورال چاقىرىش',
  'message.turnProcess.toolCalls.other': '{count} قېتىم قورال چاقىرىش',
  'message.turnProcess.messages.one': '{count} تال ئۇچۇر',
  'message.turnProcess.messages.other': '{count} تال ئۇچۇر',
  'message.turnProcess.subagents.one': '{count} تارماق ۋاكالەتچى',
  'message.turnProcess.subagents.other': '{count} تارماق ۋاكالەتچى',
  'message.turnProcess.thoughtForAWhile': 'ئويلىنىپ بولدى',
  'message.turnProcess.separator': ' · ',
  'message.stopped': 'توختىتىلدى',
  'message.branch': 'يېڭى سۆھبەتكە شاخلىنىش',
  'message.branchUnavailable': 'پەقەت تاماملانغان نۆۋەتنىڭ ئەڭ ئاخىرقى ئۇچۇرىدىن شاخلىنىشقا بولىدۇ',
  'message.retry.active': 'مودېل تەلىپىنى قايتا سىنىۋاتىدۇ',
  'message.retry.cancelled': 'مودېل تەلىپىنى قايتا سىناش بىكار قىلىندى',
  'message.retry.started': 'مودېل تەلىپى قايتا سىنالدى',
  'message.retry.scheduled': 'مودېل تەلىپىنى قايتا سىناشنى كۈتۈۋاتىدۇ',
  'message.retry.status': '{label} ({retry}/{maximum}) · {seconds}s',
  'message.retry.delay': 'قايتا سىناش كېچىكتۈرۈلۈشى: ',
  'message.retry.failure': 'مەغلۇبىيەت سەۋەبى: ',
  'message.failure.auth': 'API ئاچقۇچى ئىناۋەتسىز',
  'message.turnError': 'بۇ نۆۋەت مەغلۇپ بولدى',
  'message.maxTokens': 'چىقىرىش توكېن چېكىگە يەتتى',
  'message.maxTokens.hint': 'جاۋاب قىسقارتىلدى، ئالدىنقى چىقىرىش سۆھبەتتە ساقلاندى. «داۋاملاشتۇر» دەپ ئەۋەتسىڭىز مودېل داۋام قىلالايدۇ.',
  'message.ranFor': '{duration} ۋاقىت سەرپ قىلىندى',
  'message.tokensPerSecond': '{tps} tok/s',
  'message.turnUsage.title': 'بۇ نۆۋەتنىڭ ئىشلىتىلىشى',
  'message.turnUsage.consumed': 'ئىشلىتىش {total}',
  'message.turnUsage.model': 'تەمىنلىگۈچى / مودېل',
  'message.turnUsage.cacheHit': 'غەملەك ئۇرۇشى',
  'message.turnUsage.input': 'غەملەكلەنمىگەن كىرگۈزۈش',
  'message.turnUsage.cacheRead': 'غەملەكتىن ئوقۇش',
  'message.turnUsage.cacheWrite': 'غەملەككە يېزىش',
  'message.turnUsage.output': 'چىقىرىش',
  'message.turnUsage.reasoning': ' (ئىچىدە {tokens} خۇلاسە چىقىرىش)',
  'message.turnUsage.count': '{count} tok',
  'message.turnTime.title': 'بۇ نۆۋەتنىڭ ۋاقتى ۋە سۈرئىتى',
  'message.turnTime.duration': 'بۇ نۆۋەتنىڭ ئومۇمىي ۋاقتى',
  'message.turnTime.speed': 'چىقىرىش سۈرئىتى (TPS)',
  'message.turnTime.ttft': 'تۇنجى توكېن ۋاقتى (TTFT)',
  'duration.seconds': '{seconds} سېكۇنت',
  'duration.minutes': '{minutes} مىنۇت {seconds} سېكۇنت',
  'command.running': 'ئىجرا بولۇۋاتىدۇ…',
  'command.failed': 'بۇيرۇق مەغلۇپ بولدى',
  'command.done': 'تاماملاندى',
  'command.title': 'بۇيرۇق',
  'row.running': 'ئىجرا بولۇۋاتىدۇ',
  'row.failed': 'مەغلۇپ بولدى',
  'json.truncated': '… قىسقارتىلدى، جەمئىي {total} بەلگە',
  'clock.md': '{m}-ئاي {d}-كۈن',
  'clock.ymd': '{y}-يىل {m}-ئاي {d}-كۈن',
}

var ugWorkspace = {
  'group.ungrouped': 'گۇرۇپپىسىز',
  'session.new': 'يېڭى سېئانس',
  'section.workspaces': 'خىزمەت بوشلۇقلىرى',
  'section.sessions': 'سېئانسلار',
  'viewOptions.label': 'كۆرۈنۈش تاللانمىلىرى',
  'groupBy.label': 'گۇرۇپپىلاش ئۇسۇلى',
  'groupBy.workspace': 'خىزمەت بوشلۇقى بويىچە',
  'groupBy.flat': 'بىر تىزما',
  'orderBy.label': 'تەرتىپلەش ئۇسۇلى',
  'orderBy.manual': 'قولدا تەرتىپلەش',
  'orderBy.updated': 'ئەڭ يېقىن يېڭىلانغان',
  'sessions.expand': 'قالغان {n} سېئانسنى كۆرسەت',
  'sessions.collapse': 'ئاز كۆرسىتىش',
  'empty.none': 'تېخى سېئانس يوق',
  'empty.noMatches': 'ماس كېلىدىغان نەتىجە يوق',
  'workspace.add': 'خىزمەت بوشلۇقى قوشۇش',
  'search.sessions.aria': 'سېئانسلارنى ئىزدەش',
  'search.placeholder': 'سېئانسلارنى ئىزدەش…',
  'search.clear': 'ئىزدەشنى تازىلاش',
  'search.results.aria': 'ئىزدەش نەتىجىسى',
  'search.pending': 'سېئانس تارىخى ئىزدىلىۋاتىدۇ…',
  'search.unavailable': 'مەزمۇن ئىزدەش ھازىرچە ئىشلىمەيدۇ. پەقەت ئىسىم ماسلىقى كۆرسىتىلىدۇ.',
  'search.noMatches': 'ماس كېلىدىغان سېئانس يوق',
  'search.hasMore': 'پەقەت ئالدىنقى {n} نەتىجە كۆرسىتىلدى. ئىزدەش دائىرىسىنى تارايتىڭ.',
  'menu.addWorkspace': 'خىزمەت بوشلۇقى قوشۇش…',
  'picker.loading': 'خىزمەت بوشلۇقلىرى يۈكلىنىۋاتىدۇ…',
  'conflict.named': '«{name}» دېگەن خىزمەت بوشلۇقى ئاللىقاچان مەۋجۇت.',
  'folderError.title': 'ھۆججەت قىسقۇچىنى ئاچقىلى بولمىدى',
  'folderError.retry': 'قايتا تاللاش',
  'rename': 'ئاتىنى ئۆزگەرتىش',
  'rename.workspace.title': 'خىزمەت بوشلۇقىنىڭ ئاتىنى ئۆزگەرتىش',
  'rename.session.title': 'سېئانسنىڭ ئاتىنى ئۆزگەرتىش',
  'field.workspaceName': 'خىزمەت بوشلۇقى ئاتى',
  'field.sessionName': 'سېئانس ئاتى',
  'delete.workspace': 'خىزمەت بوشلۇقىنى ئۆچۈرۈش',
  'delete.desc': '«{name}» خىزمەت بوشلۇقى تىزىمىدىن چىقىرىۋېتىلىدۇ. ھۆججەت قىسقۇچى ۋە سېئانس جۇرناللىرى ساقلىنىدۇ. ئۇنىڭ سېئانلىرى «گۇرۇپپىسىز» دا كۆرۈنىدۇ.',
  'delete.pending': 'خىزمەت بوشلۇقى ئۆچۈرۈلۈۋاتىدۇ…',
  'menu.fork': 'سېئانسنى ئايرىش',
  'menu.archiveSession': 'سېئانسنى ئارخىپلاش',
  'sessions.count.one': '{n} سېئانس',
  'sessions.count.other': '{n} سېئانس',
  'actions.workspace.aria': '«{name}» خىزمەت بوشلۇقىنىڭ مەشغۇلاتلىرى',
  'actions.session.aria': '«{name}» سېئانسىنىڭ مەشغۇلاتلىرى',
  'actions.newSession.aria': '«{name}» دا يېڭى سېئانس قۇرۇش',
  'status.running': 'داۋاملاشماقتا',
  'status.subagentsRunning.one': '{n} تارماق ۋاكالەتچى ئىجرا بولۇۋاتىدۇ',
  'status.subagentsRunning.other': '{n} تارماق ۋاكالەتچى ئىجرا بولۇۋاتىدۇ',
  'status.idle': 'بىكار',
  'status.waitingApproval': 'تەستىقنى كۈتۈۋاتىدۇ',
  'status.planReview': 'پىلان تەكشۈرۈشنى كۈتۈۋاتىدۇ',
  'status.waitingAnswer': 'جاۋاب كۈتۈۋاتىدۇ',
  'status.completed': 'تاماملاندى',
  'schedule.active': 'ئاكتىپ ۋاقىتلىق ۋەزىپە بار',
  'hover.created': '{time} دا قۇرۇلدى',
  'hover.copied': 'كۆچۈرۈلدى',
  'date.ymd': '{y}-يىل {m}-ئاي {d}-كۈن',
  'time.now': 'ھازىرلا',
  'time.minutes': '{n} مىنۇت',
  'time.hours': '{n} سائەت',
  'time.days': '{n} كۈن',
  'time.months': '{n} ئاي',
  'time.years': '{n} يىل',
  'time.ago': '{t} ئىلگىرى',
}

var ugSidebar = {
  'session.new': 'يېڭى سېئانس',
  'session.new.label': 'يېڭى سېئانس قۇرۇش',
  'toggle.open': 'يان بالداقنى ئېچىش',
  'toggle.collapse': 'يان بالداقنى قاتلاش',
  'panels.label': 'ئومۇمىي تاختىلار',
}

var ugSidebarFiles = {
  'type.label': 'ھۆججەتلەر',
  'guide.title': 'خىزمەت بوشلۇقى ھۆججەتلىرى',
  'guide.description': 'بۇ سېئانسنىڭ خىزمەت بوشلۇقىدىكى ھۆججەتلەرنى كۆرۈش',
  'loading': 'ئوقۇلۇۋاتىدۇ…',
  'empty': 'بوش مۇندەرىجە',
  'truncated': 'تۈرلەر بەك كۆپ، پەقەت بىر قىسمى كۆرسىتىلدى.',
  'noWorkspace': 'بۇ سېئانسنىڭ خىزمەت بوشلۇقى مۇندەرىجىسى يوق.',
  'reload': 'قايتا ئوقۇش',
  'entry.other': 'بۇ ھۆججەت ياكى مۇندەرىجە ئەمەس، ئېچىشقا بولمايدۇ.',
  'error.notFound': 'بۇ مۇندەرىجە يوقاپ كەتكەن. يۆتكەلگەن ياكى ئۆچۈرۈلگەن بولۇشى مۇمكىن.',
  'error.outsideWorkspace': 'بۇ مۇندەرىجە خىزمەت بوشلۇقىنىڭ سىرتىدا، يان بالداق ئۇنى ئوقۇمايدۇ.',
  'error.notDirectory': 'بۇ مۇندەرىجە ئەمەس.',
  'error.unavailable': 'ئوقۇش مەغلۇپ بولدى: {message}',
}

var ugSidebarRight = {
  'chrome.expand': 'يان بالداقنى ئېچىش',
  'chrome.expandAria': 'ئوڭ يان بالداقنى ئېچىش',
  'chrome.collapse': 'يان بالداقنى قاتلاش',
  'chrome.collapseAria': 'ئوڭ يان بالداقنى قاتلاش',
  'chrome.toFullscreen': 'تولۇق ئېكران',
  'chrome.exitFullscreen': 'تولۇق ئېكراندىن چىقىش',
  'dock.emptyPane': 'بوش تاختا',
  'dock.splitPane': 'بۆلۈش',
  'dock.splitPaneDisabled': 'ئىككى بۆلەك چەككە يەتتى',
  'dock.splitPaneNarrow': 'بالداق كەڭلىكى يېتەرلىك ئەمەس، بالداقنى كېڭەيتىپ ئاندىن بۆلۈڭ',
  'dock.closeTab': 'يېپىش',
  'dock.addTab': 'يېڭى بەتكۈچ',
  'dock.dockFloat': 'يان بالداققا قايتۇرۇش',
  'dock.closeFloat': 'يېپىش',
  'dock.drop.center': 'بۇ يەرگە يۆتكەش',
  'dock.drop.left': 'سول بۆلۈش',
  'dock.drop.right': 'ئوڭ بۆلۈش',
  'dock.drop.top': 'ئۈستى بۆلۈش',
  'dock.drop.bottom': 'ئاستى بۆلۈش',
  'tab.guide.title': 'باشلاش',
  'tab.unavailable': 'بۇ خىل مەزمۇننى كۆرۈش ئۇسۇلى تېخى يوق.',
}

var ugModel = {
  'command.description': 'بۇ سېئانستا ئىشلىتىدىغان مودېلنى تاللاش',
  'option.loadError': 'مۇندەرىجىنى يۈكلەش مەغلۇپ بولدى: {message}',
  'option.deepseekV4Flash.description': 'تېز، ئۈنۈملۈك ۋە تېجەشلىك؛ مەركەزلەشكەن، دائىملىق ياكى پاراللېل ۋەزىپىلەرگە ماس كېلىدۇ.',
  'option.deepseekV4Pro.description': 'تېخىمۇ كۈچلۈك ۋاكالەتچى كودلاش، بىلىم ۋە مۇرەككەپ خۇلاسە چىقىرىش؛ مۇرەككەپ ياكى سۈپەت ئەڭ مۇھىم بولغان ۋەزىپىلەرگە ماس كېلىدۇ، ئەمما تەننەرخى يۇقىرىراق.',
  'trigger.fallback': 'مودېل تاللاش',
  'trigger.loading': 'مودېللار يۈكلىنىۋاتىدۇ…',
  'trigger.selectAria': 'مودېل تاللاش',
  'trigger.aria': 'مودېل تاللاڭ، ھازىرقى {model}',
  'trigger.ariaEffort': 'مودېل تاللاڭ، ھازىرقى {model}، خۇلاسە چىقىرىش دەرىجىسى {effort}',
  'menu.aria': 'مودېل ۋە خۇلاسە چىقىرىش دەرىجىسى',
  'menu.model': 'مودېل',
  'menu.effort': 'خۇلاسە چىقىرىش دەرىجىسى',
  'effort.providerDefault': 'سۈكۈتتىكى',
  'status.loading': 'مودېل تىزىمى يېڭىلىنىۋاتىدۇ…',
  'error.action': 'مودېل مەشغۇلاتى مەغلۇپ بولدى: {message}',
  'action.reload': 'قايتا يۈكلەش',
  'warning.groupLoad': '{name} يۈكلەش مەغلۇپ بولدى: {message}',
  'empty.models': 'ئىشلەتكىلى بولىدىغان مودېل يوق.',
  'blocked.composer': 'ھازىرقى مودېل ئىشلەمەيدۇ — داۋاملاشتۇرۇش ئۈچۈن مودېل تاللاڭ',
  'empty.efforts': 'بۇ مودېل خۇلاسە چىقىرىش دەرىجىسىنى تەمىنلىمەيدۇ.',
}

var ugCommand = {
  'description.compact': 'يۇقىرىقى سۆھبەت مەزمۇنىنى قىسىش',
  'description.export': 'بۇ سېئانسنىڭ مەزمۇنىنى ZIP قىلىپ ئېكسپورت قىلىش',
  'description.feedback': 'بۇ سېئانس ھەققىدە پىكىر يوللاش',
  'description.goal': 'ئۇزۇن مۇددەتلىك ۋەزىپىنىڭ نىشانىنى بەلگىلەش ياكى كۆرۈش',
  'description.permission': 'ھوقۇق ئالدىن سەپلىمىسىنى ئالماشتۇرۇش (قۇم ساندۇقى ھالىتى ۋە تەستىقلاش سىياسىتى)',
  'description.plan': 'پىلان ھالىتىگە كىرىش ياكى چىقىش',
  'search.placeholder': 'ئىزدەش…',
  'search.aria': 'تاللانمىلارنى سۈزۈش',
  'status.loading': 'تاللانمىلار يۈكلىنىۋاتىدۇ…',
  'status.applying': 'قوللىنىلىۋاتىدۇ…',
  'status.empty': 'تاللانما يوق',
  'overlay.aria': '/{command} تاللانمىلىرى',
  'listbox.aria': '/{command} ماس كەلگەنلەر',
  'notice.attachmentsUnsupported': '/{command} قوشۇمچىنى قوبۇل قىلمايدۇ؛ ئاۋۋال قوشۇمچىنى چىقىرىۋېتىڭ',
}

var ugSlashMenu = {
  'command': 'بۇيرۇقلار',
  'skill': 'ماھارەتلەر',
  'subagent': 'تارماق ۋاكالەتچىلەر',
  'loading': 'يۈكلىنىۋاتىدۇ…',
  'drill.aria': 'مۇندەرىجىگە كىرىش',
  'drill.hint': 'مۇندەرىجىگە كىرىش',
  'drill.key': 'Tab',
  'crumbs.aria': 'مۇندەرىجە يولى',
  'suggestions.aria': 'كاندېدات تەكلىپلەرنى قوزغىتىش',
}

var ugSettings = {
  'trigger': 'تەڭشەك',
  'title': 'تەڭشەك',
  'close': 'يېپىش',
  'openDocument': 'سەپلىمە ھۆججىتىنى ئېچىش',
  'openDocument.error': 'سەپلىمە ھۆججىتىنى ئاچقىلى بولمىدى',
  'general.nav': 'ئومۇمىي تەڭشەك',
  'connection.error': 'ئۇلىنىش ئۈزۈلدى',
  'connection.retry': 'دەرھال قايتا ئۇلىنىش',
  'connection.connecting': 'ئاپتوماتىك قايتا ئۇلىنىۋاتىدۇ',
  'connection.connected': 'ئۇلىنىش مۇۋەپپەقىيەتلىك بولدى',
  'connection.reconnect': 'ئۇلىنىش ئۈزۈلدى، دەرھال قايتا ئۇلىنىش ئۈچۈن چېكىڭ',
  'connection.restart': 'ئۇلىنىش ئۈزۈلدى، ئاپتوماتىك قايتا سىنىلىۋاتىدۇ، دەرھال قايتا ئۇلىنىش ئۈچۈن چېكىڭ',
}

var ugSettingsModels = {
  'nav': 'مودېللار',
  'title': 'مودېللار',
  'intro': 'تۆۋەندىكى تەمىنلىگۈچىلەرنىڭ مودېللىرىنى ئىشلىتىش ئۈچۈن API ئاچقۇچلىرىنى كىرگۈزۈڭ.',
  'edit': 'تەھرىرلەش',
  'editProvider': '{provider} نى تەھرىرلەش',
  'remove': 'ئۆچۈرۈش',
  'removeProvider': '{provider} نى ئۆچۈرۈش',
  'deleteTitle': '{provider} نى ئۆچۈرەمسىز؟',
  'deleteDescription': '{provider} نى ئۆچۈرسىڭىز ئۇنىڭ سەپلىمىسى چىقىرىۋېتىلىدۇ. ئۇ ئىشلەتكەن ئىسپات (بار بولسا) باشقا جايدا باشقۇرۇلىدۇ ۋە ساقلىنىپ قالىدۇ.',
  'deleteDescriptionWithCredential': '{provider} نى ئۆچۈرسىڭىز ئۇنىڭ سەپلىمىسى ۋە ساقلانغان API ئاچقۇچى چىقىرىۋېتىلىدۇ.',
  'deleteConfirm': '{provider} نى ئۆچۈرۈش',
  'deleting': '{provider} ئۆچۈرۈلۈۋاتىدۇ…',
  'add': 'تەمىنلىگۈچى قوشۇش',
  'provider': 'تەمىنلىگۈچى',
  'close': 'يېپىش',
  'cancel': 'بىكار قىلىش',
  'apply': 'ساقلاش',
  'applying': 'ساقلىنىۋاتىدۇ…',
  'savedProvider': '{provider} ساقلاندى.',
  'credentialConfigured': 'API ئاچقۇچى سەپلەنگەن',
  'credentialMissing': 'API ئاچقۇچى كەمچىل',
  'readOnly': 'بۇ ئورۇنلاشتۇرۇشنىڭ تەڭشەك ھۆججىتى پەقەت ئوقۇشقا بولىدۇ.',
  'loadFailed': 'تەمىنلىگۈچى مۇندەرىجىسىنى يۈكلەش مەغلۇپ بولدى',
  'conflict': 'بۇ كارتا ئېچىق تۇرغاندا تەڭشەكلەر باشقا جايدا ئۆزگەرتىلىپتۇ. يېپىپ قايتا ئېچىپ، ھازىرقى قىممەتلەر ئۈستىدە تەھرىرلەڭ.',
  'retry': 'قايتا سىناش',
  'keyInput': 'API ئاچقۇچى',
  'keyPlaceholder': 'API ئاچقۇچىنى كىرگۈزۈڭ',
  'keyPlaceholderNative': 'API ئاچقۇچىنى كىرگۈزۈڭ، ياكى بوش قالدۇرۇپ مۇھىت ئارقىلىق دەلىللەشنى ئىشلىتىڭ',
  'keyStored': 'سەپلەنگەن — ئالماشتۇرۇش ئۈچۈن يېڭى قىممەت كىرگۈزۈڭ',
  'keyEnvLocked': 'قوزغىتىش مۇھىتى تەمىنلىگەن (پەقەت ئوقۇش)',
  'customized': 'خاس تەڭشەكلەر',
  'baseUrl': 'API ئادرېسى',
  'baseUrlDefault': 'تەمىنلىگۈچىنىڭ سۈكۈتتىكى ئادرېسى',
  'models': 'مودېل مۇندەرىجىسى',
  'modelsInherited': 'ماسلاشتۇرغۇچنىڭ سۈكۈتتىكى مودېللىرى ئىشلىتىلىۋاتىدۇ',
  'modelsCustomized': 'مودېل مۇندەرىجىسى خاسلاشتۇرۇلدى',
  'resetModels': 'سۈكۈتتىكى مودېللارنى ئەسلىگە كەلتۈرۈش',
  'model': 'مودېل',
  'modelId': 'مودېل ID',
  'modelName': 'كۆرسىتىش ئاتى',
  'modelNamePlaceholder': 'بوش قالدۇرۇلسا مودېل ID ئىشلىتىلىدۇ',
  'contextWindow': 'كونتېكىست كۆزنىكى',
  'contextWindowPlaceholder': 'تەمىنلىگۈچىنىڭ سۈكۈتتىكى قىممىتى ئىشلىتىلىدۇ',
  'maxTokens': 'ئەڭ كۆپ چىقىرىش توكېنى',
  'maxTokensPlaceholder': 'تەمىنلىگۈچىنىڭ سۈكۈتتىكى قىممىتى ئىشلىتىلىدۇ',
  'modelAdvanced': 'سىغىم',
  'addModel': 'مودېل قوشۇش',
  'removeModel': 'مودېلنى ئۆچۈرۈش',
  'modelsEmpty': 'مودېل تاللىغۇچتا ھېچقانداق مودېل كۆرسىتىلمەيدۇ؛ مۇندەرىجىدىن سىرتتىكى ID لارنى يەنىلا بىۋاسىتە ئەۋەتكىلى بولىدۇ.',
  'keyBlank': 'API ئاچقۇچىنى كىرگۈزۈڭ؛ بوش قالدۇرۇلسا ساقلانغان ئاچقۇچ ساقلىنىپ قالىدۇ.',
  'keyBlankNew': 'API ئاچقۇچىنى كىرگۈزۈڭ؛ بۇ تەمىنلىگۈچى باشقا ئۇسۇلدا دەلىللەيدىغان بولسا بوش قالدۇرسىڭىز بولىدۇ.',
  'keyIllegalCharacters': 'بۇ API ئاچقۇچىنىڭ فورماتى خاتا، تەكشۈرۈپ بېقىڭ.',
  'modelIdRequired': 'مودېل ID بوش بولسا بولمايدۇ.',
  'modelIdDuplicate': 'مودېل ID تەكرارلانسا بولمايدۇ.',
  'modelNameInvalid': 'كۆرسىتىش ئاتى بوش بولسا بولمايدۇ.',
  'modelContextInvalid': 'كونتېكىست كۆزنىكى مۇسبەت سان بولۇشى كېرەك، مەسىلەن 131072، 256K ياكى 1M.',
  'modelMaxTokensInvalid': 'ئەڭ كۆپ چىقىرىش توكېنى مۇسبەت سان بولۇشى كېرەك، مەسىلەن 8192، 64K ياكى 1M.',
  'advancedHint': 'قالغان بۆلەكلەر settings.yaml دا؛ ئۇ بۆلەكنى بىۋاسىتە تەھرىرلەڭ.',
  'modelCapacityInvalid': 'سىغىم سان بولۇشى كېرەك، K ياكى M قوشۇمچىسى قوشسىڭىز بولىدۇ.',
  'modelDuplicate': 'ھەر بىر مودېل ID پەقەت بىر قېتىم كۆرۈنەلەيدۇ.',
  'modelContextWindow': 'كونتېكىست كۆزنىكى',
  'modelMaxTokens': 'ئەڭ كۆپ چىقىرىش توكېنى',
  'fetchModels': 'ئىشلەتكىلى بولىدىغان مودېللارنى ئېلىش',
  'fetching': 'تەمىنلىگۈچىدىن سورىلىۋاتىدۇ…',
  'fetchNeedsBaseUrl': 'ئاۋۋال API ئادرېسىنى تولدۇرۇپ ئاندىن ئېلىڭ.',
  'fetchEmpty': 'بۇ تەمىنلىگۈچى ھېچقانداق مودېل تىزىملىمىدى، قولدا قوشۇڭ.',
  'fetchTitle': 'قوشىدىغان مودېللارنى تاللاڭ',
  'fetchDescription': 'تۆۋەندىكىلەر بۇ تەمىنلىگۈچىنىڭ ئىشلەتكىلى بولىدىغان مودېللىرى، قوشىدىغانلىرىنى بەلگىلەڭ.',
  'fetchSearch': 'مودېل ئىزدەش',
  'fetchNoMatches': 'ماس كېلىدىغان مودېل يوق.',
  'fetchSelectAll': 'ھەممىنى تاللاش',
  'fetchDeselectAll': 'تاللاشنى بىكار قىلىش',
  'fetchAdopt': 'تاللانغانلارنى قوشۇش',
  'customAdd': 'خاس تەمىنلىگۈچى قوشۇش',
  'customTitle': 'خاس تەمىنلىگۈچى',
  'customTag': 'خاس',
  'customRoute': 'Provider ID',
  'customRouteHint': 'كىچىك ھەرپ بىلەن باشلانغان بەلگە؛ تەلەپلەردە بۇ تەمىنلىگۈچىنى ئۆزگىچە ئاتايدۇ ھەم ئىسپات ئاتى ھاسىل قىلىشقا ئىشلىتىلىدۇ.',
  'customRouteInvalid': 'كىچىك ھەرپ بىلەن باشلىنىشى كېرەك؛ كېيىن كىچىك ھەرپلەر، سانلار ۋە تىرىلەرنى ئىشلەتسە بولىدۇ.',
  'customRouteTaken': 'بۇ ID نى ئاللىقاچان بىر تەمىنلىگۈچى ئىشلىتىۋاتىدۇ.',
  'customDisplayName': 'كۆرسىتىش ئاتى',
  'customApi': 'API كېلىشىمى',
  'customApiUnset': 'تاللانمىدى',
  'customNeedsBaseUrl': 'خاس تەمىنلىگۈچىگە API ئادرېسى تولدۇرۇش زۆرۈر.',
  'customBaseUrlInvalid': 'ئىناۋەتلىك HTTP ياكى HTTPS ئادرېسىنى كىرگۈزۈڭ.',
  'customNeedsModels': 'خاس تەمىنلىگۈچىدە ئاز دېگەندە بىر مودېل بولۇشى كېرەك.',
  'customBaseUrlPlaceholder': 'https://gateway.example/v1',
  'settingsPathUnresolvable': 'تەڭشەك يولىنى ھەل قىلغىلى بولمىدى',
  'create': 'تەمىنلىگۈچى قۇرۇش',
  'creating': 'قۇرۇلۇۋاتىدۇ…',
  'welcomeTitle': 'ئىچكى سىناق ئۇقتۇرۇشى',
  'welcomeBody': 'DeepSeek Harness نىڭ ھازىرقى 0.1 نۇسخىسى تېخى Harness ئاچقۇچىلارغا يۈزلەنگەن سىناق باسقۇچىدا بولۇپ، نۇرغۇن جايلىرىنى داۋاملىق ياخشىلاش ۋە سىلىقلاش زۆرۈر. ئاچقۇچىلارنىڭ پىكىر-تەكلىپلىرىنى قارشى ئالىمىز. DeepSeek Harness نىڭ ئاساسىي قىستۇرمىلىرى ۋە ئاساسىي API لىرى يېقىن ئارىدا تېز سۈرئەتتە تەكرار يېڭىلىنىپ، داۋاملىق تەرەققىي قىلىدۇ دەپ ئۈمىد قىلىمىز.\n\nبىز ئوچۇق مەنبە، ئوچۇق، قايتا ئىشلىتىشكە ۋە بىرىكتۈرۈشكە بولىدىغان ئۇل ئەسلىھە ئۈستىدە، دۇنيادىكى ئاچقۇچىلار بىلەن بىرلىكتە ئەقىلنىڭ چېگراسىنى ئىزدەشنى ئارزۇ قىلىمىز. بارلىق Harness ئاچقۇچىلىرىنىڭ DSH قىستۇرما ئېكولوگىيەسىگە قاتنىشىشىنى قارشى ئالىمىز.',
  'welcomeContinue': 'داۋاملاشتۇرۇش',
  'welcomeError': 'تەستىق ھالىتىنى ھازىرچە ساقلىغىلى بولمىدى، قايتا سىناڭ.',
  'onboardingTitle': 'باشلاش ئۈچۈن API ئاچقۇچى قوشۇڭ',
  'onboardingDescription': 'DeepSeek رەسمىي تەمىنلىگۈچىسىنى سەپلەپ، دەرھال ئىشلەشكە باشلاڭ.',
  'onboardingLater': 'كېيىن سەپلەش',
  'onboardingSave': 'ساقلاپ داۋاملاشتۇرۇش',
  'onboardingSaving': 'ساقلىنىۋاتىدۇ…',
  'keyRequired': 'داۋاملاشتۇرۇش ئۈچۈن API ئاچقۇچىنى كىرگۈزۈڭ.',
}

var ugSettingsPlugins = {
  'nav': 'قىستۇرمىلار',
  'title': 'قىستۇرمىلار',
  'intro': 'بۇ ئورۇنلاشتۇرۇشتا قاچىلانغان قىستۇرمىلارنى سەپلەش ۋە كۆرۈش.',
  'tabs': 'قىستۇرما كۆرۈنۈشلىرى',
  'configurableTab': 'قىستۇرما سەپلىمىسى',
  'empty': 'بۇ ئورۇنلاشتۇرۇشتا ھېچقانداق قىستۇرما تەڭشىكى ئوچۇق ئەمەس.',
  'overridden': 'قاپلانغان',
  'reset': 'سۈكۈتتىكىگە قايتۇرۇش',
  'readOnly': 'بۇ ئورۇنلاشتۇرۇشنىڭ تەڭشەكلىرى پەقەت ئوقۇشقا بولىدۇ.',
  'expand': 'تەڭشەكلەرنى كۆرسىتىش',
  'collapse': 'تەڭشەكلەرنى يوشۇرۇش',
  'save': 'ساقلاش',
  'saving': 'ساقلىنىۋاتىدۇ…',
  'discard': 'ئۆزگەرتىشلەردىن ۋاز كېچىش',
  'unsaved': 'ساقلانمىغان',
  'saveFailed': 'بۇ ئورۇنلاشتۇرۇش بۇ قىممەتلەرنى قوبۇل قىلمىدى؛ تۈزىتىش ئۈچۈن ساقلاپ قويۇلدى.',
  'invalidNumber': 'سان كىرگۈزۈڭ؛ بوش قالدۇرۇلسا سۈكۈتتىكى قىممەت ئىشلىتىلىدۇ.',
  'bashTitle': 'قاپ',
  'bashDescription': 'ۋاكالەتچى ئىجرا قىلىدىغان ھەر بىر بۇيرۇقنى چەكلەيدۇ.',
  'bashTimeoutMs': 'بۇيرۇق ۋاقىت چېكى (مىللىسېكۇنت)',
  'bashTimeoutMsHint': 'بىر بۇيرۇق توختىتىلىشتىن بۇرۇن قانچىلىك ئىجرا بولالايدۇ.',
  'bashMaxOutputBytes': 'ھەر ئېقىمنىڭ چىقىرىش چېكى (بايت)',
  'bashMaxOutputBytesHint': 'چېكتىن ئاشقان چىقىرىش تاشلىۋېتىلمەستىن ۋاقىتلىق ھۆججەتكە كۆچۈرۈلىدۇ.',
  'agentLoopTitle': 'ۋاكالەتچى ئايلانمىسى',
  'agentLoopDescription': 'ۋاكالەتچى قورال چاقىرىشلىرىنى قانداق تارقىتىدۇ.',
  'agentLoopMaxParallel': 'پاراللېل قورال چاقىرىش سانى',
  'agentLoopMaxParallelHint': 'بىر قەدەم ئىچىدە بىرلا ۋاقىتتا ئىجرا بولىدىغان پاراللېل چاقىرىشلارنىڭ يۇقىرى چېكى.',
  'webSearchTitle': 'تور ئىزدەش',
  'webSearchDescription': 'DeepSeek ئىزدەش تەمىنلىگۈچىسى.',
  'webSearchApiKey': 'API ئاچقۇچى',
  'webSearchApiKeyHint': 'تەڭشەك ھۆججىتىگە يېزىلمايدۇ. بوش قالدۇرۇلسا ھازىرقى ئاچقۇچ ساقلىنىدۇ.',
  'webSearchApiKeySet': 'ئاچقۇچ سەپلەنگەن.',
  'webSearchApiKeyUnset': 'ئاچقۇچ سەپلەنمىگەن؛ سەپلىگەنگە قەدەر ئىزدەشنى ئىشلەتكىلى بولمايدۇ.',
  'webSearchBaseUrl': 'ئارايۈز ئادرېسى',
  'webSearchBaseUrlHint': 'بوش قالدۇرۇلسا تەمىنلىگۈچىنىڭ سۈكۈتتىكى ئادرېسى ئىشلىتىلىدۇ.',
  'webSearchMaxUses': 'ھەر تەلەپنىڭ ئەڭ كۆپ ئىزدەش قېتىم سانى',
  'webSearchMaxUsesHint': 'جاۋاب بېرىشتىن بۇرۇن بىر تەلەپ قانچە قېتىم ئىزدىيەلەيدۇ.',
  'subagentModelSelectionTitle': 'تارماق ۋاكالەتچى',
  'subagentModelSelectionDescription': 'ۋاكالەتچىلەرنىڭ تارماق ۋاكالەتچىلەرگە مودېل تاللاش ھوقۇقىنى كونترول قىلىدۇ.',
  'subagentModelSelectionToggle': 'ۋاكالەتچىلەرنىڭ تارماق ۋاكالەتچىلەرگە مودېل تاللىشىغا يول قويۇش',
  'subagentModelSelectionChoose': 'قوزغىتىلسا، ۋاكالەتچى ھەر بىر تارماق ۋاكالەتچىگە تۆۋەندىكى ھوقۇق بېرىلگەن مودېللاردىن تەمىنلىگۈچى، مودېل ۋە خۇلاسە چىقىرىش دەرىجىسىنى تاللىيالايدۇ. پەقەت يېڭى سېئانسلارغا تەسىر قىلىدۇ.',
  'subagentModelSelectionAllowed': 'ۋاكالەتچى تاللىيالايدىغان مودېللار',
  'subagentModelSelectionLoading': 'مودېللار يۈكلىنىۋاتىدۇ…',
  'subagentModelSelectionLoadFailed': 'مودېللارنى يۈكلىگىلى بولمىدى.',
  'subagentModelSelectionRetry': 'قايتا سىناش',
  'subagentModelSelectionPartial': 'بەزى مودېل تەمىنلىگۈچىلىرىنى ھازىرچە يۈكلىگىلى بولمىدى؛ ساقلانغان تاللاشلارنى يەنىلا چىقىرىۋەتكىلى بولىدۇ.',
  'subagentModelSelectionUnavailable': 'ھازىرچە ئىشلەتكىلى بولمايدۇ',
  'subagentModelSelectionUnavailableGroup': 'ساقلانغان، ئەمما ھازىرچە ئىشلەتكىلى بولمايدۇ',
  'subagentModelSelectionEmpty': 'ھازىرچە ھېچقانداق مودېل تەمىنلىگۈچىسى مودېل ئېلان قىلمىدى.',
  'subagentModelSelectionRequired': 'ساقلاشتىن بۇرۇن ئاز دېگەندە بىر مودېل تاللاڭ.',
  'subagentModelSelectionConflict': 'تەڭشەكلەر باشقا جايدا يېڭىلاندى. قارالماڭىزدىن ۋاز كېچىپ قايتا سىناڭ.',
  'subagentModelSelectionOff': 'توختىتىلسا، تارماق ۋاكالەتچىلەر سەپلەنگەن سۈكۈتتىكى مودېلنى ئىشلىتىدۇ ياكى ئانا ۋاكالەتچىنىڭ مودېلىغا ۋارىسلىق قىلىدۇ؛ ساقلانغان مودېل تاللاشلىرى ساقلىنىپ قالىدۇ.',
}

var ugSettingsAgentPreset = {
  'error': 'ۋاكالەتچى ئالدىن تەڭشەكلىرىنى يۈكلىگىلى بولمىدى.',
  'userTrust': 'خاس',
  'seatHint': 'باشلىماقچى بولغان بۇ سېئانستا ئىشلىتىدىغان ۋاكالەتچى ئالدىن تەڭشىكى',
  'headerHint': 'بۇ سېئانس ئىجرا قىلىۋاتقان ۋاكالەتچى ئالدىن تەڭشىكى، باشلانغاندا بېكىتىلىدۇ',
  'nav': 'ۋاكالەتچى ئالدىن تەڭشەكلىرى',
  'sectionIntro': 'ئالدىن تەڭشەك دېگەن بىر سېئانسنىڭ ۋاكالەتچىسى ئىجرا قىلىدىغان قىستۇرما قۇراشتۇرۇشى — ئۇنىڭ قوراللىرى، كۆرسەتمىسى ۋە ئىقتىدارى. مەۋجۇت بولغاننى نۇسخىلاپ ئۆزىڭىزنىڭكىنى قىلىڭ، ياكى «يارىتىش ھالىتى» دە ۋاكالەتچىگە سىز ئۈچۈن قۇرغۇزۇڭ.',
  'builtIn': 'ئورنىتىلغان',
  'setDefault': 'سۈكۈتتىكى قىلىپ بەلگىلەش',
  'view': 'كۆرۈش',
  'presetStandardName': 'ئۆلچەملىك ھالەت',
  'presetStandardDescription': 'تولۇق ئىقتىدارلىق كودلاش ۋاكالەتچىسى؛ ھۆججەت تەھرىرلەش، قاپ، ھۆججەت ۋە تور ئىزدەش، ماھارەتلەر، پىلانلاش، نىشانلار، تارماق ۋاكالەتچىلەر ۋە خىزمەت ئېقىملىرىنى قوللايدۇ.',
  'presetPtcName': 'PTC ھالىتى',
  'presetPtcDescription': 'تولۇق ئىقتىدارلىق كودلاش ۋاكالەتچىسى، ئەمما سۈكۈتتىكى ھالەتتە workflow قورالى تەمىنلەنمەيدۇ؛ باشقا قوراللار PTC ھالىتى SDK سى ئارقىلىق ئاشكارىلىنىپ، مودېلنىڭ كۆپ قەدەملىك مەشغۇلاتلارنى بىر TypeScript پروگراممىسىدا بىرلەشتۈرۈشىگە ئىمكانىيەت بېرىدۇ.',
  'presetMinimalName': 'ئەڭ ئاددىي ھالەت',
  'presetMinimalDescription': 'پەقەت مۇقىم قاپلىق بىر قوراللىق كودلاش ۋاكالەتچىسى.',
  'presetCordisName': 'يارىتىش ھالىتى',
  'presetCordisDescription': 'خاس ۋاكالەتچى ئالدىن تەڭشەكلىرىنى يارىتىش ئۈچۈن: ئۆلچەملىك ھالەتنىڭ بارلىق ئىقتىدارىغا ئىگە، ئۇنىڭ ئۈستىگە ئىجرا ۋاقتىدا تەكشۈرۈش، قىستۇرما تەجرىبىلىرى ۋە ئالدىن تەڭشەك يېزىش يېتەكچىلىكىنى تەمىنلەيدۇ.',
  'duplicate': 'نۇسخىلاش',
  'duplicateUnavailable': 'بۇ ئورۇنلاشتۇرۇشتا يازغىلى بولىدىغان ئالدىن تەڭشەك مۇندەرىجىسى سەپلەنمىگەن',
  'delete': 'ئۆچۈرۈش',
  'presetId': 'كىملىك',
  'presetIdPlaceholder': 'my-agent',
  'displayName': 'ئات',
  'displayNamePlaceholder': 'تاللىغۇچتا كۆرۈنىدىغان ئات، سۈكۈتتىكى ھالەتتە كىملىك ئىشلىتىلىدۇ',
  'inUse': 'ھازىر ئىشلىتىلىۋاتىدۇ',
  'builtInGroup': 'ئورنىتىلغان',
  'customGroup': 'خاس',
  'noDescription': 'تېخى چۈشەندۈرۈش يوق.',
  'brokenBadge': 'يۈكلەش مەغلۇپ بولدى',
  'brokenNoCopy': 'يۈكلەش مەغلۇپ بولغان ئالدىن تەڭشەكنى نۇسخىلىغىلى بولمايدۇ',
  'switchRefused': '«{name}» غا ئالماشتۇرغىلى بولمىدى: {reason}',
  'copyOf': 'نۇسخىلانغان مەنبە',
  'composition': 'قۇراشتۇرۇش (agent.cordis.yml)',
  'cancel': 'بىكار قىلىش',
  'close': 'يېپىش',
  'retry': 'قايتا سىناش',
  'copyTitle': 'ئالدىن تەڭشەكنى نۇسخىلاش',
  'copyIntro': 'پۈتۈن ئالدىن تەڭشەك بۇ ماشىنىدا نۇسخىلىنىدۇ. كىملىك مۇندەرىجە ئاتىغا ئايلىنىدۇ، كېيىن ئۆزگەرتكىلى بولمايدۇ؛ قالغان مەزمۇنلار كېيىن ئالدىن تەڭشەكنىڭ ئۆز ھۆججەتلىرىدە تەھرىرلىنىدۇ.',
  'create': 'قۇرۇش',
  'creating': 'قۇرۇلۇۋاتىدۇ…',
  'creatorDraft': '«يارىتىش ھالىتى» دە خاس ئالدىن تەڭشەك يېزىش',
  'openLocation': 'مۇندەرىجىنى ئېچىش',
  'showLocation': 'يولنى كۆرۈش',
  'revealedPathLabel': 'ئالدىن تەڭشەك ھۆججەتلىرى:',
  'idRequired': 'كىملىك تولدۇرۇڭ.',
  'idInvalid': 'پەقەت كىچىك ھەرپلەر، سانلار ۋە تىرىلەرنى ئىشلەتكىلى بولىدۇ، ھەرپ ياكى سان بىلەن باشلىنىشى كېرەك.',
  'idTaken': 'بۇ كىملىك ئاللىقاچان ئىگىلەنگەن.',
  'deleteTitle': 'بۇ ئالدىن تەڭشەكنى ئۆچۈرەمسىز؟',
  'deleteDescription': 'ئالدىن تەڭشەك مۇندەرىجىسى ئۆچۈرۈلىدۇ. ئۇنىڭدا ئىجرا بولۇۋاتقان سېئانسلارغا تەسىر قىلمايدۇ؛ يېڭى سېئانسلار ئۇنى تاللىيالمايدۇ.',
  'deleteConfirm': 'ئۆچۈرۈش',
  'deleting': 'ئۆچۈرۈلۈۋاتىدۇ…',
}

var ugSettingsPluginInventory = {
  'tab': 'قىستۇرما تىزىملىكى',
  'loading': 'قىستۇرمىلار ئوقۇلۇۋاتىدۇ…',
  'error': 'قىستۇرمىلارنى ھازىرچە ئوقۇغىلى بولمايدۇ.',
  'retry': 'قايتا سىناش',
  'search': 'قىستۇرما ئىزدەش',
  'empty': 'تېخى قىستۇرما يوق.',
  'emptySearch': 'ماس كېلىدىغان قىستۇرما يوق.',
  'presetTitle': 'سېئانس قىستۇرمىلىرى',
  'presetSubtitle': 'ۋاكالەتچى ئالدىن تەڭشىكى بويىچە ھەر سېئانستا قۇراشتۇرۇلىدۇ',
  'countUnit': 'تال',
  'switcherLabel': 'كۆرىدىغان ۋاكالەتچى ئالدىن تەڭشىكىنى تاللاڭ',
  'presetOptionDefault': '{name} (سۈكۈتتىكى)',
  'presetOptionBroken': '{name} (يۈكلەش مەغلۇپ بولدى)',
  'globalTitle': 'ئومۇمىي قىستۇرمىلار',
  'globalSubtitle': 'سىستېما ۋە بارلىق سېئانسلار ئورتاق ئىشلىتىدۇ',
  'presetProvidedDetail': 'ئومۇمىي جەھەتتە توختىتىلغان؛ ۋاكالەتچى ئالدىن تەڭشىكى ھەر سېئانستا تەمىنلەيدۇ',
  'enabledIn': 'قوزغىتىلغان جاي',
  'viewInPreset': 'ئالدىن تەڭشەك گۇرۇپپىسىدا كۆرۈش',
  'matchesInOtherPresets': 'باشقا ئالدىن تەڭشەكلەردە يەنە {count} تال ماس كەلدى: ',
  'failedCountLabel': 'تال مەغلۇپ',
  'enabledTag': 'قوزغىتىلدى',
  'disabledTag': 'توختىتىلدى',
  'conditionalTag': 'شەرتلىك قوزغىتىش',
  'presetEnabledTag': 'ئالدىن تەڭشەك ئارقىلىق قوزغىتىلدى',
  'failedTag': 'قوزغىتىش مەغلۇپ بولدى',
  'moduleLabel': 'مودۇل',
  'fromPreset': 'كەلگەن جاي',
  'condition': 'توختىتىش شەرتى',
  'configuration': 'سەپلىمە ھالىتى',
  'runtime': 'ئىجرا ھالىتى',
  'unobserved': 'ئىجرا بولمىدى',
  'pending': 'بېقىندىلىقنى كۈتۈۋاتىدۇ',
  'loadingPhase': 'يۈكلىنىۋاتىدۇ',
  'active': 'ئىجرا بولۇۋاتىدۇ',
  'failed': 'قوزغىتىش مەغلۇپ بولدى',
  'unloading': 'چىقىرىۋېتىلىۋاتىدۇ',
}

var ugSettingsTheme = {
  'appearance.title': 'كۆرۈنۈش',
  'appearance.light': 'يورۇق',
  'appearance.dark': 'قاراڭغۇ',
  'appearance.system': 'سىستېمىغا ئەگىشىش',
  'fontSize.title': 'خەت چوڭلۇقى',
  'fontSize.description': 'پەقەت سۆھبەت مەزمۇنىنىڭ خەت چوڭلۇقىغا تەسىر قىلىدۇ',
  'fontSize.unit': 'px',
  'fontSize.increase': 'خەت چوڭلۇقىنى چوڭايتىش',
  'fontSize.decrease': 'خەت چوڭلۇقىنى كىچىكلىتىش',
}

var ugSettingsPermission = {
  'title': 'ھوقۇق',
  'description': 'يېڭى سېئانسلارنىڭ سۈكۈتتىكى ھوقۇق ھالىتىنى تاللاڭ',
  'loading': 'يۈكلىنىۋاتىدۇ',
  'unavailable': 'ئىشلەتكىلى بولمايدۇ',
  'preset.readOnly': 'پەقەت كۆرۈش',
  'preset.workspaceWrite': 'خىزمەت بوشلۇقىدا ئۆزگەرتىش',
  'preset.fullAccess': 'تولۇق ھوقۇق',
  'confirm.title': 'تولۇق ھوقۇقنى قوزغىتامسىز؟',
  'confirm.description': 'تولۇق ھوقۇق قوزغىتىلسا، يېڭى سېئانسلاردا تەستىقلاش قەدەملىرى ئازىيىپ، سەزگۈر مەشغۇلاتلار، ھۆججەت ئۆزگەرتىش ياكى سىرتقى بۇيرۇقلارنى ئۆز ئىچىگە ئالغان تېخىمۇ كۆپ مەشغۇلات بىۋاسىتە ئىجرا قىلىنىدۇ. پەقەت كېيىنكى ۋەزىپىلەرگە ئىشەنگەندىلا ئىشلىتىڭ.',
  'confirm.acknowledge': 'خەۋپنى چۈشەندىم، داۋاملاشتۇرۇشقا رازى',
  'confirm.cancel': 'بىكار قىلىش',
  'confirm.enable': 'تولۇق ھوقۇقنى قوزغىتىش',
}

// permission.access 与 settings.permission 文案同源（上游同一组词条按两种注册方式写入），
// 值保持一致。
var ugPermissionAccess = {
  'preset.readOnly': 'پەقەت كۆرۈش',
  'preset.workspaceWrite': 'خىزمەت بوشلۇقىدا ئۆزگەرتىش',
  'preset.fullAccess': 'تولۇق ھوقۇق',
  'confirm.title': 'تولۇق ھوقۇقنى قوزغىتامسىز؟',
  'confirm.description': 'تولۇق ھوقۇق قوزغىتىلسا، يېڭى سېئانسلاردا تەستىقلاش قەدەملىرى ئازىيىپ، سەزگۈر مەشغۇلاتلار، ھۆججەت ئۆزگەرتىش ياكى سىرتقى بۇيرۇقلارنى ئۆز ئىچىگە ئالغان تېخىمۇ كۆپ مەشغۇلات بىۋاسىتە ئىجرا قىلىنىدۇ. پەقەت كېيىنكى ۋەزىپىلەرگە ئىشەنگەندىلا ئىشلىتىڭ.',
  'confirm.acknowledge': 'خەۋپنى چۈشەندىم، داۋاملاشتۇرۇشقا رازى',
  'confirm.cancel': 'بىكار قىلىش',
  'confirm.enable': 'تولۇق ھوقۇقنى قوزغىتىش',
}

var ugCordis = {
  'row.defineTitle': 'Cordis قىستۇرمىسىنى تىزىملاش',
  'row.runTitle': 'Cordis قىستۇرمىسىنى يۈرگۈزۈش',
  'row.updateTitle': 'Cordis قىستۇرمىسىنى يېڭىلاش',
  'row.stopTitle': 'Cordis قىستۇرمىسىنى توختىتىش',
  'row.removeTitle': 'Cordis قىستۇرمىسىنى چىقىرىۋېتىش',
  'purpose.missing': '(ئىشلىتىش مەقسىتى يېزىلمىغان)',
  'status.idle': 'تەييار',
  'status.awaitingApproval': 'تەستىقنى كۈتۈۋاتىدۇ',
  'status.failed': 'يۈرگۈزۈش مەغلۇپ بولدى',
  'status.clientPending': 'Client تەييار',
  'status.running': 'ئىجرا بولۇۋاتىدۇ',
  'status.removed': 'چىقىرىۋېتىلدى',
  'status.superseded': 'يېڭىراق ئىجرا بار',
  'run.removed': 'بۇ بوغچا ئەمدى مەۋجۇت ئەمەس',
  'run.superseded': 'يېڭىراق ئىجرا كارتىسى تۆۋەندە بار',
  'panel.hint': 'يۈرگۈزۈش كونتروللىرى سول ئاستىدىكى تەڭشەك ئۈستىدىكى Cordis تاختىسىدا',
  'panel.plugins.aria': 'Cordis قىستۇرمىلىرى',
  'panel.approvals.aria': 'Cordis تەستىقلىرى',
  'panel.trigger': 'Cordis Plugin',
  'panel.runningCount': '{count} running',
  'panel.title': 'Cordis قىستۇرمىلىرى',
  'panel.empty': 'تېخى ھېچقانداق قىستۇرما بېكىتىلمىدى',
  'panel.loading': 'ئوقۇلۇۋاتىدۇ…',
  'panel.readFailed': 'قىستۇرما تىزىملىكىنى ئوقۇش مەغلۇپ بولدى: {message}',
  'panel.group.current': 'بۇ سېئانس',
  'panel.group.others': 'باشقا سېئانسلار',
  'panel.version': 'نۇسخا',
  'panel.current': 'ھازىرقى: {packageId}',
  'panel.next': 'ئالماشتۇرۇلىدىغان: {packageId}',
  'action.approve': 'يول قويۇش',
  'action.approveOnce': 'پەقەت بۇ نۇسخىغا يول قويۇش',
  'action.approvePlugin': 'بۇ قىستۇرمىنىڭ كېيىنكى نۇسخىلىرىغا يول قويۇش',
  'action.decline': 'رەت قىلىش',
  'action.run': 'يۈرگۈزۈش',
  'action.stop': 'توختىتىش',
  'action.remove': 'چىقىرىۋېتىش',
  'action.retry': 'قايتا سىناش',
  'action.rollback': 'ئارقىغا قايتۇرۇش',
  'action.inspect': 'كۆرۈش',
  'render.failedAbdicated': '{slot} كۆرسىتىش مەغلۇپ بولدى، سۈكۈتتىكى ئارايۈز ئەسلىگە كەلتۈرۈلدى:',
  'render.failedHeld': '{slot} كۆرسىتىش مەغلۇپ بولدى:',
  'a11y.defining': 'قىستۇرما بېكىتىلىۋاتىدۇ',
  'a11y.failed': 'بېكىتىش مەغلۇپ بولدى',
  'a11y.stopped': 'بېكىتىش ئۈزۈلدى',
  'body.source': 'قىستۇرما كودى',
  'body.hostCode': 'Host',
  'body.clientCode': 'Client',
  'body.output': 'نەتىجە',
  'body.copy': 'كۆچۈرۈش',
  'body.copied': 'كۆچۈرۈلدى',
}

var ugDeliverables = {
  'presented.nativeUnavailable': 'بۇ ھۆججەتنىڭ Host يولى يوق، يان بالداقتا ئالدىن كۆرۈڭ',
  'presented.revealError': 'ھۆججەت باشقۇرغۇچتا كۆرسىتەلمىدى، قايتا سىناڭ',
  'presented.directoryError': 'ئۆز ئىچىگە ئالغان ھۆججەت قىسقۇچىنى ئاچقىلى بولمىدى، قايتا سىناڭ',
  'presented.directoryOpening': 'ئۆز ئىچىگە ئالغان ھۆججەت قىسقۇچى ئېچىلىۋاتىدۇ…',
  'presented.directoryOpened': 'ئۆز ئىچىگە ئالغان ھۆججەت قىسقۇچىنى ئېچىش تەلەپ قىلىندى',
  'presented.revealed': 'ھۆججەت باشقۇرغۇچتا كۆرسىتىش تەلەپ قىلىندى',
  'presented.revealing': 'ھۆججەت باشقۇرغۇچتا كۆرسىتىلىۋاتىدۇ…',
  'presented.unavailable': 'بۇ Host تا ئىش ئۈستى يوق، ھۆججەت ياكى ھۆججەت قىسقۇچىنى ئاچقىلى بولمايدۇ',
  'presented.retry': 'قايتا سىناش',
  'presented.hostError': 'Host ئىش ئۈستى ئۇچۇرىنى ئوقۇيالمىدى',
  'presented.directory': 'ئۆز ئىچىگە ئالغان ھۆججەت قىسقۇچىنى ئېچىش',
  'presented.explorer': 'ھۆججەت تەكشۈرگۈچتە كۆرسىتىش',
  'presented.finder': 'Finder دا كۆرسىتىش',
  'presented.defaultApp': 'سۈكۈتتىكى پروگراممىدا ئېچىش',
  'presented.more': '{name} نىڭ تېخىمۇ كۆپ ھۆججەت مەشغۇلاتلىرى',
  'presented.action': 'ئېچىش',
  'presented.preview': 'يان بالداقتا ئالدىن كۆرۈش',
  'presented.previewButton': '{name} نى يان بالداقتا ئېچىش',
  'presented.previewCard': '{name} نى يان بالداقتا ئالدىن كۆرۈش',
  'presented.all': 'بارلىق {count} ھۆججەت',
  'presented.expandAria': 'بارلىق {count} تاپشۇرۇلغان ھۆججەتنى كۆرسىتىش',
  'presented.collapse': 'قاتلاش',
  'presented.collapseAria': 'تاپشۇرۇلغان ھۆججەتلەر تىزىمىنى قاتلاش',
  'presented.opening': 'ئېچىلىۋاتىدۇ…',
  'presented.opened': 'سۈكۈتتىكى پروگراممىدا ئېچىلدى',
  'presented.error': 'ئاچقىلى بولمىدى. قايتا سىناش ئۈچۈن چېكىڭ.',
  'presented.file': 'ھۆججەت',
  'row.title': 'تاپشۇرۇلغان ھۆججەتلەر',
  'row.running': 'تاپشۇرۇلۇۋاتىدۇ',
  'row.ok': 'تاپشۇرۇلدى',
  'row.error': 'تاپشۇرۇش مەغلۇپ بولدى',
  'row.stopped': 'ئۈزۈلدى',
  'row.inspect': 'چاقىرىشنى كۆرۈش',
  'presented.open': '{name} نى سۈكۈتتىكى پروگراممىدا ئېچىش',
  'produced.label': 'بۇ نۆۋەتتە ئۆزگەرگەن ھۆججەتلەر',
  'produced.moreOne': '+ 1 ھۆججەت',
  'produced.more': '+ {count} ھۆججەت',
  'produced.open': '{name} نى ئېچىش',
}

var ugSubagent = {
  'diagnostic.corrupt': 'سېئانس خاتىرىسى بۇزۇلغان',
  'diagnostic.unsupported': 'تارماق ۋاكالەتچى خاتىرىسىنىڭ نۇسخىسى قوللانمايدۇ',
  'diagnostic.unavailable': 'سېئانس خاتىرىسى ھازىرچە ئىشلەتكىلى بولمايدۇ',
  'duration.seconds': '{seconds} سېكۇنت',
  'duration.minutes': '{minutes} مىنۇت {seconds} سېكۇنت',
  'duration.hours': '{hours} سائەت {minutes} مىنۇت {seconds} سېكۇنت',
  'duration.days': '{days} كۈن',
  'duration.daysHours': '{days} كۈن {hours} سائەت',
  'duration.months': 'تەخمىنەن {months} ئاي',
  'duration.monthsDays': 'تەخمىنەن {months} ئاي {days} كۈن',
  'duration.years': 'تەخمىنەن {years} يىل',
  'duration.yearsMonths': 'تەخمىنەن {years} يىل {months} ئاي',
  'duration.exactDays': '{days} كۈن {hours} سائەت {minutes} مىنۇت {seconds} سېكۇنت',
  'duration.exactTitle': 'ئومۇمىي ئاكتىپ ۋاقىت: {duration}',
  'tokens.thousand': '{value}K',
  'tokens.million': '{value}M',
  'tokens.total': '{value} tok',
  'loading.label': 'تارماق ۋاكالەتچىلەر يۈكلىنىۋاتىدۇ…',
  'loading.aria': 'تارماق ۋاكالەتچىلەر يۈكلىنىۋاتىدۇ',
  'load.error': 'تارماق ۋاكالەتچىلەرنى يۈكلىيەلمىدى',
  'retry': 'قايتا سىناش',
  'mode.oneShot': 'بىر قېتىملىق',
  'mode.continuable': 'داۋاملاشقىلى بولىدىغان',
  'activity.running': 'ئىجرا بولۇۋاتىدۇ',
  'activity.inactive': 'ھازىر ئىجرا بولمايۋاتىدۇ',
  'branch.collapse': '{label} نىڭ تۆۋەنكى دەرىجىلىك تارماق ۋاكالەتچىلىرىنى قاتلاش',
  'branch.expand': '{label} نىڭ تۆۋەنكى دەرىجىلىك تارماق ۋاكالەتچىلىرىنى يېيىش',
  'count.total.one': '{count} تارماق ۋاكالەتچى',
  'count.total.other': '{count} تارماق ۋاكالەتچى',
  'count.running.one': '{count} تارماق ۋاكالەتچى ئىجرا بولۇۋاتىدۇ',
  'count.running.other': '{count} تارماق ۋاكالەتچى ئىجرا بولۇۋاتىدۇ',
  'switcher.aria': 'تارماق ۋاكالەتچىنى ئالماشتۇرۇش: {title}',
  'tree.aria': 'تارماق ۋاكالەتچى سېئانلىرى',
  'readonly.oneShot.title': 'بىر قېتىملىق تارماق ۋاكالەتچى خاتىرىسى',
  'readonly.title': 'بۇ تارماق ۋاكالەتچى ھازىرچە پەقەت ئوقۇشقا بولىدۇ',
  'readonly.oneShot.body': 'بىر قېتىملىق ۋەزىپىلەر كېيىنكى ئۇچۇرلارنى قوبۇل قىلمايدۇ؛ تولۇق ئىجرا خاتىرىسىنى بۇ يەردە كۆرەلەيسىز.',
  'readonly.body': 'ئانا سېئانس ھازىر تورسىز؛ ئۇنى قايتا ئاچقاندىن كېيىن ئۇچۇر ئەۋەتىشنى داۋاملاشتۇرالايسىز.',
}

var ugFeedback = {
  'action.like': 'ياخشى جاۋاب',
  'action.likeActive': 'بەلگىنى چىقىرىۋېتىش',
  'action.dislike': 'مەسىلىلىك جاۋاب',
  'action.dislikeActive': 'بەلگىنى چىقىرىۋېتىش',
  'dialog.title': 'پىكىر يوللاش',
  'dialog.categories': 'پىكىر تۈرى',
  'dialog.detail': 'پىكىر تەپسىلاتى',
  'dialog.hint': 'تەپسىلات تولدۇرۇپ تەجرىبىنى ياخشىلاشقا ياردەم قىلىڭ. يوللىغان مەزمۇنىڭىز ھازىرقى سۆھبەت جۇرنىلىنى ئۆز ئىچىگە ئالىدۇ.',
  'category.task-result': 'ۋەزىپە نەتىجىسى',
  'category.instruction-following': 'كۆرسەتمىنى چۈشىنىش ۋە ئەمەل قىلىش',
  'category.product-interaction': 'مەھسۇلات ئىقتىدارى ۋە ئارىلىشىش',
  'category.service-stability': 'مۇقىملىق ۋە سۈرئەت',
  'category.resource-cost': 'مەنبە ئىشلىتىش ۋە چىقىم',
  'category.security-privacy-permission': 'بىخەتەرلىك، شەخسىي مەخپىيەتلىك ۋە ھوقۇق',
  'category.other': 'باشقا',
  'toast.recorded': 'پىكرىڭىزگە رەھمەت',
  'error.conflict': 'بۇ پىكىر باشقا جايدا ئۆزگەرتىلىپتۇ، ئەڭ يېڭى ھالەت كۆرسىتىلدى',
  'error.load': 'پىكىر ھالىتىنى يۈكلىيەلمىدى',
  'error.generic': 'پىكىرنى ساقلىيالمىدى',
  'error.noteTooLarge': 'تەسۋىر بەك ئۇزۇن، قىسقارتىپ قايتا يوللاڭ',
}

var ugWorkflowRun = {
  'run.title': '{name}',
  'run.members.one': '{count} ئەزا',
  'run.members.other': '{count} ئەزا',
  'run.empty': 'ئەزا قوزغىتىلمىدى',
  'phase.unassigned': 'باسقۇچسىز',
  'phase.empty': 'بوش باسقۇچ ئاتى',
  'statusCount.running': 'ئىجرا بولۇۋاتىدۇ {count}',
  'statusCount.completed': 'تاماملاندى {count}',
  'statusCount.failed': 'مەغلۇپ بولدى {count}',
  'statusCount.cancelled': 'بىكار قىلىندى {count}',
  'statusCount.interrupted': 'ئۈزۈلدى {count}',
  'member.empty': 'بوش ئەزا ئاتى',
  'member.open': '{name} نى ئېچىش',
  'status.running': 'ئىجرا بولۇۋاتىدۇ',
  'status.completed': 'تاماملاندى',
  'status.failed': 'مەغلۇپ بولدى',
  'status.cancelled': 'بىكار قىلىندى',
  'status.interrupted': 'ئۈزۈلدى',
}

var ugScheduleCatalog = {
  'trigger.one': '{count} ئەسكەرتىش',
  'trigger.other': '{count} ئەسكەرتىش',
  'list.aria': 'ئاكتىپ ئەسكەرتىشلەر',
  'status.scheduled': 'كۈتۈلۈۋاتىدۇ',
  'status.overdue': 'ۋاقتى ئۆتۈپ كەتتى',
  'frequency.once': 'بىر قېتىم',
  'frequency.every': 'ھەر {value} {unit} دا بىر قېتىم',
  'unit.day.one': 'كۈن',
  'unit.day.other': 'كۈن',
  'unit.hour.one': 'سائەت',
  'unit.hour.other': 'سائەت',
  'unit.minute.one': 'مىنۇت',
  'unit.minute.other': 'مىنۇت',
  'unit.second.one': 'سېكۇنت',
  'unit.second.other': 'سېكۇنت',
  'relative.now': 'ھازىر ۋاقتى بولدى',
  'relative.future': '{value} {unit} دىن كېيىن',
  'relative.overdue': '{value} {unit} ۋاقتى ئۆتۈپ كەتتى',
}

var ugJob = {
  'count.live.one': '{count} ئارقا پىلان ۋەزىپىسى ئىجرا بولۇۋاتىدۇ',
  'count.live.other': '{count} ئارقا پىلان ۋەزىپىسى ئىجرا بولۇۋاتىدۇ',
  'count.idle.one': '{count} ئارقا پىلان ۋەزىپىسى',
  'count.idle.other': '{count} ئارقا پىلان ۋەزىپىسى',
  'list.aria': 'ئارقا پىلان ۋەزىپىلىرى',
  'status.running': 'ئىجرا بولۇۋاتىدۇ',
  'status.stopping': 'توختىتىلىۋاتىدۇ',
  'status.completed': 'تاماملاندى',
  'status.killed': 'بىكار قىلىندى',
  'status.failed': 'مەغلۇپ بولدى',
  'duration.seconds': '{seconds} سېكۇنت',
  'duration.minutes': '{minutes} مىنۇت {seconds} سېكۇنت',
  'duration.hours': '{hours} سائەت {minutes} مىنۇت',
  'duration.title.live': 'ئىجرا بولغان ۋاقىت {duration}',
  'duration.title.done': 'سەرپ قىلىنغان ۋاقىت {duration}',
}

var ugQuestion = {
  'error.incomplete': 'ئاۋۋال بۇ سوئالنى تاماملاڭ.',
  'error.unanswered': 'بىر تاللانما تاللاڭ ياكى خاس جاۋاب يېزىڭ.',
  'nav.prev': 'ئالدىنقى سوئال',
  'nav.next': 'كېيىنكى سوئال',
  'nav.minimize': 'سوئال كارتىسىنى قاتلاش',
  'nav.maximize': 'سوئال كارتىسىنى يېيىش',
  'nav.cancel': 'پۈتۈن سوئال توپلىمىدىن ۋاز كېچىش',
  'option.recommended': 'تەۋسىيە',
  'custom.placeholder': 'جاۋابىڭىزنى يېزىڭ',
  'action.skip': 'بۇ سوئالنى ئاتلاپ ئۆتۈش',
  'action.next': 'كېيىنكى سوئال',
  'plan.header': 'پىلان تەكشۈرۈشنى كۈتۈۋاتىدۇ',
  'plan.approve': 'ئىجرانى تەستىقلاش',
  'plan.decline': 'رەت قىلىش',
  'plan.discuss': 'سۆھبەتتە مۇزاكىرە قىلىش',
}

var ugOpenInApp = {
  'open.title': '{app} دا خىزمەت بوشلۇقىنى ئېچىش',
  'open.tooltip': 'يەرلىكتە ئېچىش',
  'open.error': 'ئېچىش مەغلۇپ بولدى',
  'menu.toggle': 'ئېچىش ئۇسۇلىنى تاللاش',
  'menu.aria': 'ئېچىش ئۇسۇلى',
  'app.cursor': 'Cursor',
  'app.vscode': 'VS Code',
  'app.vscodeinsiders': 'VS Code Insiders',
  'app.windsurf': 'Windsurf',
  'app.zed': 'Zed',
  'app.sublimetext': 'Sublime Text',
  'app.xcode': 'Xcode',
  'app.androidstudio': 'Android Studio',
  'app.intellij': 'IntelliJ IDEA',
  'app.pycharm': 'PyCharm',
  'app.webstorm': 'WebStorm',
  'app.phpstorm': 'PhpStorm',
  'app.goland': 'GoLand',
  'app.rider': 'Rider',
  'app.rustrover': 'RustRover',
  'app.fork': 'Fork',
  'app.sourcetree': 'Sourcetree',
  'app.github': 'GitHub Desktop',
  'app.tower': 'Tower',
  'app.gitkraken': 'GitKraken',
  'app.smartgit': 'SmartGit',
  'app.sublimemerge': 'Sublime Merge',
  'app.ghostty': 'Ghostty',
  'app.warp': 'Warp',
  'app.iterm': 'iTerm2',
  'app.kitty': 'kitty',
  'app.windowsterminal': 'Windows Terminal',
  'app.gitbash': 'Git Bash',
  'app.gnometerminal': 'GNOME Terminal',
  'app.konsole': 'Konsole',
  'app.finder': 'Finder',
  'app.explorer': 'ھۆججەت تەكشۈرگۈچ',
  'app.filemanager': 'ھۆججەت باشقۇرغۇچ',
  'app.terminal': 'تېرمىنال',
}

var ugGoal = {
  'phase.active': 'داۋاملىشىۋاتقان نىشان',
  'phase.active.disarmed': 'ئىجرا بولمايۋاتقان نىشان',
  'phase.paused': 'ۋاقىتلىق توختىتىلغان نىشان',
  'phase.blocked': 'توسالغۇغا ئۇچرىغان نىشان',
  'objective.aria': 'نىشان مەزمۇنى',
  'commandInput.aria': 'بۇيرۇق كىرگۈزۈش',
  'action.save': 'نىشاننى ساقلاش',
  'action.cancel': 'تەھرىرلەشنى بىكار قىلىش',
  'action.pause': 'نىشاننى ۋاقىتلىق توختىتىش',
  'action.resume': 'نىشاننى داۋاملاشتۇرۇش',
  'action.edit': 'نىشاننى تەھرىرلەش',
  'action.clear': 'نىشاننى تازىلاش',
}

var ugPlan = {
  'chip.label': 'Plan',
  'chip.on.aria': 'plan mode ئوچۇق، بېسىپ توختىتىڭ',
  'chip.on.title': 'plan mode ئوچۇق — توختىتىش ئۈچۈن چېكىڭ (/plan off)',
  'chip.off.aria': 'plan mode تاقاق، بېسىپ قوزغىتىڭ',
  'chip.off.title': 'plan mode تاقاق — قوزغىتىش ئۈچۈن چېكىڭ (/plan)',
  'chip.exitFailed': 'plan mode دىن چىقىش مەغلۇپ بولدى',
}

var ugSkill = {
  'row.title': 'Skill',
  'row.running': 'skill يۈكلىنىۋاتىدۇ',
  'row.failed': 'skill يۈكلەش مەغلۇپ بولدى',
  'row.stopped': 'skill يۈكلەش توختىتىلدى',
  'row.instructions': 'يوليورۇق',
  'row.inspect': 'كۆرۈش',
  'menu.userOnly': 'پەقەت ئىشلەتكۈچى',
}

var ugReference = {
  'section.files': 'ھۆججەت ۋە ھۆججەت قىسقۇچىلار',
  'section.sessions': 'سۆھبەتلەر',
  'candidate.noCwd': '(خىزمەت مۇندەرىجىسى يوق)',
  'crumb.root': 'خىزمەت بوشلۇقى',
  'time.now': 'ھازىرلا',
  'time.minutes': '{n} مىنۇت',
  'time.hours': '{n} سائەت',
  'time.days': '{n} كۈن',
  'time.months': '{n} ئاي',
  'time.years': '{n} يىل',
}

var ugApproval = {
  'waiting': 'تەستىقنى كۈتۈۋاتىدۇ',
  'detail.aria': 'تەستىق تەپسىلاتى',
  'escalation': '{toolName} قورالى ئالاھىدە ھوقۇقلۇق ئىجرا تەلەپ قىلدى',
  'reject': 'رەت قىلىش',
  'allowOnce': 'بىر قېتىم يول قويۇش',
}

var ugSessionLogDownload = {
  'header.more': 'تېخىمۇ كۆپ مەشغۇلات',
  'menu.download': 'Session جۇرنىلىنى چۈشۈرۈش',
  'dialog.preparingTitle': 'Session ئېكسپورت قىلىنىۋاتىدۇ',
  'dialog.preparingDescription': 'ھازىرقى Session، تارماق Session لار ۋە قوشۇمچىلارنى ئۆز ئىچىگە ئالغان ZIP ھۆججەت تەييارلىنىۋاتىدۇ.',
  'dialog.successTitle': 'Session چۈشۈرۈش باشلاندى',
  'dialog.successDescription': 'توركۆرگۈچ Session ZIP ھۆججىتىنى چۈشۈرۈۋاتىدۇ.',
  'dialog.errorTitle': 'Session ئېكسپورت قىلىش مەغلۇپ بولدى',
  'dialog.close': 'يېپىش',
  'dialog.commandFailed': 'Session ئېكسپورتىنى باشلىيالمىدى.',
}

var ugDocumentMarkdown = {
  'viewer.label': 'Markdown',
  'code.copy': 'كۆچۈرۈش',
  'code.copied': 'كۆچۈرۈلدى',
  'footnotes': 'ئاستى خاتىرە',
}

var ugDocumentHtml = {
  'title': 'HTML',
  'frame': 'HTML ھۆججەت ئالدىن كۆرۈش',
  'loading': 'HTML ئالدىن كۆرۈش تەييارلىنىۋاتىدۇ…',
  'failed': 'بۇ HTML ھۆججەتنى ئالدىن كۆرگىلى بولمىدى.',
}

var ugSidebarImage = {
  'title': 'سۈرەت',
  'preview': 'سۈرەت ئالدىن كۆرۈش: {name}',
  'loading': 'سۈرەت ئېچىلىۋاتىدۇ…',
  'failed': 'بۇ سۈرەتنى كۆرسەتكىلى بولمىدى.',
  'unsupported': 'سۈرەت ئالدىن كۆرۈش ئۈچۈن تولۇق ھۆججەت مەزمۇنى كېرەك.',
}

var ugSidebarPdf = {
  'title': 'PDF',
  'pageImage': 'PDF نىڭ {page}-بېتى',
  'loading': 'PDF ئېچىلىۋاتىدۇ…',
  'rendering': 'بەت سىزىلىۋاتىدۇ…',
  'failed': 'PDF نى كۆرسەتكىلى بولمىدى: {message}',
  'password': 'بۇ PDF پارول تەلەپ قىلىدۇ؛ پاروللۇق ئالدىن كۆرۈشنى تېخى قوللىمايدۇ.',
  'workerFailed': 'PDF كۆرسىتىش جەريانى داۋاملاشالمىدى، قايتا سىناڭ.',
  'unsupported': 'PDF ئالدىن كۆرۈش ئۈچۈن تولۇق ھۆججەت مەزمۇنى كېرەك.',
  'retry': 'قايتا سىناش',
}

var ugSidebarCodePreview = {
  'title': 'كود',
  'copy': 'كۆچۈرۈش',
  'copied': 'كۆچۈرۈلدى',
}

var ugSidebarDocumentPreview = {
  'loading': 'ئوقۇلۇۋاتىدۇ…',
  'loadMore': 'تېخىمۇ كۆپ يۈكلەش',
  'changed': 'ھۆججەت يېڭىلاندى، ھازىر ئالدىنقى مەزمۇن كۆرسىتىلۈۋاتىدۇ.',
  'reloadNow': 'قايتا يۈكلەش',
  'reload': 'ھۆججەتنى قايتا ئوقۇش',
  'wrap.enable': 'قۇر قاتلاشنى قوزغىتىش',
  'wrap.disable': 'قۇر قاتلاشنى توختىتىش',
  'wrap.aria': 'قۇر قاتلاش',
  'openWith': 'ئېچىش ئۇسۇلى',
  'viewer.text': 'ساپ تېكىست',
  'resourceUnavailable': 'ھۆججەت مەنبە مۇلازىمىتىنى ئىشلەتكىلى بولمايدۇ.',
  'rendererUnavailable': '{name} ئالدىن كۆرگۈچنى ئىشلەتكىلى بولمايدۇ.',
  'error.notFound': 'ھۆججەت تېپىلمىدى. يۆتكەلگەن ياكى ئۆچۈرۈلگەن بولۇشى مۇمكىن.',
  'error.tooLarge': 'بۇ بەت {limit} چېكىدىن ئېشىپ كەتتى، ئوقۇغىلى بولمايدۇ.',
  'error.notText': 'تېكىست ھۆججەت ئەمەس، ئالدىن كۆرۈشنى ھازىرچە قوللىمايدۇ.',
  'error.notRegularFile': 'بۇ يول ئادەتتىكى ھۆججەت ئەمەس، كۆرسىتىدىغان مەزمۇن يوق.',
  'error.unavailable': 'ئوقۇش مەغلۇپ بولدى: {message}',
  'retry': 'قايتا سىناش',
}

  var RTL_CSS = "/* dsh-uyghurche-ui RTL 覆盖层（B1 收窄版：只镜像内容面，侧栏保持 LTR）\n *\n * 范围（两个锚点）：\n *   1. _centerCol —— 中栏：对话区，以及挂在 main 槽上的面板；\n *   2. [role=\"dialog\"][aria-modal=\"true\"] —— 设置界面等模态。\n *      设置模态是 position:fixed 的全屏浮层（dsh-client-ui-settings-general），\n *      DOM 上挂在侧栏的 sidebar.settings 槽里、视觉上盖满全屏——所以只锚中栏会漏掉它，\n *      而按 aria 语义取锚点比按哈希类名稳。\n * 两侧栏（_sidebarCol / [data-rightbar-col]）不在范围内：不换边、不做任何补偿。\n *\n * 实现：不给 <html> 设 dir。设 dir 会让 AppFrame 的三轨 grid 整体换边，\n * 左栏被翻到屏幕右侧，再想“只留侧栏 LTR”就得逐个补偿 grid 定位，脆弱且没必要。\n * 改为把 direction:rtl 打在上面两个锚点上：direction 是可继承属性，效果等价于\n * 在该子树设 dir=\"rtl\"；纯 CSS 命中，React 重渲染/重挂载都不会掉。\n *\n * 锚点核对：<hash>_centerCol 仅由 dsh-client-ui-layout 定义\n * （scripts/audit-class-suffixes.mjs）；aria-modal 由设置模态自己输出。\n * 仅在 ug 激活时注入本 <style>；切走或卸载时整个 <style> 被移除。\n *\n * 已知限制（见 README）：图标镜像属 B2 不做；中栏与模态以外的浮层\n * （toast、非模态菜单等）保持 LTR。 */\n\n/* ---- 内容面：文字方向与对齐（direction 可继承到全部后代） ---- */\n:is([class*=\"_centerCol\"], [role=\"dialog\"][aria-modal=\"true\"]) {\n  direction: rtl;\n  unicode-bidi: isolate;\n}\n\n/* ---- 维语字体栈：作用于全界面，含两侧栏的维语文案 ---- */\nhtml body {\n  font-family: \"UKIJ Tuz\", \"Alkatip Tor\", \"Microsoft Uighur\", \"Noto Sans Arabic\",\n    system-ui, -apple-system, \"Segoe UI\", sans-serif;\n}\n\n/* ---- LTR 反向保护：代码、终端、编辑器、输入控件（内容面内） ---- */\n:is([class*=\"_centerCol\"], [role=\"dialog\"][aria-modal=\"true\"]) :is(\n  pre,\n  code,\n  .xterm,\n  .xterm *,\n  .cm-editor,\n  .cm-editor *,\n  input,\n  textarea\n) {\n  direction: ltr;\n  text-align: left;\n  unicode-bidi: isolate;\n}\n\n/* ---- 聊天消息选中标记：inset 物理值换向（_mark 仅 dsh-client-ui-chat 使用） ---- */\n:is([class*=\"_centerCol\"], [role=\"dialog\"][aria-modal=\"true\"]) [class*=\"_mark\"] {\n  inset: 0 auto 0 0;\n}\n\n/* ---- 重试按钮边距换向（_retry 出现在 attachment / commands） ---- */\n:is([class*=\"_centerCol\"], [role=\"dialog\"][aria-modal=\"true\"]) [class*=\"_retry\"] {\n  margin-left: 0;\n  margin-right: 8px;\n}\n"

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

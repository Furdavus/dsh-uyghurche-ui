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

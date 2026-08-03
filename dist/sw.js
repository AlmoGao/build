/* Admin 桌面推送 Service Worker — 仅处理 push / notificationclick，无预缓存逻辑 */

self.addEventListener('install', function () {
  self.skipWaiting()
})

self.addEventListener('activate', function (event) {
  event.waitUntil(self.clients.claim())
})

var APP_NAME  = 'ADMIN'
var APP_ICON  = '/favicon.svg'
var APP_BADGE = '/favicon.svg'

var pendingNavUrl = null

var TYPE_URL_MAP = {
  'deposit':      '/rechargeOrder',
  'withdraw':     '/withdrawlOrder',
  'kyc':          '/kycList',
  'kyc.advanced': '/highKycList',
  'support':      '/service',
}

self.addEventListener('push', function (event) {
  var data = {}
  try { data = event.data ? event.data.json() : {} } catch (e) {}
  var url   = data.url || (data.type && TYPE_URL_MAP[data.type]) || '/'
  var count = data.count || 0
  var body  = data.body || ''

  if (data.type === 'support' && count > 0) {
    if ('setAppBadge' in self.navigator) {
      self.navigator.setAppBadge(count).catch(function () {})
    }
  }

  var title = data.title || APP_NAME
  var options = {
    body:               body,
    icon:               data.icon  || APP_ICON,
    badge:              data.badge || APP_BADGE,
    tag:                data.tag   || data.type || 'admin-push',
    renotify:           true,
    requireInteraction: false,
    data: { url: url, type: data.type || '' },
  }

  event.waitUntil(self.registration.showNotification(title, options))
})

self.addEventListener('notificationclick', function (event) {
  event.notification.close()
  if ('clearAppBadge' in self.navigator) {
    self.navigator.clearAppBadge().catch(function () {})
  }
  var notifData = event.notification.data || {}
  var url  = notifData.url || '/'
  var type = notifData.type || ''

  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (clients) {
      var pwaClient = clients.find(function (c) { return c.focused }) || clients[0]
      if (pwaClient) {
        pwaClient.postMessage({ type: 'PUSH_NAVIGATE', url: url })
        return pwaClient.focus()
      }
      pendingNavUrl = url
      return self.clients.openWindow(self.registration.scope)
    })
  )
})

self.addEventListener('message', function (event) {
  if (event.data && event.data.type === 'GET_PENDING_NAV') {
    var nav = pendingNavUrl
    pendingNavUrl = null
    if (event.source) event.source.postMessage({ type: 'PENDING_NAV', url: nav })
  }
})

// 예전 오프라인 저장을 지우고 스스로 해제
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(caches.keys().then(function (k) { return Promise.all(k.map(function (x) { return caches.delete(x); })); }).then(function () { return self.registration.unregister(); })); });

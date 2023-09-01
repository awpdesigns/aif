self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open('aif').then(function (cache) {
            return cache.addAll([
                '/',
                '/index.php',
                '/assets/css/aif.min.css',
                '/assets/js/aif.js',
                '/assets/js/jquery.min.js',
                '/assets/js/bootstrap.bundle.min.js',
            ]);
        })
    );
});
self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});
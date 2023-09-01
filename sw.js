self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open('aif').then(function (cache) {
            return cache.addAll([
                'https://awpdesigns.github.io/aif/',
                'https://awpdesigns.github.io/aif/index.html',
                'https://awpdesigns.github.io/aif/assets/css/aif.min.css',
                'https://awpdesigns.github.io/aif/assets/js/aif.js',
                'https://awpdesigns.github.io/aif/assets/js/jquery.min.js',
                'https://awpdesigns.github.io/aif/assets/js/bootstrap.bundle.min.js',
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
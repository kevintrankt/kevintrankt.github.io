self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('the-magic-cache').then(function(cache) {
      return cache.addAll([
        '/',
        'index.html',
        'manifest.json',
        'thinking.png',
        'assets/js/main.js',
        'assets/css/main.css',
        'assets/js/util.js',
        'assets/js/skel.min.js',
        'assets/js/jquery.scrolly.min.js',
        'assets/js/jquery.scrollzer.min.js',
        'assets/js/jquery.min.js',
        'images/avatar.jpg',
        'images/banner.jpg',
        'images/pic01.jpg',
        'images/pic02.jpg',
        'images/pic03.jpg',


      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});

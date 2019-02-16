// //give access to sw - self
//triggered by web browser during installation, activation
self.addEventListener('install', function(event) {
  console.log('[Service Worker] Installing Service Worker ...', event);
});

self.addEventListener('activate', function(event) {
  console.log('[Service Worker] Activating Service Worker ...', event);
  return self.clients.claim();
});

//css, images..
//triggered by application during fetch request
self.addEventListener('fetch', function(event){
	console.log('[Service Worker] Fetching..', event);
	event.respondWith(fetch(event.request));
});
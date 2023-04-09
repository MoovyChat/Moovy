self.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  const promptEvent = event;
  // Disable zooming
  document
    .querySelector('meta[name="viewport"]')
    .setAttribute(
      'content',
      'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0'
    );
  // Show install prompt
  promptEvent.prompt();
});

// Listen for the install event
self.addEventListener('install', (event) => {
  // Install the service worker
  event.waitUntil(self.skipWaiting());
});

// Listen for the activate event
self.addEventListener('activate', (event) => {
  // Activate the service worker
  event.waitUntil(self.clients.claim());
});

// Listen for the fetch event
self.addEventListener('fetch', (event) => {
  // Return the response from the cache if it exists, or fetch it from the network
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

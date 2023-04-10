"use strict";

/* eslint-disable prettier/prettier */
self.addEventListener('beforeinstallprompt', function (event) {
  event.preventDefault();
  var promptEvent = event; // Disable zooming

  document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0'); // Show install prompt

  promptEvent.prompt();
}); // Listen for the install event

self.addEventListener('install', function (event) {
  // Install the service worker
  event.waitUntil(self.skipWaiting());
}); // Listen for the activate event

self.addEventListener('activate', function (event) {
  // Activate the service worker
  event.waitUntil(self.clients.claim());
}); // Listen for the fetch event

self.addEventListener('fetch', function (event) {
  // Return the response from the cache if it exists, or fetch it from the network
  event.respondWith(caches.match(event.request).then(function (response) {
    return response || fetch(event.request);
  }));
});
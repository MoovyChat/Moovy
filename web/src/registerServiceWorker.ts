// Check if the service worker is available
if ('serviceWorker' in navigator) {
  // Register the service worker
  navigator.serviceWorker
    .register('/service-worker.js')
    .then(() => console.log('Service worker registered'))
    .catch((error) => console.error('Error registering service worker', error));
}

export {};

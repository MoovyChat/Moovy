// Content script
let login;
let sync_login;
function main() {
  // Set up content script
  login = document.getElementById('login-btn');
  sync_login = document.getElementById('sync-login');
  if (login) {
    login.addEventListener('click', async () => {
      const user = localStorage.getItem('user');
      const userObj = JSON.parse(user);
      console.log(userObj);
      // await chrome.storage.local.set({ user: userObj }, (res) => {});
    });
  }

  if (sync_login) {
    sync_login.addEventListener('click', async (e) => {
      e.stopPropagation();
      const user = localStorage.getItem('user');
      const userObj = JSON.parse(user);
      await chrome.storage.local.set({ user: userObj }, (res) => {});
      chrome.runtime.sendMessage(
        { type: 'SYNC_LOGIN', user: userObj },
        function (response) {}
      );
    });
  }

  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === 'LOGOUT') {
      localStorage.removeItem('user');
      chrome.runtime.sendMessage({ type: 'DELETE_COOKIE' }, (tabId) => {});
      sendResponse({
        data: 'DELETE_COOKIE',
      });
    }
    return true;
  });
}

function destructor() {
  // Destruction is needed only once
  document.removeEventListener(destructionEvent, destructor);
  // Tear down content script: Unbind events, clear timers, restore DOM, etc.
}

var destructionEvent = 'destructmyextension_' + chrome.runtime.id;
// Unload previous content script if needed
document.dispatchEvent(new CustomEvent(destructionEvent));
document.addEventListener(destructionEvent, destructor);

// setInterval(() => {
//   if (!login || !sync_login) main();
// }, 100);
main();

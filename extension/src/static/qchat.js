// Content script
function main() {
  // Set up content script
  let login = document.getElementById('login-btn');
  if (!login) return;
  login.addEventListener('click', async (e) => {
    const user = localStorage.getItem('user');
    const userObj = JSON.parse(user);
    await chrome.storage.local.set({ user: userObj }, (res) => {
      console.log('RES', res);
    });
  });

  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === 'LOGOUT') {
      console.log('LOGGING OUT...');
      localStorage.removeItem('user');
      console.log('Removed user from local storage');
      chrome.runtime.sendMessage({ type: 'DELETE_COOKIE' }, (tabId) => {
        console.log('SENT MESSAGE FROM: ', tabId);
      });
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
main();

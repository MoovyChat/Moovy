import { createRoot } from "react-dom/client";
import refreshOnUpdate from "virtual:reload-on-update-in-view";
import App from "../../../popup/components/app/app";
import {
  getElementByDataUIA,
  getIdFromNetflixURL,
} from "../moovy/contentScript.utils";

refreshOnUpdate("pages/content");

import { PersistGate } from "redux-persist/integration/react";
import { Provider as ReduxProvider } from "react-redux";
import { store, persistor } from "../../../redux/store";
import Start from "../moovy/start";

chrome.runtime.onMessage.addListener(async function (
  request,
  sender,
  sendResponse
) {
  const { type, url } = request;
  if (type === "NEW_URL") {
    const id = await getIdFromNetflixURL(url);
    if (!id) return;
    main(id);
    sendResponse({ message: "URL Change notified" });
  }
  return true;
});

async function main(id: number | null) {
  let netflixId = id;
  const currentURL = window.location.href;
  if (!netflixId) netflixId = await getIdFromNetflixURL(currentURL);
  const CHAT_ICON = "moovychat";
  var reactApp = document.createElement("div");
  reactApp.id = CHAT_ICON;
  let isIconAlreadyExists = false;
  // Once the URL changes, send a request to background script to change the movieId.
  // Background script will send a request to content script to change the movieId.
  setTimeout(() => {
    chrome.runtime.sendMessage(
      { type: "CHANGE_MOVIE_ID", movieId: netflixId },
      (response) => {}
    );
  }, 1000);

  // Attach the chat icon when the video is loaded.
  let interval = setInterval(async () => {
    let elem = getElementByDataUIA("watch-video");
    if (elem) {
      const elemChildNodes = elem.childNodes;
      elemChildNodes.forEach((node) => {
        const nodeElem = node as HTMLDivElement;
        if (nodeElem.id === CHAT_ICON) {
          isIconAlreadyExists = true;
          clearInterval(interval);
        }
      });
      if (!isIconAlreadyExists) {
        elem.appendChild(reactApp);
        document.body.style.setProperty("margin", "0");
        const boot = createRoot(reactApp);
        boot.render(
          <ReduxProvider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <Start />
            </PersistGate>
          </ReduxProvider>
        );
        clearInterval(interval);
      }
    }
  }, 500);
}
main(null);

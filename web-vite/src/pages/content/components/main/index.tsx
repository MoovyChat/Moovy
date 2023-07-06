import { createRoot } from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import refreshOnUpdate from "virtual:reload-on-update-in-view";
import { persistor, store } from "../../../redux/store";
import {
  getMovieIdFromURL,
  getPlayerViewElement,
} from "../moovy/contentScript.utils";
import Start from "../moovy/start";

refreshOnUpdate("pages/content");

const CHAT_ICON = "moovychat";

chrome.runtime.onMessage.addListener(async function (
  request,
  sender,
  sendResponse
) {
  try {
    const { type, url } = request;
    if (type === "NEW_URL") {
      const id = await getMovieIdFromURL(url);
      if (!id) return;
      await main(id);
      sendResponse({ message: "URL Change notified" });
    }
  } catch (err) {
    console.error(err);
  }
  return true;
});

async function attachChatIcon() {
  var reactApp = document.createElement("div");
  reactApp.id = CHAT_ICON;
  let isIconAlreadyExists = false;

  // Attach the chat icon when the video is loaded.
  const intervalId = setInterval(async () => {
    const videoElem = document.querySelector("video");
    const elem = getPlayerViewElement();

    if (videoElem && elem) {
      isIconAlreadyExists = Array.from(elem.childNodes).some(
        (node) => (node as HTMLDivElement).id === CHAT_ICON
      );

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
        clearInterval(intervalId);
      }
    }
  }, 1000);
}

async function main(id: string | null) {
  let idFromPlatform = id;
  const currentURL = window.location.href;
  if (!idFromPlatform) idFromPlatform = await getMovieIdFromURL(currentURL);
  // Once the URL changes, send a request to background script to change the movieId.
  // Background script will send a request to content script to change the movieId.
  chrome.runtime.sendMessage(
    { type: "CHANGE_MOVIE_ID", movieId: idFromPlatform },
    (response) => {
      if (chrome.runtime.lastError) {
        // Handle error when sending the message
        console.error(chrome.runtime.lastError.message);
        return;
      }

      if (response.error) {
        // Handle error from the background script
        console.error(response.error);
        return;
      }

      // Success
      console.log({ response });
    }
  );

  await attachChatIcon();
}

main(null);

import './registerServiceWorker.ts';

import * as ReactDOMClient from 'react-dom/client';

import { persistedStore, store } from './redux/store';

import Main from './main';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import React from 'react';
import reportWebVitals from './reportWebVitals';
import { SocketProvider } from './context/socketContext.js';

const rootElement = document.getElementById('root');

const root = rootElement && ReactDOMClient.createRoot(rootElement);

root &&
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistedStore}>
          <SocketProvider>
            <React.Fragment>
              <Main />
            </React.Fragment>
          </SocketProvider>
        </PersistGate>
      </Provider>
    </React.StrictMode>,
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

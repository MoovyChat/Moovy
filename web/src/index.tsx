import './registerServiceWorker.ts';

import * as ReactDOMClient from 'react-dom/client';

import { persistedStore, store } from './redux/store';

import GoogleAnalytics from './components/google-analytics/googleAnalytics';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { router } from './utils/router';

const rootElement = document.getElementById('root');

const root = rootElement && ReactDOMClient.createRoot(rootElement);

root &&
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistedStore}>
          <React.Fragment>
            <GoogleAnalytics />
            <RouterProvider router={router} />
          </React.Fragment>
        </PersistGate>
      </Provider>
    </React.StrictMode>,
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

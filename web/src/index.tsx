import './index.css';
import './registerServiceWorker.ts';

import { persistedStore, store } from './redux/store';

import GoogleAnalytics from './components/google-analytics/googleAnalytics';
import { Helmet } from 'react-helmet';
import HomeRouter from './routes';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

const root = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <>
          <GoogleAnalytics />
          <HomeRouter />
        </>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

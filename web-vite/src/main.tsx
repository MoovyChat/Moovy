import './index.css'

import { persistedStore, store } from './redux/store';

import GoogleAnalytics from './components/google-analytics/googleAnalytics';
import HomeRouter from './routes';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import React from 'react'
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistedStore}>
          <React.Fragment>
            <GoogleAnalytics />
            <HomeRouter />
          </React.Fragment>
        </PersistGate>
      </Provider>
    </React.StrictMode>
)

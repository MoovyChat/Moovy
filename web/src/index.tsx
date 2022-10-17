import './index.css';

import { Route, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { darkTheme, lightTheme } from '../src/utils/themes/theme';

import App from './pages/app/app';
import { GlobalStyles } from './utils/themes/globalStyles';
import Header from './pages/header/header';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <React.Fragment>
        <RouterProvider router={router} />
      </React.Fragment>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

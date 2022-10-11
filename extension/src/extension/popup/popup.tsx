import App from '../components/app/app';
import React from 'react';
import { createRoot } from 'react-dom/client';

var reactApp = document.createElement('div');
document.body.appendChild(reactApp);
document.body.style.setProperty('margin', '0');
const root = createRoot(reactApp);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

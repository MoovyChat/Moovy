import { Provider, createClient } from 'urql';

import App from '../components/app/app';
import React from 'react';
import { createRoot } from 'react-dom/client';

const client = createClient({ url: 'http://localhost:4000/graphql' });

var reactApp = document.createElement('div');
document.body.appendChild(reactApp);
document.body.style.setProperty('margin', '0');
const root = createRoot(reactApp);
root.render(
  <React.StrictMode>
    <Provider value={client}>
      <App />
    </Provider>
  </React.StrictMode>
);

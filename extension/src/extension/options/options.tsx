import React from 'react';
import { createRoot } from 'react-dom/client';
import OptionsHome from '../../optionsPage/optionsHome/optionsHome';

var reactApp = document.createElement('div');
document.body.appendChild(reactApp);
document.body.style.setProperty('margin', '0');
const root = createRoot(reactApp);
root.render(
  <React.StrictMode>
    <OptionsHome />
  </React.StrictMode>
);

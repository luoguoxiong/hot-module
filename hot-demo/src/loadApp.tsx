import React, { StrictMode } from 'react';
import { render } from 'react-dom';

import App from './app';

const rootElement = document.getElementById('root');

render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);

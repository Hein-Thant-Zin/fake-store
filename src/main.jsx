import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Store from './components/Store';

const rootEl = document.querySelector('#root');
ReactDOM.createRoot(rootEl).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

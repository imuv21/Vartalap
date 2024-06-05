import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <div>
        <App onContextMenu={(e) => e.preventDefault()} />
      </div>
    </HelmetProvider>
  </React.StrictMode>,
);

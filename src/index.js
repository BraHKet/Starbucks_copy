import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <head>
      <link href='https://fonts.googleapis.com/css?family=Lato:400,700' rel='stylesheet' type='text/css' />
      <link href='https://fonts.googleapis.com/css?family=Poppins:400,700,900' rel='stylesheet' type='text/css' />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <App />
  </React.StrictMode>
);

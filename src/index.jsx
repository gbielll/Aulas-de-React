import React from 'react';
import ReactDOM from 'react-dom/client'; //extensao do React que retorna algo
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <App />
  </React.StrictMode>
);


import React from 'react';
import ReactDOM from 'react-dom/client';  // Note que estamos importando de 'react-dom/client'
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));  // Criação da raiz
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

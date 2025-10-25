import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // 🔹 Importando o componente padrão

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> {/* 🔹 Aqui o App é realmente usado */}
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom';
import Inicio from './componentes/Inicio'; // Asegúrate de que la ruta sea la correcta
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Inicio />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

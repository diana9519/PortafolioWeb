// App.js
import React, { useState } from 'react';
import Encabezado from './componentes/Encabezado';
import Proyectos from './componentes/Proyectos';
import Habilidades from './componentes/Habilidades';
import EnlacesExternos from './componentes/EnlacesExternos';
import MainContent from './componentes/MainContent'; // Importa tu componente MainContent aquí
import './App.css';
import '../src/styles/main.css';

const App = () => {
  const [seccionActual, setSeccionActual] = useState('inicio');
  const [mostrarMainContent, setMostrarMainContent] = useState(true);

  const mostrarSeccion = (seccion) => {
    setSeccionActual(seccion);
  };

  const cambiarPagina = () => {
    setMostrarMainContent(false);
  };

  return (
    <div className="App">
      {mostrarMainContent ? (
        <MainContent cambiarPagina={cambiarPagina} />
      ) : (
        <>
          {/* Menú de navegación */}
          <nav className="menu">
            <div className="menu-header">
              <img
                src={process.env.PUBLIC_URL + '/imagenes/imgDiana.png'}
                alt="Imagen de encabezado"
                className="profile-image"
              />
            </div>
            <ul>
              <li onClick={() => mostrarSeccion('inicio')}>Inicio</li>
              <li onClick={() => mostrarSeccion('proyectos')}>Proyectos</li>
              <li onClick={() => mostrarSeccion('habilidades')}>Habilidades</li>
              <li onClick={() => mostrarSeccion('enlacesExternos')}>
                Enlaces Externos
              </li>
            </ul>
          </nav>

          {/* Contenido dinámico basado en la sección actual */}
          <div className="content">
            {seccionActual === 'inicio' && <Encabezado />}
            {seccionActual === 'proyectos' && <Proyectos />}
            {seccionActual === 'habilidades' && <Habilidades />}
            {seccionActual === 'enlacesExternos' && <EnlacesExternos />}
          </div>
        </>
      )}
    </div>
  );
};

export default App;

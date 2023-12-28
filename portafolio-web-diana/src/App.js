import React, { useState } from 'react';
import Encabezado from './componentes/Encabezado';
import Proyectos from './componentes/Proyectos';
import Habilidades from './componentes/Habilidades';
import EnlacesExternos from './componentes/EnlacesExternos';
import './App.css'; // o import './App.css';

const App = () => {
  const [seccionActual, setSeccionActual] = useState('inicio');

  const mostrarSeccion = (seccion) => {
    setSeccionActual(seccion);
  };

  return (
    <div className="App">
      {/* Imagen sobre el menú */}
      <div className="header-image">
        <img src="ruta/de/la/imagen.jpg" alt="Imagen de encabezado" />
      </div>

      {/* Menú de navegación */}
      <nav>
        <ul>
          <li onClick={() => mostrarSeccion('inicio')}>Inicio</li>
          <li onClick={() => mostrarSeccion('proyectos')}>Proyectos</li>
          <li onClick={() => mostrarSeccion('habilidades')}>Habilidades</li>
          <li onClick={() => mostrarSeccion('enlacesExternos')}>Enlaces Externos</li>
        </ul>
      </nav>

      {/* Contenido dinámico basado en la sección actual */}
      <div className="content">
        {seccionActual === 'inicio' && <Encabezado />}
        {seccionActual === 'proyectos' && <Proyectos />}
        {seccionActual === 'habilidades' && <Habilidades />}
        {seccionActual === 'enlacesExternos' && <EnlacesExternos />}
      </div>
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import styles from '../styles/Menu.module.css'; // Importa los estilos modulares específicos para MainContent
import Encabezado from './Encabezado';
import Proyectos from './Proyectos';
import Habilidades from './Habilidades';
import EnlacesExternos from './EnlacesExternos';
import imgDiana from '../assets/imgDiana.png'; // Importa la imagen desde la carpeta de assets

const MainContent = () => {
  const [seccionActual, setSeccionActual] = useState('inicio');

  const mostrarSeccion = (seccion) => {
    setSeccionActual(seccion);
  };

  return (
    <div className={styles.MainContainer}>
      <div className={styles.Menu}>
        <nav>
          {/* Aquí se añade la imagen dentro del menú */}
          <img src={imgDiana} alt="Diana" className={styles.menuImage} />

          <ul>
            <li onClick={() => mostrarSeccion('inicio')}>Inicio</li>
            <li onClick={() => mostrarSeccion('proyectos')}>Proyectos</li>
            <li onClick={() => mostrarSeccion('habilidades')}>Habilidades</li>
            <li onClick={() => mostrarSeccion('enlacesExternos')}>Enlaces Externos</li>
          </ul>
        </nav>
      </div>

      <div className={styles.MenuContent}>
        {seccionActual === 'inicio' && <Encabezado />}
        {seccionActual === 'proyectos' && <Proyectos />}
        {seccionActual === 'habilidades' && <Habilidades />}
        {seccionActual === 'enlacesExternos' && <EnlacesExternos />}
      </div>
    </div>
  );
};

export default MainContent;

// Proyectos.js
import React, { useState } from 'react';
import styles from '../styles/Proyectos.module.css';
import DetalleProyecto from './DetalleProyecto'; // Importa el componente de detalles
import proyecto1 from '../assets/proyectos/proyecto1.png';
import proyecto2 from '../assets/proyectos/proyecto2.png';
import proyecto3 from '../assets/proyectos/proyecto3.png';
import proyecto4 from '../assets/proyectos/proyecto4.png';

const Proyectos = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (proyecto) => {
    setSelectedProject(proyecto);
  };

  return (
    <div className={styles['proyectos-container']}>
      <div className={styles.titleContainer}>
          <div className={styles.titleLine}></div>
          <h1 className={styles.titleText}>Mis Proyectos</h1>
        </div>
      <div className={styles['grid-container']}>
        {[
          { id: 1, titulo: 'Alerta en caso de emergencia', imagen: proyecto1 },
          { id: 2, titulo: 'Sistema de amortización', imagen: proyecto2 },
          { id: 3, titulo: 'Sistema de Gestión de Pasajes', imagen: proyecto3 },
          { id: 4, titulo: 'Facturación Electrónica', imagen: proyecto4 },
         
        ].map((proyecto) => (
          <div className={styles.proyecto} key={proyecto.id} onClick={() => handleProjectClick(proyecto)}>
            <img
              src={proyecto.imagen}
              alt={proyecto.titulo}
              className={styles['small-image']}
            />
            <h3>{proyecto.titulo}</h3>
          </div>
        ))}
      </div>

      {selectedProject && (
        <DetalleProyecto
          proyecto={selectedProject}
          onClose={() => setSelectedProject(null)}
          proyecto1={proyecto1}
          proyecto2={proyecto2}
          proyecto3={proyecto3}
          proyecto4={proyecto4}
        />
      )}
    </div>
  );
};

export default Proyectos;

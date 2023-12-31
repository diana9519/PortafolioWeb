// Proyectos.js
import React, { useState } from 'react';
import styles from '../styles/Proyectos.module.css';
import DetalleProyecto from './DetalleProyecto'; // Importa el componente de detalles
import proyecto1 from '../assets/proyectos/proyecto1.png';
import proyecto2 from '../assets/proyectos/proyecto1.png';
import proyecto3 from '../assets/proyectos/proyecto1.png';
import proyecto4 from '../assets/proyectos/proyecto1.png';
import proyecto5 from '../assets/proyectos/proyecto1.png';
import proyecto6 from '../assets/proyectos/proyecto1.png';

const Proyectos = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (proyecto) => {
    setSelectedProject(proyecto);
  };

  return (
    <div className={styles['proyectos-container']}>
      <h2>Mis Proyectos</h2>
      <div className={styles['grid-container']}>
        {[
          { id: 1, titulo: 'Aplicación de envío de alerta en caso de emergencia', imagen: proyecto1 },
          { id: 2, titulo: 'SQL Server', imagen: proyecto2 },
          { id: 3, titulo: 'StarUML', imagen: proyecto3 },
          { id: 4, titulo: 'Visual Studio Code', imagen: proyecto4 },
          { id: 5, titulo: 'Visual Studio Community', imagen: proyecto5 },
          { id: 6, titulo: 'Windows', imagen: proyecto6 },
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
        />
      )}
    </div>
  );
};

export default Proyectos;

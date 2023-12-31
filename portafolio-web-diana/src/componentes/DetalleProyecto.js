// DetalleProyecto.js
import React from 'react';
import styles from '../styles/Proyectos.module.css';
import imagen11 from '../assets/proyectos/p11.png';
import imagen12 from '../assets/proyectos/p12.png';


const DetalleProyecto = ({ proyecto, onClose }) => {
  // Información del primer proyecto
  const informacionProyecto = {
    descripcion: 'Aplicación de escritorio y móvil utilizando una arquitectura en capas para él envió de notificaciones de una sucursal a otras en situaciones de emergencia.',
    herramientas: [
      'Visual Studio Community',
      'Microsoft Sql Server',
      'Somee',
      'Servicios WCF con JSON',
      'Notificaciones PUSH(Google Cloud Messaging)',
      'Xamarin',
      'SignalR'
    ],
    gitRepo: 'https://github.com/diana9519/ProyectoAplicacionesD.git',
    imagenes: [
      { titulo: 'Aplicacion de escritorio', imagen: imagen11 },
      { titulo: 'Aplicacion movil', imagen: imagen12 }
    ]
  };

  // Verificar si es el primer proyecto y mostrar la información correspondiente
  const esPrimerProyecto = proyecto && proyecto.id === 1;

  return (
    <div className={styles.modalBackground} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {esPrimerProyecto && (
          <>
            <h2>Detalle del Proyecto</h2>
            <div>
              <h3>Descripción:</h3>
              <p>{informacionProyecto.descripcion}</p>
              <h3>Herramientas y Lenguajes utilizados:</h3>
              <ul>
                {informacionProyecto.herramientas.map((herramienta, index) => (
                  <li key={index}>{herramienta}</li>
                ))}
              </ul>
              <h3>Acceso al repositorio de git:</h3>
              <a href={informacionProyecto.gitRepo} target="_blank" rel="noopener noreferrer">
                {informacionProyecto.gitRepo}
              </a>
              <h3>Imágenes:</h3>
              <div className={styles.imagenesContainer}>
                {informacionProyecto.imagenes.map((imagen, index) => (
                  <div key={index}>
                    <h4>{imagen.titulo}</h4>
                    <img src={imagen.imagen} alt={imagen.titulo} />
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
        <span className={styles.close} onClick={onClose}>&times;</span>
      </div>
    </div>
  );
};

export default DetalleProyecto;

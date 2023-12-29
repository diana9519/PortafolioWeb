import React, { useState } from 'react';
import styles from '../styles/Inicio.module.css'; // Importa los estilos modulares específicos para Inicio
import pcImage from './../assets/pc.gif';
import Menu from './Menu';

const Inicio = () => {
  const [mostrarMenu, setMostrarMenu] = useState(false);
  const handleRedirect = () => {
    setMostrarMenu(true);
  };

  return (
    <div className={styles.InicioBackground}>
      {!mostrarMenu ? (
        <div className={styles.InicioContent}>
          <img id="pc" src={pcImage} alt="Culebrita" />
          <div className={styles.InicioTitleContainer}>
            <h1>Portafolio Diana Pinchao</h1>
            <button className={styles.InicioStartButton} onClick={handleRedirect}>
              Empezar
            </button>
          </div>
        </div>
      ) : (
        <Menu />
      )}
    </div>
  );
};

export default Inicio;

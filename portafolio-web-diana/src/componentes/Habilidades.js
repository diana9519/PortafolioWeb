import React from 'react';
import styles from '../styles/Habilidades.module.css';// Importa el archivo de estilos CSS de habilidades

const Habilidades = () => {
  return (
    <div className={styles['skills-container']}>
      <h2>Mis Habilidades</h2>

      {/* Lenguajes de Programación */}
      <div className="skill-category">
        <h3>Lenguajes de Programación</h3>
        <div className="skills-row">
          <div className="skill">
            <img src="http://img.shields.io/badge/-Java-5B4638" alt="Java" />
            <p>Java</p>
          </div>
          <div className="skill">
            <img src="http://img.shields.io/badge/-Python-3776AB" alt="Python" />
            <p>Python</p>
          </div>
          {/* Agrega más habilidades de lenguajes de programación aquí */}
        </div>
      </div>

      {/* Otra categoría, por ejemplo, Herramientas */}
      <div className="skill-category">
        <h3>Herramientas</h3>
        <div className="skills-row">
          <div className="skill">
            <img src="https://img.shields.io/badge/-JavaScript-%23F7DF1C" alt="JavaScript" />
            <p>JavaScript</p>
          </div>
          <div className="skill">
            <img src="https://img.shields.io/badge/-HTML-%23E44D27" alt="HTML" />
            <p>HTML</p>
          </div>
          {/* Agrega más habilidades de herramientas aquí */}
        </div>
      </div>

      {/* Agrega más categorías según sea necesario */}
    </div>
  );
};

export default Habilidades;

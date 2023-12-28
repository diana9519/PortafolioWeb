// MainContent.js
import React, { useState } from 'react';
import '../styles/main.css';
import pcImage from './../assets/pc.gif'; // Ruta de la imagen de la culebrita

const MainContent = ({ cambiarPagina }) => {
  const [mostrarPortafolio, setMostrarPortafolio] = useState(false);

  const handleClick = () => {
    setMostrarPortafolio(true);
  };

  return (
    <div className="background">
      {!mostrarPortafolio ? (
        <div className="content">
          <img id="pc" src={pcImage} alt="Culebrita" />
          <div className="title-container">
            <h1>Portafolio Diana Pinchao</h1>
            <button className="start-button" onClick={handleClick}>
              Empezar
            </button>
          </div>
        </div>
      ) : (
        <h2>Aquí va el contenido de tu portafolio</h2>
        // Añade aquí el contenido de tu portafolio
      )}
    </div>
  );
};

export default MainContent;

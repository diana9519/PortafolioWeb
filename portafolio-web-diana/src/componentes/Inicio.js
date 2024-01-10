import React, { useState, useEffect } from "react";
import styles from "../styles/Inicio.module.css";
import pcImage from "./../assets/prog.gif";
import Menu from "./Menu";

const Inicio = () => {
  const [mostrarMenu, setMostrarMenu] = useState(false);
  const [textToShow, setTextToShow] = useState("");
  const text = "Soy Diana Pinchao ...";
  const delay = 100;
  const pauseTime = 2000;

  useEffect(() => {
    let i = 0;
    let isDeleting = false;

    const typeEffect = () => {
      const currentText = text.substring(0, i);
      setTextToShow(currentText);

      if (!isDeleting && i === text.length) {
        isDeleting = true;
        setTimeout(typeEffect, pauseTime);
      } else if (isDeleting && i === 0) {
        isDeleting = false;
        setTimeout(typeEffect, delay);
      } else if (isDeleting) {
        i--;
        setTimeout(typeEffect, delay);
      } else {
        i++;
        setTimeout(typeEffect, delay);
      }
    };

    typeEffect();

    return () => clearTimeout();
  }, [text, delay, pauseTime]);

  const handleRedirect = () => {
    setMostrarMenu(true);
  };

  return (
    <div className={styles.InicioBackground}>
      {!mostrarMenu ? (
        <div className={styles.InicioContent}>
          <h1>{textToShow}</h1>
          <div className={styles.InicioImageContainer}>
            <img
              id="pc"
              src={pcImage}
              alt="Pc"
              className={styles.InicioImage}
            />
          </div>
          <div className={styles.InicioTextContainer}>
            <button
              className={styles.InicioStartButton}
              onClick={handleRedirect}
            >
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

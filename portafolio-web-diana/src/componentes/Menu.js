import React, { useState } from "react";
import styles from "../styles/Menu.module.css";
import Encabezado from "./Encabezado";
import Proyectos from "./Proyectos";
import Habilidades from "./Habilidades";
import MasInfo from "./MasInfo";
import imgDiana from "../assets/imgDiana.png";

const MainContent = () => {
  const [seccionActual, setSeccionActual] = useState("inicio");

  const mostrarSeccion = (seccion) => {
    setSeccionActual(seccion);
  };

  return (
    <div className={styles.MainContainer}>
      <div className={styles.Menu}>
        <nav>
          <img src={imgDiana} alt="Diana" className={styles.menuImage} />

          <ul>
            <li onClick={() => mostrarSeccion("inicio")}>Inicio</li>
            <li onClick={() => mostrarSeccion("proyectos")}>Proyectos</li>
            <li onClick={() => mostrarSeccion("habilidades")}>Habilidades</li>
            <li onClick={() => mostrarSeccion("info")}>Contáctame</li>
          </ul>
        </nav>
      </div>

      <div className={styles.MenuContent}>
        {seccionActual === "inicio" && <Encabezado />}
        {seccionActual === "proyectos" && <Proyectos />}
        {seccionActual === "habilidades" && <Habilidades />}
        {seccionActual === "info" && <MasInfo />}
      </div>
    </div>
  );
};

export default MainContent;

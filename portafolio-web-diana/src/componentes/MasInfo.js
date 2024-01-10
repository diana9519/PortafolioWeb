import React from "react";
import styles from "../styles/MasInfo.module.css";
import linkedInLogo from "../assets/herramientas/in.png";
import githubLogo from "../assets/herramientas/github.png";

const MasInfo = () => {
  return (
    <div className={styles.masInfoContainer}>
      <div className={styles.titleContainer}>
        <div className={styles.titleLine}></div>
        <h1 className={styles.titleText}>Más Información</h1>
      </div>
      <div className={styles.masInfoLinks}>
        <a
          href="https://www.linkedin.com/in/diana-pinchao"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedInLogo} alt="LinkedIn" className={styles.logo} />
        </a>
        <a
          href="https://github.com/diana9519"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubLogo} alt="GitHub" className={styles.logo} />
        </a>
      </div>
      <p className={styles.emailText}>
        Correo electrónico: dianajazminpf@gmail.com
      </p>
    </div>
  );
};

export default MasInfo;

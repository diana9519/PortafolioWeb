import React from "react";
import styles from "../styles/Habilidades.module.css";
import angularImage from "../assets/herramientas/angular.png";
import bootstrapImage from "../assets/herramientas/bootstrap.png";
import cssImage from "../assets/herramientas/css.png";
import firebaseImage from "../assets/herramientas/firebase.png";
import gitImage from "../assets/herramientas/git.png";
import githubImage from "../assets/herramientas/github.png";
import gitlabImage from "../assets/herramientas/gitlab.png";
import htmlImage from "../assets/herramientas/html.png";
import ijideaImage from "../assets/herramientas/ijidea.png";
import javaImage from "../assets/herramientas/java.png";
import jsImage from "../assets/herramientas/js.png";
import netbeansImage from "../assets/herramientas/netbeans.png";
import phpImage from "../assets/herramientas/php.png";
import pythonImage from "../assets/herramientas/python.png";
import sqlserverImage from "../assets/herramientas/sqlserver.png";
import startumlImage from "../assets/herramientas/startuml.png";
import vscodeImage from "../assets/herramientas/vscode.png";
import vscomImage from "../assets/herramientas/vscommunity.png";
import windowsImage from "../assets/herramientas/windows.png";

const Habilidades = () => {
  return (
    <div className={styles["skills-container"]}>
      <div className={styles.titleContainer}>
        <div className={styles.titleLine}></div>
        <h1 className={styles.titleText}>Mis Habilidades</h1>
      </div>
      <div className={styles["table-container"]}>
        <table className={styles["skills-table"]}>
          <tbody>
            <tr>
              <td>Tecnologías de Estructura y Diseño Web</td>
              <td>
                <a href="https://html5.org" target="_blank" rel="noreferrer">
                  <img
                    src={htmlImage}
                    alt="HTML"
                    className={styles["small-image"]}
                  />
                </a>
                <a
                  href="https://desarrolloweb.com/home/css"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={cssImage}
                    alt="CSS"
                    className={styles["small-image"]}
                  />
                </a>
              </td>
            </tr>
            <tr>
              <td>Lenguajes de Programación</td>
              <td>
                <a
                  href="https://www.java.com/es/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={javaImage}
                    alt="Java"
                    className={styles["small-image"]}
                  />
                </a>
                <a
                  href="https://www.javascript.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={jsImage}
                    alt="JavaScript"
                    className={styles["small-image"]}
                  />
                </a>
                <a
                  href="https://www.python.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={pythonImage}
                    alt="Python"
                    className={styles["small-image"]}
                  />
                </a>
                <a
                  href="https://www.microsoft.com/es-es/sql-server/sql-server-downloads"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={sqlserverImage}
                    alt="SQL Server"
                    className={styles["small-image"]}
                  />
                </a>
                <a href="https://www.php.net" target="_blank" rel="noreferrer">
                  <img
                    src={phpImage}
                    alt="PHP"
                    className={styles["small-image"]}
                  />
                </a>
              </td>
            </tr>
            <tr>
              <td>Frameworks y Bibliotecas</td>
              <td>
                <a href="https://angular.io" target="_blank" rel="noreferrer">
                  <img
                    src={angularImage}
                    alt="Angular"
                    className={styles["small-image"]}
                  />
                </a>
                <a
                  href="https://getbootstrap.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={bootstrapImage}
                    alt="Bootstrap"
                    className={styles["small-image"]}
                  />
                </a>
              </td>
            </tr>
            <tr>
              <td>Herramientas de Desarrollo</td>
              <td>
                <a href="https://git-scm.com" target="_blank" rel="noreferrer">
                  <img
                    src={gitImage}
                    alt="Git"
                    className={styles["small-image"]}
                  />
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer">
                  <img
                    src={githubImage}
                    alt="GitHub"
                    className={styles["small-image"]}
                  />
                </a>
                <a
                  href="https://gitlab.com/gitlab-com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={gitlabImage}
                    alt="GitLab"
                    className={styles["small-image"]}
                  />
                </a>
                <a
                  href="https://www.jetbrains.com/es-es/idea/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={ijideaImage}
                    alt="IntelliJ IDEA"
                    className={styles["small-image"]}
                  />
                </a>
                <a
                  href="https://netbeans.apache.org/front/main/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={netbeansImage}
                    alt="NetBeans"
                    className={styles["small-image"]}
                  />
                </a>
                <a href="https://staruml.io" target="_blank" rel="noreferrer">
                  <img
                    src={startumlImage}
                    alt="StarUML"
                    className={styles["small-image"]}
                  />
                </a>
                <a
                  href="https://code.visualstudio.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={vscodeImage}
                    alt="Visual Studio Code"
                    className={styles["small-image"]}
                  />
                </a>
                <a
                  href="https://visualstudio.microsoft.com/es/vs/community/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={vscomImage}
                    alt="Visual Studio Community"
                    className={styles["small-image"]}
                  />
                </a>
              </td>
            </tr>
            <tr>
              <td>Plataformas</td>
              <td>
                <a
                  href="https://firebase.google.com/?hl=es"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={firebaseImage}
                    alt="Firebase"
                    className={styles["small-image"]}
                  />
                </a>
              </td>
            </tr>
            <tr>
              <td>Sistemas Operativos</td>
              <td>
                <a
                  href="https://www.microsoft.com/es-pa/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={windowsImage}
                    alt="Windows"
                    className={styles["small-image"]}
                  />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Habilidades;

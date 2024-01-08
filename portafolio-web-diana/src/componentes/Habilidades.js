import React from 'react';
import styles from '../styles/Habilidades.module.css'; // Importa el archivo de estilos Sass de habilidades
import angularImage from '../assets/herramientas/angular.png';
import bootstrapImage from '../assets/herramientas/bootstrap.png';
import cssImage from '../assets/herramientas/css.png';
import firebaseImage from '../assets/herramientas/firebase.png';
import gitImage from '../assets/herramientas/git.png';
import githubImage from '../assets/herramientas/github.png';
import gitlabImage from '../assets/herramientas/gitlab.png';
import htmlImage from '../assets/herramientas/html.png';
import ijideaImage from '../assets/herramientas/ijidea.png';
import javaImage from '../assets/herramientas/java.png';
import jsImage from '../assets/herramientas/js.png';
import netbeansImage from '../assets/herramientas/netbeans.png';
import phpImage from '../assets/herramientas/php.png';
import pythonImage from '../assets/herramientas/python.png';
import sqlserverImage from '../assets/herramientas/sqlserver.png';
import startumlImage from '../assets/herramientas/startuml.png';
import vscodeImage from '../assets/herramientas/vscode.png';
import vscomImage from '../assets/herramientas/vscommunity.png';
import windowsImage from '../assets/herramientas/windows.png';

const Habilidades = () => {
  return (
    <div className={styles['skills-container']}>
      
      <div className={styles.titleContainer}>
          <div className={styles.titleLine}></div>
          <h1 className={styles.titleText}>Mis Habilidades</h1>
      </div>
      <div className={styles['table-container']}>
        <table className={styles['skills-table']}>
          <tbody>
            <tr>
              <td>Tecnologías de Estructura y Diseño Web</td>
              <td>
                <img src={htmlImage} alt="HTML" className={styles['small-image']} />
                <img src={cssImage} alt="CSS" className={styles['small-image']} />
              </td>
            </tr>
            <tr>
              <td>Lenguajes de Programación</td>
              <td>
                <img src={javaImage} alt="Java" className={styles['small-image']} />
                <img src={jsImage} alt="JavaScript" className={styles['small-image']} />
                <img src={pythonImage} alt="Python" className={styles['small-image']} />
                <img src={sqlserverImage} alt="SQL Server" className={styles['small-image']} />
                <img src={phpImage} alt="PHP" className={styles['small-image']} />
              </td>
            </tr>
            <tr>
              <td>Frameworks y Bibliotecas</td>
              <td>
                <img src={angularImage} alt="Angular" className={styles['small-image']} />
                <img src={bootstrapImage} alt="Bootstrap" className={styles['small-image']} />
              </td>
            </tr>
            <tr>
              <td>Herramientas de Desarrollo</td>
              <td>
                <img src={gitImage} alt="Git" className={styles['small-image']} />
                <img src={githubImage} alt="GitHub" className={styles['small-image']} />
                <img src={gitlabImage} alt="GitLab" className={styles['small-image']} />
                <img src={ijideaImage} alt="IntelliJ IDEA" className={styles['small-image']} />
                <img src={netbeansImage} alt="NetBeans" className={styles['small-image']} />
                <img src={startumlImage} alt="StarUML" className={styles['small-image']} />
                <img src={vscodeImage} alt="Visual Studio Code" className={styles['small-image']} />
                <img src={vscomImage} alt="Visual Studio Community" className={styles['small-image']} />
              </td>
            </tr>
            <tr>
              <td>Plataformas</td>
              <td>
                <img src={firebaseImage} alt="Firebase" className={styles['small-image']} />
              </td>
            </tr>
            <tr>
              <td>Sistemas Operativos</td>
              <td>
                <img src={windowsImage} alt="Windows" className={styles['small-image']} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Habilidades;

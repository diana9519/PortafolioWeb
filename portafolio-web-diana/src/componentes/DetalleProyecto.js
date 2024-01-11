import React from "react";
import styles from "../styles/Proyectos.module.css";
import imagen11 from "../assets/proyectos/p13.png";
import proyecto21 from "../assets/proyectos/p21.png";
import proyecto22 from "../assets/proyectos/p22.png";
import proyecto31 from "../assets/proyectos/p31.png";
import proyecto41 from "../assets/proyectos/p41.png";

const DetalleProyecto = ({ proyecto, onClose }) => {
  const informacionProyecto1 = {
    descripcion:
      "Aplicación móvil y de escritorio utilizando una arquitectura en capas para el envío de notificaciones de una sucursal a otras en situaciones de emergencia. Este sistema permite que el proceso de pedir algún tipo de ayuda sea mucho más rápido ya que solo se tendría que iniciar sesión y enviar la alerta evitándose así de llamar a un número de emergencia que puede tornarse muy demoroso ya que suelen realizar muchas preguntas. ",
    herramientas: [
      "Visual Studio Community",
      "Microsoft Sql Server",
      "Somee",
      "Servicios WCF con JSON",
      "Notificaciones PUSH (Google Cloud Messaging)",
      "Xamarin",
      "SignalR",
    ],
    gitRepo: "https://github.com/diana9519/ProyectoAplicacionesD.git",
    imagenes: [
      { titulo: "Aplicación de escritorio y móvil", imagen: imagen11 },
    ],
  };

  const informacionProyecto2 = {
    descripcion:
      "Es una aplicación desarrollada para ser utilizada en el ámbito financiero y contable para planificar el pago de una deuda a lo largo del tiempo. Este sistema cuenta con dos sistemas de amortización, el Alemán y el Francés.",
    herramientas: [
      "PHP",
      "CSS",
      "JavaScript",
      "HTML",
      "Modelo Vista Controlador (MVC)",
      "Visual Studio Code",
      "000webhost",
    ],
    gitRepo: "https://github.com/diana9519/ProyectoEconomia.git",
    sistemaLink:
      "https://proyectoeconomiasda.000webhostapp.com/Sistemas%20de%20Amortizaci%C3%B3n/index.php",
    imagenes: [
      { titulo: "Sistema para el usuario", imagen: proyecto21 },
      { titulo: "Sistema para el administrador", imagen: proyecto22 },
    ],
  };

  const informacionProyecto3 = {
    descripcion:
      "Sistema que permite la gestión y venta de pasajes a usuarios de buses interprovinciales en Ecuador. La presente esta pensada para cuatro usuarios diferentes, la primera aplicación web tiene como propósito proporcionar la administración de la información de cooperativas y frecuencias a los usuarios de la Agencia Nacional de Tránsito ecuatoriana. La segunda aplicación web tiene como propósito proporcionar la administración de la información de buses, frecuencias y ventas de una cooperativa. La primera aplicación móvil tiene como finalidad facilitar al conductor o encargado del bus la gestión de la validación y visualización de la información de los pasajeros según el viaje. Y finalmente la segunda aplicación móvil tiene como propósito brindar al usuario la facilidad de comprar boletos de acuerdo a sus necesidades.   ",
    herramientas: ["Servidor Apache", "Xampp", "PHP", "javaScript", "Ajax"],
    gitRepo: "https://github.com/diana9519/ProyectoDasBusesAdministrador.git",
    gitRepo0: "https://github.com/Eldinosaur/ProyectoDASBusesOficinista.git",
    gitRepo1: "https://github.com/Keybrish/ProyectoAppBusesPasajero.git",
    gitRepo2: "https://github.com/Keybrish/ProyectoAppBusesSocio.git",
    imagenes: [{ titulo: "Ventana principal de la aplicación web para el administrador", imagen: proyecto31 }],
  };

  const informacionProyecto4 = {
    descripcion:
      "sistema de facturación electrónica integral y confiable que automatice y agilice los procesos de facturación, garantizando la validez legal de los documentos generados yoptimizando la gestión financiera de la empresa.",
    herramientas: [
      "TypeScript",
      "HTML",
      "CSS",
      "Visual Studio Code",
      "Microsoft Sql Server",
    ],
    gitRepo: "https://github.com/jess026p/FacturacionElectronica2.0.git",
    imagenes: [{ titulo: "Sistema web", imagen: proyecto41 }],
  };

  const esPrimerProyecto = proyecto && proyecto.id === 1;
  const esSegundoProyecto = proyecto && proyecto.id === 2;
  const esTercerProyecto = proyecto && proyecto.id === 3;
  const esCuartoProyecto = proyecto && proyecto.id === 4;

  if (esPrimerProyecto) {
    return (
      <div className={styles.modalBackground} onClick={onClose}>
        <div
          className={styles.modalContent}
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className={styles.responsiveTitle}>
            Aplicación de envío de alerta en caso de emergencia
          </h2>
          <div className={styles.projectDetails}>
            <div className={styles.projectDescription}>
              <h3 className={styles.responsiveSubtitle}>Descripción:</h3>
              <p className={styles.responsiveText}>
                {informacionProyecto1.descripcion}
              </p>
            </div>
            <div className={styles.projectTools}>
              <h3 className={styles.responsiveSubtitle}>
                Herramientas y Lenguajes utilizados:
              </h3>
              <ul className={styles.responsiveList}>
                {informacionProyecto1.herramientas.map((herramienta, index) => (
                  <li key={index} className={styles.responsiveListItem}>
                    {herramienta}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.projectLinks}>
              <h3 className={styles.responsiveSubtitle}>
                Acceso al repositorio de git:
              </h3>
              <a
                href={informacionProyecto1.gitRepo}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.responsiveLink}
              >
                {informacionProyecto1.gitRepo}
              </a>
            </div>
            <div className={styles.projectImages}>
              <h3 className={styles.responsiveSubtitle}>Imágenes:</h3>
              <div className={styles.imageSlider}>
                {informacionProyecto1.imagenes.map((imagen, index) => (
                  <div key={index}>
                    <h4>{imagen.titulo}</h4>
                    <img src={imagen.imagen} alt={imagen.titulo} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <span className={styles.close} onClick={onClose}>
            &times;
          </span>
        </div>
      </div>
    );
  } else if (esSegundoProyecto) {
    return (
      <div className={styles.modalBackground} onClick={onClose}>
        <div
          className={styles.modalContent}
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className={styles.responsiveTitle}>Sistema de amortización</h2>
          <div className={styles.projectDetails}>
            <div className={styles.projectDescription}>
              <h3 className={styles.responsiveSubtitle}>Descripción:</h3>
              <p className={styles.responsiveText}>
                {informacionProyecto2.descripcion}
              </p>
            </div>
            <div className={styles.projectTools}>
              <h3 className={styles.responsiveSubtitle}>
                Herramientas y Lenguajes utilizados:
              </h3>
              <ul className={styles.responsiveList}>
                {informacionProyecto2.herramientas.map((herramienta, index) => (
                  <li key={index} className={styles.responsiveListItem}>
                    {herramienta}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.projectLinks}>
              <h3 className={styles.responsiveSubtitle}>
                Acceso al repositorio de git:
              </h3>
              <a
                href={informacionProyecto2.gitRepo}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.responsiveLink}
              >
                {informacionProyecto2.gitRepo}
              </a>
            </div>
            <div className={styles.projectLinks}>
              <h3 className={styles.responsiveSubtitle}>Acceso al sistema:</h3>
              <a
                href={informacionProyecto2.sistemaLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.responsiveLink}
              >
                {informacionProyecto2.sistemaLink}
              </a>
            </div>
            <div className={styles.projectImages}>
              <h3 className={styles.responsiveSubtitle}>Imágenes:</h3>
              <div className={styles.imageSlider}>
                {informacionProyecto2.imagenes.map((imagen, index) => (
                  <div key={index}>
                    <h4>{imagen.titulo}</h4>
                    <img src={imagen.imagen} alt={imagen.titulo} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <span className={styles.close} onClick={onClose}>
            &times;
          </span>
        </div>
      </div>
    );
  } else if (esTercerProyecto) {
    return (
      <div className={styles.modalBackground} onClick={onClose}>
        <div
          className={styles.modalContent}
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className={styles.responsiveTitle}>
            Sistema de Gestión de Pasajes
          </h2>
          <div className={styles.projectDetails}>
            <div className={styles.projectDescription}>
              <h3 className={styles.responsiveSubtitle}>Descripción:</h3>
              <p className={styles.responsiveText}>
                {informacionProyecto3.descripcion}
              </p>
            </div>
            <div className={styles.projectTools}>
              <h3 className={styles.responsiveSubtitle}>
                Herramientas y Lenguajes utilizados:
              </h3>
              <ul className={styles.responsiveList}>
                {informacionProyecto3.herramientas.map((herramienta, index) => (
                  <li key={index} className={styles.responsiveListItem}>
                    {herramienta}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.projectLinks}>
              <h3 className={styles.responsiveSubtitle}>
                Acceso al repositorio de git (Aplicación web para
                Administradores):
              </h3>
              <a
                href={informacionProyecto3.gitRepo}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.responsiveLink}
              >
                {informacionProyecto3.gitRepo}
              </a>
            </div>
            <div className={styles.projectLinks}>
              <h3 className={styles.responsiveSubtitle}>
                Acceso al repositorio de git (Aplicación web para Oficinistas):
              </h3>
              <a
                href={informacionProyecto3.gitRepo0}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.responsiveLink}
              >
                {informacionProyecto3.gitRepo0}
              </a>
            </div>
            <div className={styles.projectLinks}>
              <h3 className={styles.responsiveSubtitle}>
                Acceso al repositorio de git (Aplicación móvil para Socios):
              </h3>
              <a
                href={informacionProyecto3.gitRepo1}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.responsiveLink}
              >
                {informacionProyecto3.gitRepo1}
              </a>
            </div>
            <div className={styles.projectLinks}>
              <h3 className={styles.responsiveSubtitle}>
                Acceso al repositorio de git (Aplicación móvil para Pasajeros):
              </h3>
              <a
                href={informacionProyecto3.gitRepo2}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.responsiveLink}
              >
                {informacionProyecto3.gitRepo2}
              </a>
            </div>
            <div className={styles.projectImages}>
              <h3 className={styles.responsiveSubtitle}>Imágenes:</h3>
              <div className={styles.imageSlider}>
                {informacionProyecto3.imagenes.map((imagen, index) => (
                  <div key={index}>
                    <h4>{imagen.titulo}</h4>
                    <img src={imagen.imagen} alt={imagen.titulo} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <span className={styles.close} onClick={onClose}>
            &times;
          </span>
        </div>
      </div>
    );
  } else if (esCuartoProyecto) {
    return (
      <div className={styles.modalBackground} onClick={onClose}>
        <div
          className={styles.modalContent}
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className={styles.responsiveTitle}>Facturación Electrónica</h2>
          <div className={styles.projectDetails}>
            <div className={styles.projectDescription}>
              <h3 className={styles.responsiveSubtitle}>Descripción:</h3>
              <p className={styles.responsiveText}>
                {informacionProyecto4.descripcion}
              </p>
            </div>
            <div className={styles.projectTools}>
              <h3 className={styles.responsiveSubtitle}>
                Herramientas y Lenguajes utilizados:
              </h3>
              <ul className={styles.responsiveList}>
                {informacionProyecto4.herramientas.map((herramienta, index) => (
                  <li key={index} className={styles.responsiveListItem}>
                    {herramienta}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.projectLinks}>
              <h3 className={styles.responsiveSubtitle}>
                Acceso al repositorio de git:
              </h3>
              <a
                href={informacionProyecto4.gitRepo}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.responsiveLink}
              >
                {informacionProyecto4.gitRepo}
              </a>
            </div>
            <div className={styles.projectImages}>
              <h3 className={styles.responsiveSubtitle}>Imágenes:</h3>
              <div className={styles.imageSlider}>
                {informacionProyecto4.imagenes.map((imagen, index) => (
                  <div key={index}>
                    <h4>{imagen.titulo}</h4>
                    <img src={imagen.imagen} alt={imagen.titulo} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <span className={styles.close} onClick={onClose}>
            &times;
          </span>
        </div>
      </div>
    );
  }
};

export default DetalleProyecto;

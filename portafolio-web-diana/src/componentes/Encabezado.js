import React from 'react';
import styles from '../styles/Encabezado.module.css'; // Importa el archivo de estilos CSS

const Encabezado = () => {
  return (
    <body>
      <header className={styles.header}>
        <div className={styles.titleContainer}>
          <div className={styles.titleLine}></div>
          <h1 className={styles.titleText}>Acerca de mí</h1>
        </div>
        <h2 className={styles.name}>Diana Pinchao</h2>
        <main className={styles.mainContent}>
          <div>
            <p>
              Soy una apasionada desarrolladora de software con un enfoque especial en diseño de interfaces y desarrollo web. Me siento inspirada por estas áreas, encontrando motivación diaria en la creación de experiencias digitales impactantes. Poseo habilidades versátiles en varios lenguajes de programación y he contribuido en diversos proyectos que han fortalecido y ampliado mi conocimiento y experiencia en este campo.
            </p>
            <p>
              Mi experiencia trabajando en equipos multidisciplinarios ha sido gratificante. Disfruto aportando mis capacidades para convertir ideas creativas en soluciones eficientes. Mi compromiso con el aprendizaje continuo me impulsa a mantenerme actualizada con las últimas tendencias tecnológicas, siempre en búsqueda de nuevos desafíos y oportunidades en el dinámico mundo del desarrollo de software.
            </p>
          </div>
        </main>
      </header>
    </body>
  );
};

export default Encabezado;

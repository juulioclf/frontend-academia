import styles from './Banner.module.css'
import ImagemPri from './Rectangle 1.png'

const Banner = () => {
        return (
            <div className={styles.container}>
              <img className={styles.imagem} src={ImagemPri} alt="Descrição da imagem" />
              <div className={styles.fraseSobre}>
                <h1><strong>Transforme seu treino em uma experiência personalizada e eficaz.</strong>Vamos criar juntos um programa que se adapte aos seus objetivos e estilo de vida.</h1>
              </div>
            </div>
          );
    };

export default Banner;
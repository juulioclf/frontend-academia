import styles from './Image-text.module.css';
import Imagem from "../../assets/images/boy-running.jpg"

const ImageText = () => {
    return(
        <section className={styles.container}>
        <img className={styles.imagem} src={Imagem} alt="homem correndo"></img>
            <h2>Basic <strong>Fitness</strong></h2>
            <ul>
                <li>Consultoria online</li>
                <li>Protocolo personalizado</li>
                <li>Protocolo para atleta</li>
            </ul>
        </section>
    )
}

export default ImageText;
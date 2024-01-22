import styles from "./Servicos.module.css"
import {ReactComponent as Imagem} from "/src/Assets/Imagens/homem-correndo.jpg"


const Servicos = () => {
    return (
        <section className={styles.container}>
            <h1>NOSSOS <strong>SERVIÇOS</strong>:</h1>
            <img className={styles.imagem} src={Imagem} alt="homem correndo"></img>
        </section>
    )
}

export default Servicos;
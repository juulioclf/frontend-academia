import ImageText from "../Image-Text";
import styles from "./Servicos.module.css"


const Servicos = () => {
    return (
        <section className={styles.container}>
            <h1>NOSSOS <strong>SERVIÇOS</strong>:</h1>
            <div className={styles.imgtxt}>
                <ImageText />
                <ImageText />
            </div>
        </section>
    )
}

export default Servicos;
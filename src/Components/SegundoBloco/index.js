import styles from './SegundoBloco.module.css';
import imgTerra from '/src/Assets/Imagens/imgTerra.png';

const SegundoBloco = () => {
    return (
        <section id='servicos'>
            <div className={styles.imgText}>
                <img src={imgTerra} alt='um_homem_fazendo_levantamento_de_peso' />
                <div className={styles.fraseSobre}>
                    <h2>Seu <strong>corpo</strong> pode fazer isso</h2>
                    <h2>É hora de convencer sua <strong>mente</strong></h2>
                </div>
            </div>
        </section>
    )
}

export default SegundoBloco;
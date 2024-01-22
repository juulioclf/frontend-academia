import styles from './PrimeiroBloco.module.css';
import {ReactComponent as ImagemMulher} from '/src/Assets/Imagens/imgMulher.png';

const PrimeiroBloco = () => {
    return(
        <div className={styles.contTextoImg}>
      <div className={styles.textoAci}>Por que fazer a atividade fisica é importante para seu corpo ?</div>
      <div className={styles.imagemTexto}>
        <img src={ImagemMulher} alt="Descrição_da_imagem" />
        <div className={styles.textoLado}>“Os exercícios de resistência, como o levantamento de pesos, promovem a saúde dos ossos, prevenindo a perda de densidade óssea. Além disso, contribuem para o desenvolvimento e manutenção da massa muscular.”</div>
      </div>
    </div>
    )
}

export default PrimeiroBloco;
import styles from './Footer.module.css';
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



const Footer = () => {
    return(
        <section className={styles.container}>
            <div className={styles.cadastro}>
                <label for="nome"></label>
                <input type="text" id='nome' placeholder="Digite seu nome" required></input>
                <label for="e-mail"></label>
                <input type="email" id='email' placeholder="Digite seu e-mail" required></input>
            </div>
            <div className={styles.contatos}>
                <p>Número de contato:(92) 99245-2675</p>
                <p className={styles.icone}>Me siga: <FaInstagram />, <FaXTwitter />
 @DicoPersonal</p>
            </div>
        </section>
    )
}

export default Footer;
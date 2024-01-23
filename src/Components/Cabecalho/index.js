import styles from './Cabecalho.module.css';
import logo from '../../Assets/images/logo.png';
import BotaoComOpcoes from '../../Components/BotaoLogin';

const Cabecalho = () => {

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return(
        <header className={styles.cabecalho}>
            <img src={logo} alt="Logo-do-Dico"></img>
                <nav>
                    <ul>
                        <li>
                                <a onClick={() => scrollToSection('home')}> HOME </a>
                        </li>
                        <li>
                            <hr/><a onClick={() => scrollToSection('sobre')}> SOBRE </a>
                        </li>
                        <li>
                            <hr/><a onClick={() => scrollToSection('servicos')}> SERVIÇOS </a>
                        </li>
                        <li>
                            <hr/><a onClick={() => scrollToSection('alunos')}> ALUNOS </a>
                        </li>
                        <li>
                            <hr/><a onClick={() => scrollToSection('contatos')} >  CONTATOS </a>
                        </li>
                        <li>
                            <hr/>
                            <BotaoComOpcoes/>
                        </li>
                    </ul>
                </nav>
        </header>
    )
}

export default Cabecalho;
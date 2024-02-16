import BotaoComOpcoes from '../../Components/Button-home';
import { Container, Menu, Opcoes } from './styles';

const Cabecalho = () => {

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return(
        <Container>
                <nav>
                    <Menu>
                        <Opcoes>
                                <a onClick={() => scrollToSection('home')}> HOME </a>
                        </Opcoes>
                        <Opcoes>
                            <hr/><a onClick={() => scrollToSection('sobre')}> SOBRE </a>
                        </Opcoes>
                        <Opcoes>
                            <hr/><a onClick={() => scrollToSection('servicos')}> SERVIÇOS </a>
                        </Opcoes>
                        <Opcoes>
                            <hr/><a onClick={() => scrollToSection('alunos')}> ALUNOS </a>
                        </Opcoes>
                        <Opcoes>
                            <hr/><a onClick={() => scrollToSection('contatos')} >  CONTATOS </a>
                        </Opcoes>
                        <Opcoes>
                            <hr/>
                            <BotaoComOpcoes/>
                        </Opcoes>
                    </Menu>
                </nav>
        </Container>
    )
}

export default Cabecalho;
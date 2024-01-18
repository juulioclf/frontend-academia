import './App.css';
import ScrollButton from './Components/BackTop';
import Banner from './Components/Banner';
import Cabecalho from './Components/Cabecalho';
import PrimeiroBloco from './Components/PrimeiroBloco';
import SegundoBloco from './Components/SegundoBloco';
import Servicos from './Components/Servicos';

function App() {
  return (
    <div className="App">
      <>
        <Cabecalho />
        <Banner />
        <section id="home"><PrimeiroBloco /></section>
        <SegundoBloco />
        <section id="servicos"><Servicos /></section>
        <ScrollButton/>
      </>
    </div>
  );
}

export default App;

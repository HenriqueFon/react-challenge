import './App.css';
import Semaforo from './components/Semaforo';
import { Sinalizacao } from './components/Sinalizacao';


function App() {
  return (
    <div className="App">
      <Sinalizacao cores = {[
        {cor: 'red', nome: 'Vermelho'},
        {cor: 'yellow', nome: 'Amarelo'},
        {cor: 'green', nome: 'Verde'}
      ]}/>
    </div>
  );
}

export default App;

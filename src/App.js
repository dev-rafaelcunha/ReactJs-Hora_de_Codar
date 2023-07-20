import './App.css';
import HelloWord from './components/HelloWord';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  
  const nome = 'Rafael'.toUpperCase();
  const idade = '27 anos';
  const profissao = 'Programador';
  const foto = 'https:via.placeholder.com/150';

  return (
    <div className='App'>
      <HelloWord/>
      <SayMyName nome = 'Rafael' />
      <SayMyName nome = 'João' />
      <SayMyName nome = {nome} />
      <Pessoa 
        nome = {nome}
        idade = {idade}
        profissao = {profissao}
        foto = {foto}
      />
    </div>
  );
}

export default App;
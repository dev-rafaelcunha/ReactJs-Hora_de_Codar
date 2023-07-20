import './App.css';
import HelloWord from './components/HelloWord';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

function App() {
  
  const nome = 'Rafael'.toUpperCase();
  const idade = '27 anos';
  const profissao = 'Programador';
  const foto = 'https:via.placeholder.com/150';

  return (
    <div className='App'>
      <h1>Testando CSS</h1>
      <Frase />
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
      <List />
    </div>
  );
}

export default App;
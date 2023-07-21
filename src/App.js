import './App.css';
import Evento from './components/Evento';
import Form from './components/Form';

function App() {
  
  const nome = 'Rafael'.toUpperCase();
  const idade = '27 anos';
  const profissao = 'Programador';
  const foto = 'https:via.placeholder.com/150';

  return (
    <div className='App'>
      <h1>Testando Eventos</h1>
      <Evento numero={1} />
      <Evento numero={2} />
      <Form />
    </div>
  );
}

export default App;
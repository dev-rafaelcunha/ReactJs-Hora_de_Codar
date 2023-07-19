import './App.css';
import HelloWord from './components/HelloWord';

function App() {
  const name = 'Rafael';
  const newName = name.toUpperCase();

  function sum(a,b) {
    
    return a+b;
  }
  
  const url = 'https://via.placeholder.com/150';

  return (
    <div className='App'>
      <h2>Alterando o JSX</h2>
      <p>Olá, {newName}</p>
      <p>Soma: {sum(2,2)}</p>
      <img src={url} alt='Minha imagem'></img>
      <HelloWord/>
    </div>
  );
}

export default App;
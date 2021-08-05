import logo from './logo.svg';
import './App.css';
import ItemListContainer from './components/ItemListContainer';

import NavBar from './components/Navbar';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <ItemListContainer name="¡Hola!"></ItemListContainer>
    </>
  );
}

export default App;

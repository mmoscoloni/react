import logo from './logo.svg';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import NavBar from './components/Navbar';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <ItemListContainer></ItemListContainer>
      <ItemCount></ItemCount>
    </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import NavBar from './components/Navbar';

function App() {

  const handleAdd = (count) => {
    console.log(count)
  }

  return (
    <>
      <NavBar></NavBar>
      <ItemListContainer></ItemListContainer>
      <ItemCount stock={5} initial={1} onAdd={handleAdd} ></ItemCount>
    </>
  );
}

export default App;

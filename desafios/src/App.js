import logo from './logo.svg';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import NavBar from './components/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {

  const handleAdd = (count) => {
    console.log(count)
  }

  return (
    <>
      <NavBar></NavBar>
      <ItemDetailContainer></ItemDetailContainer>
    </>
  );
}

export default App;

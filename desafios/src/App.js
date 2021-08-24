import logo from './logo.svg';
import './App.css';
import Cart from './components/Cart';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import NavBar from './components/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  const handleAdd = (count) => {
    console.log(count)
  }

  return (
    <>
    <BrowserRouter>
        <NavBar></NavBar>
        <Switch>
          <Route path="/" exact>
            <ItemListContainer></ItemListContainer>
          </Route>

          <Route path="/cart" exact>
              <Cart></Cart>
          </Route>

        </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;

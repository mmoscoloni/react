import logo from './logo.svg';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/Navbar';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {

  return (
    <BrowserRouter>
      <div>
        <NavBar></NavBar>
        <Switch>
          <Route path="/" exact>
            <ItemListContainer titulo="Home"></ItemListContainer>
          </Route>

          <Route path="/item/:id" exact>
            <ItemDetailContainer titulo="Matematica"></ItemDetailContainer>
          </Route>

          <Route path="/category/:id" exact>
            <ItemListContainer titulo="Matematica"></ItemListContainer>
          </Route>
          
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

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
import ItemList from './components/ItemList';

function App() {

  return (
    <BrowserRouter>
      <div>
        <NavBar></NavBar>
        <Switch>
          <Route path="/" exact>
            <ItemListContainer></ItemListContainer>
          </Route>

          <Route path="/item/:id" exact>
            <ItemDetailContainer></ItemDetailContainer>
          </Route> 

          <Route path="/category/:categoria/" exact>
            <ItemList></ItemList>
          </Route>
          
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

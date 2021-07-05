import './App.css';
import { NavBar } from './components/NavBar/navBar'
import { ItemListContainer } from './components/itemListContainer/itemListContainer'
import { ItemDetailContainer } from './components/itemDetailContainer/itemDetailContainer';
import { ItemCount } from './components/itemCount/itemCount'
import {ItemList} from './components/ItemList/ItemList'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
      <NavBar />
        <Switch>
        
        <Route exact path='/'>
           
            <ItemListContainer />
        </Route>
        <Route path='/category/:id'>
           
            <ItemListContainer />
        </Route>
        <Route path='/item/:id'>
           
            <ItemDetailContainer />
        </Route> 

         </Switch>
    </Router>

    // <div className="App">
    //   <NavBar />
    //   <ItemListContainer></ItemListContainer>
    //   {/* <ItemCount stock={4} onAdd={() => alert('Compra')}/> */}
    // </div>
  );
}

export default App;

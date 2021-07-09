import './App.css';
import { NavBar } from './components/NavBar/navBar'
import { ItemListContainer } from './components/itemListContainer/itemListContainer'
import { ItemDetailContainer } from './components/itemDetailContainer/itemDetailContainer';
import { CartProvider } from './context/CartContext';
import { Banner } from './components/banner/banner';
import { Cart } from './pages/Cart/cart'
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
      <CartProvider>

      
        <NavBar />
        <Banner />
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
          <Route path='/cart'>
              <Cart />
          </Route> 
          </Switch>
        </CartProvider>
    </Router>

    // <div className="App">
    //   <NavBar />
    //   <ItemListContainer></ItemListContainer>
    //   {/* <ItemCount stock={4} onAdd={() => alert('Compra')}/> */}
    // </div>
  );
}

export default App;

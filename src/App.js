import './App.css';
import { NavBar } from './components/NavBar/navBar'
import { ItemListContainer } from './components/itemListContainer/itemListContainer'
import { ItemDetailContainer } from './components/itemDetailContainer/itemDetailContainer';
import { CartProvider } from './context/CartContext';
import { Banner } from './components/banner/banner';
import { Footer } from './components/footer/footer';
import { Cart } from './pages/Cart/cart'
import { NoMatch } from './pages/NoMatch/noMatch';
import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route
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
            <Route path='*'>
            <NoMatch />
        </Route>
          </Switch>
        </CartProvider>
        
        <Footer />
        
    </Router>
  );
}

export default App;

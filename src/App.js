import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

//Reusable Components
import Navbar from '../src/components/Navbar/Navbar';
import Footer from '../src/components/Footer/Footer';

//Page Components
import Home from './pages/Home/Home';
import Restaurants from './pages/Restaurants/Restaurants';

function App() {
  return (
    <div className="App-outer-container">
      <Navbar />
    
    <div className="App-inner-container">
      <Switch>
        <Route exact path='/' render={props =>
        <Home />
        } />
        <Route exact path='/restaurants' render={props => (
          <Restaurants />
        )} />
      </Switch>
    </div>
    <Footer /> 
    </div>
  );
}

export default App;

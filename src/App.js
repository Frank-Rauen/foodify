import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

//Reusable Components
import Navbar from '../src/components/Navbar/Navbar';
import Footer from '../src/components/Footer/Footer';

//Page Components
import Home from './pages/Home/Home';
import Restaurants from './pages/Restaurants/Restaurants';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup'

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
        <Route exact path='/login' render={props => (
          <Login />
        )} />
        <Route exact path='/signup' render={props =>(
          <Signup />
        )} />
      </Switch>
    </div>
    <Footer /> 
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Welcome from './components/welcome/Welcome'
import Calculator from './components/calculator/Calculator'
import Pokedex from './components/pokedex/Pokedex'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <Switch>
            <Route path = "/" exact component = {Welcome} />
            <Route path = "/calculator" component = {Calculator} />
            <Route path = "/pokedex" component = {Pokedex} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;

import React, { Component } from 'react';
import axios from 'axios'

import Calculator from './components/calculator/Calculator'

import './App.css';

class App extends Component {
  constructor() {
    super()
    // this.state = {
    //   person: null,
    //   homeworld: null,
    //   composedGreeting: null
    // }
  }

  componentDidMount() {
    // axios.get('https://swapi.dev/api/people/1/').then(response => {
    //   this.setState({ person: response.data })
    //   return axios.get(response.data.homeworld)
    // }).then(response => {
    //   return this.setState({ homeworld: response.data })
    // }).then(() => {
    //   const { name } = this.state.person
    //   const homeworld = this.state.homeworld.name
    //   this.setState({ composedGreeting: <h2>{name}, from {homeworld}, says hi too!</h2> })
    // }).catch(error => {
    //   console.log(error)
    // })
  }

  render() {
    return (
      <div className="App">
        {/*
          <Calculator />
        */}
        <Calculator />
        {/*
        <h1>Hello World!</h1>
        { this.state.composedGreeting }
        */}
      </div>
    )
  }
}

export default App;

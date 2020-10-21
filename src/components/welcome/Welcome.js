import React, { Component } from 'react';

import NavCard from '../common/NavCard'

import './Welcome.css';
import logo from '../../images/logo.svg'
import calcLogo from '../../images/calculator.svg'
import dexLogo from '../../images/pokedex.svg'

class Welcome extends Component {
  render() {
    return (
      <div className='Welcome'>
        <img className='logo' src={logo} alt='logo' />
        <h1>Hello World!</h1>
        <p>
          Hi there, and welcome to my React experimentation page! My name is Kenny,
          and I hope that this showcase would maybe, just maybe, inspire you to
          go out and try React in a way that isn't a to-do list.
        </p>
        <div className='container-apps'>
          <NavCard to='/calculator' img={calcLogo} label='Calculator' />
          <NavCard to='/pokedex' img={dexLogo} label='Pokédex' />
        </div>
      </div>
    )
  }
}

export default Welcome;

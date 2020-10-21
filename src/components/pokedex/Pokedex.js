import React, { Component } from 'react'

import Header from './header/Header'
import MainContent from './mainContent/MainContent'

class Pokedex extends Component {
  render = () => {
    return (
      <div className='Pokedex'>
        <Header />
        <MainContent />
      </div>
    )
  }
}

export default Pokedex

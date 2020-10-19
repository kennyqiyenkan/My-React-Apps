import React, { Component } from 'react'

import PokeService from './api/PokeService'
import Header from './header/Header'
import MainContent from './mainContent/MainContent'

class Pokedex extends Component {
  constructor(props) {
    super(props)
    this.service = new PokeService()
  }

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

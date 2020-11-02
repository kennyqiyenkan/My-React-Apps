import React, { Component } from 'react'

import Header from './header/Header'
import MainContent from './mainContent/MainContent'

class Pokedex extends Component {
  constructor() {
    super()
    this.state = { collapsed: false }
  }

  toggleCollapse = () => {
    this.setState(prevState => {
      return { collapsed: !prevState.collapsed }
    })
  }

  render = () => {
    return (
      <div className='Pokedex'>
        <Header toggleCollapse={this.toggleCollapse} />
        <MainContent collapsed={this.state.collapsed} />
      </div>
    )
  }
}

export default Pokedex

import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Menu from './menu/Menu'
import Splash from './Splash'
import Regions from './region/Regions'
import PokemonList from './list/PokemonList'

import './MainContent.css'

class MainContent extends Component {
  render = () => {
    return (
      <div className='MainContent'>
        <Menu collapsed={this.props.collapsed} />
        <div className={ this.props.collapsed ? 'content-container menu-collapsed' : 'content-container'}>
          <Switch>
            <Route exact path='/pokedex' component={Splash} />
            <Route exact path='/pokedex/pokemon' component={PokemonList} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default MainContent

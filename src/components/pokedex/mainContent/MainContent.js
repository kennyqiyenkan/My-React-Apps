import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Menu from './menu/Menu'
import Splash from './Splash'

import './MainContent.css'

class MainContent extends Component {
  render = () => {
    return (
      <div className='MainContent'>
        <Menu />
        <div className='content-container'>
          <Switch>
            <Route exact path='/pokedex'>
              <Splash />
            </Route>
            <Route path={`/pokedex/pokemon`}>
              <h3>Pokemon</h3>
            </Route>
          </Switch>
        </div>
      </div>
    )
  }
}

export default MainContent

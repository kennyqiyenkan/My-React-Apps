import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Menu from './menu/Menu'
import Splash from './Splash'
import Regions from './region/Regions'

import './MainContent.css'

class MainContent extends Component {
  render = () => {
    return (
      <div className='MainContent'>
        <Menu collapsed={this.props.collapsed} />
        <div className={ this.props.collapsed ? 'content-container menu-collapsed' : 'content-container'}>
          <Switch>
            <Route exact path='/pokedex'>
              <Splash />
            </Route>
            <Route path={`/pokedex/pokemon`}>
              <Regions />
            </Route>
          </Switch>
        </div>
      </div>
    )
  }
}

export default MainContent

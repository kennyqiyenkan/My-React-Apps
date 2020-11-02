import React, { Component } from 'react'

import MenuItem from './MenuItem'
import pokemonLogo from '../../../../images/pokeball.svg'

import './Menu.css'

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: {
        pokemon: { label: 'Pokémon', to: '/pokemon', img: pokemonLogo },
        evolution: { label: 'Evolution', to: '/evolution', img: pokemonLogo }
      }
    }
  }

  render() {
    return (
      <div className={ this.props.collapsed ? 'Menu collapsed' : 'Menu' }>
        {
          Object.keys(this.state.categories).map(key => {
            const category = this.state.categories[key]
            return <MenuItem key={key} {...category} collapsed={this.props.collapsed} />
          })
        }
      </div>
    )
  }
}

export default Menu

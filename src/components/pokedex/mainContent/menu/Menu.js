import React, { Component } from 'react'

import MenuItem from './MenuItem'
import './Menu.css'

class Menu extends Component {
  constructor() {
    super()
    this.state = {
      categories: {
        pokemon: { label: 'Pokémon', to: '/pokemon' },
        evolution: { label: 'Evolution', to: '/evolution' }
      }
    }
  }



  render() {
    return (
      <div className='Menu'>
        {
          Object.keys(this.state.categories).map(key => {
            const category = this.state.categories[key]
            return <MenuItem key={key} {...category} />
          })
        }
      </div>
    )
  }
}

export default Menu

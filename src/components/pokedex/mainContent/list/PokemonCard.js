import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

import './PokemonCard.css'

class PokemonCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      imgSrc: this.constructImgSrc()
    }
  }

  constructImgSrc = () => {
    const baseURL = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'
    return `${baseURL}${this.formatEntryNumber()}.png`
  }

  formatEntryNumber = () => {
    const entryNumber = `${this.props.data.entry_number}`
    const entryLength = entryNumber.length
    var formattedEntryNum = entryNumber
    if ( entryLength < 3 ) {
      const requiredZeros = 3 - entryLength
      for ( var i = 0 ; i < requiredZeros ; i++ ) {
        formattedEntryNum = '0'.concat(formattedEntryNum)
      }
    }
    return formattedEntryNum
  }

  render = () => {
    const { name } = this.props.data.pokemon_species
    return (
      <div className='PokemonCard'>
        <img className='logo' src={this.state.imgSrc} alt={`#${this.props.data.entry_number}`}/>
        <p className='entry'>{`#${this.formatEntryNumber()}`}</p>
        <h4 className='name'>{`${name.charAt(0).toUpperCase()}${name.slice(1)}`}</h4>
      </div>
    )
  }
}

export default withRouter(PokemonCard)

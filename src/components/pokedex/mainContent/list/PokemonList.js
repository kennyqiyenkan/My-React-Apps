import React, { Component } from 'react'
import axios from 'axios'

import PokeService from '../../api/PokeService.js'
import PokemonCard from './PokemonCard'

import './PokemonList.css'


class PokemonList extends Component {
  constructor(props) {
    super(props)
    this.updateHistory()
    this.service = new PokeService()
    this.state = {
      isLoading: true,
      entries: null,
      page: this.getCurrentPage() || 1
    }
  }

  updateHistory = () => {
    if ( ! this.getCurrentPage() ) {
      this.props.history.push(`${this.props.location.pathname}?page=1`)
    }
  }

  getParamsFromURL = () => {
    const { search } = this.props.location
    return new URLSearchParams(search)
  }

  getCurrentPage = () => {
    const params = this.getParamsFromURL()
    return params.get('page')
  }

  getEntriesOnPage = (page) => {
    const skip = 100 * ( page - 1 )
    return this.state.entries.slice(skip, skip + 100)
  }

  componentDidMount = () => {
    this.service.findPokedexById('national').then(results => {
      const { data } = results
      var title = ''
      data.names.map(nameInLang => {
        const { language } = nameInLang
        if ( language.name === 'en' ) {
          title = nameInLang.name
        }
      })
      this.setState(prevState => {
        return {
          ...prevState,
          isLoading: false,
          entries: data.pokemon_entries,
          title: title || this.uppercaseDefaultTitle()
        }
      })

    })
  }

  uppercaseDefaultTitle = () => {
    const { dex } = this.props.match.params
    const nameSplit = dex.split('-')
    const capNames = nameSplit.map(lowercase => {
      return `${lowercase.charAt(0).toUpperCase()}${lowercase.slice(1)}`
    })
    return capNames.join(' ')
  }

  render = () => {
    return (
      <div className='PokemonList'>
        {
          this.state.isLoading ?
          <h3>Loading...</h3> : (//TODO: Replace with actual loading component later
            <div>
              <h1 className='title'>{ this.state.title }</h1>
              <div className='pokemon-list'>
                {
                  this.getEntriesOnPage(this.state.page).map(entry => {
                    return <PokemonCard key={entry.entry_number} data={entry} />
                  })
                }
              </div>

            </div>
          )
        }
      </div>
    )
  }
}

export default PokemonList

import React, { Component } from 'react'

import PokeService from '../../api/PokeService'
import RegionNavCard from './RegionNavCard'

import './Regions.css'

class Regions extends Component {
  constructor() {
    super()
    this.service = new PokeService()
    this.state = {
      dexes: null,
      excluded: [
        // 'original',
        'conquest-gallery'
      ],
      isLoading: true
    }
  }

  componentDidMount = () => {
    this.service.getPokedexes({ limit: 40 }).then(response => {
      const updatedDexes = response.data.results.filter(dex => {
        for ( const excluded of this.state.excluded ) {
          if ( dex.name.includes(excluded) )
          return false
        }
        return true
      })
      const formattedDexNames = updatedDexes.map(dex => {
        const { name } = dex
        const nameSplit = name.split('-')
        const capNames = nameSplit.map(lowercase => {
          return `${lowercase.charAt(0).toUpperCase()}${lowercase.slice(1)}`
        })
        return {
          ...dex,
          label: capNames.join(' ')
        }
      })
      this.setState({
        dexes: formattedDexNames,
        isLoading: false
      })
    })
  }

  goToDex = (api) => {

  }

  render = () => {
    return (
      <div className='Regions'>
        {
          this.state.dexes &&
          <div className='container'>
            {
              this.state.dexes.map(dex => {
                return <RegionNavCard key={dex.name} to={`/pokedex/${dex.name}`} label={dex.label} />
              })
            }
          </div>
        }
      </div>
    )
  }
}

export default Regions

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
            <h1 className='title'>Select region</h1>
            <p className='subtitle'>
              There are many regions in the world of Pokemon.
              Each one having their own unique species of Pokemon as well.
              Over time, as more games are released, these regions would also be
              updated with species from other titles. Therefore, we have split the
              regions by original and updated to make it easier for you to navigate.
            </p>
            <div className='regions'>
              {
                this.state.dexes.map(dex => {
                  return <RegionNavCard key={dex.name} label={dex.label} to={`/${dex.name}`} />
                })
              }
            </div>
          </div>
        }
      </div>
    )
  }
}

export default Regions

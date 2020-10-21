import axios from 'axios'

class PokeService {
  constructor() {
    this.root = 'https://pokeapi.co/api/v2/'
  }

  getPokedexes = (params) => {
    return axios.get(`${this.root}pokedex/`, {
      params: params
    })
  }

  findPokedexByUrl = (url) => {
    return axios.get(url)
  }

  findPokedexById = (id) => {
    return axios.get(`${this.root}pokedex/${id}`)
  }

  getBerry = (params) => {
    return axios.get(`${this.root}berry/`, {
      params: params
    })
  }

  findBerry = (id) => {
    return axios.get(`${this.root}berry/${id}`)
  }
}

export default PokeService

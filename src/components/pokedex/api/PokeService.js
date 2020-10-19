import axios from 'axios'

class PokeService {
  constructor() {
    this.root = 'https://pokeapi.co/api/v2/'
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

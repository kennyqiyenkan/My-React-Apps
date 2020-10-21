import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'

import './Menu.css'

class MenuItem extends Component {
  goTo = () => {
    this.props.history.push(`/pokedex${this.props.to}`)
  }

  render() {
    const isActive = this.props.location.pathname.includes(this.props.to)
    return (
      <div className={`MenuItem ${isActive ? 'active' : ''}`} onClick={this.goTo}>
        { this.props.img && <img className='logo' src={this.props.img} alt='img' /> }
        <p className='label'>{this.props.label}</p>
      </div>
    )
  }
}

export default withRouter(MenuItem)

import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'

class NavCard extends Component {
  goTo = () => {
    this.props.history.push(this.props.to)
  }

  render() {
    return (
      <div className='NavCard' onClick={this.goTo}>
        <img className='logo' src={this.props.img} alt='img' />
        <p className='label'>{this.props.label}</p>
      </div>
    )
  }
}

export default withRouter(NavCard)

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import logoDefault from '../../../../images/region-default.jpg'

class RegionNavCard extends Component {
  render = () => {
    return (
      <div className='RegionNavCard'>
        <img className='logo' src={this.props.img || logoDefault} alt={this.props.label} />
        <div className='container-label'>
          <p className='label'>{this.props.label}</p>
        </div>
      </div>
    )
  }
}

export default withRouter(RegionNavCard)

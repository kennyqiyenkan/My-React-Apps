import React, { Component } from 'react'

import NumButton from './NumButton'

import './Numpad.css'

class Numpad extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nums: [1,2,3,4,5,6,7,8,9,0, '.'],
      ops: ['+', '-', 'X', '/'],
      activeOperator: ''
    }
  }

  handleOperator = (op) => {
    this.setState({activeOperator: op})
    this.props.handleOperator(op)
  }

  handleEqual = () => {
    this.setState({ activeOperator: '' })
    this.props.handleEqual()
  }

  render() {
    return (
      <div className='numpad'>
        <div className='nums'>
          {
            this.state.nums.map(num => {
              return num === '.' ?
                <NumButton className='decimal' key={num} value={num} callback={this.props.handleNum} /> :
                <NumButton key={num} value={num} callback={this.props.handleNum} />
            })
          }
        </div>
        <div className='operations'>
          <div className='clears'>
            <NumButton value='C' callback={this.props.handleClears} />
            <NumButton value='AC' callback={this.props.handleClears} />
          </div>
          <div className='ops'>
            {
              this.state.ops.map(op => {
                return (
                  <NumButton
                    className={this.state.activeOperator === op ? 'active' : ''}
                    key={op}
                    value={op}
                    callback={this.handleOperator}
                  />
                )
              })
            }
          </div>
          <div className='equal'>
            <NumButton value='=' callback={this.handleEqual} />
          </div>
        </div>

      </div>
    )
  }
}

export default Numpad

import React, { Component } from 'react'

import Header from './header/Header'
import Display from './display/Display'
import Numpad from './numpad/Numpad'

import './Calculator.css';

class Calculator extends Component {
  constructor() {
    super()
    this.state = {
      prevValue: 0,
      prevOperator: '',
      display: '0',
      isNewLine: true,
      operators: {
        '+' : (a, b) => { return a + b },
        '-' : (a, b) => { return a - b },
        'X' : (a, b) => { return a * b },
        '/' : (a, b) => { return a / b }
      }
    }
  }

  handleNum = (value) => {
    var newValue = ''
    if ( this.state.isNewLine ) {
      newValue = `${value}`
    } else {
      newValue = `${this.state.display}${value}`
    }

    this.setState({
      isNewLine: newValue === '0',
      display: newValue
    })
  }

  handleClears = (type) => {
    type === 'AC' && this.setState({
      prevValue: 0,
      prevOperator: ''
    })
    this.setState({
      display: '0',
      isNewLine: true
    })
  }

  handleOperator = (operator) => {
    const displayValue = parseFloat(this.state.display)
    if ( this.state.prevOperator ) {
      if ( this.state.isNewLine ) {
        this.setState({prevOperator: operator})
        return
      }
      this.setState({
        prevValue: this.handleEqual(),
        prevOperator: operator
      })
    } else {
      this.setState({
        prevValue: displayValue,
        prevOperator: operator,
        isNewLine: true
      })
    }
  }

  handleEqual = () => {
    const displayValue = parseFloat(this.state.display)
    this.setState({
      isNewLine: true
    })
    if ( this.state.prevOperator ) {
      const opsFunc = this.state.operators[this.state.prevOperator]
      const newValue = opsFunc(this.state.prevValue, displayValue)
      this.setState({
        prevOperator: '',
        display: `${newValue}`
      })
      return newValue
    }
    return displayValue
  }

  render() {
    return (
      <div className="Calculator">
        <Header />
        <Display data={this.state.display} />
        <Numpad
          handleNum={this.handleNum}
          handleClears={this.handleClears}
          handleOperator={this.handleOperator}
          handleEqual={this.handleEqual}
        />
      </div>
    )
  }
}

export default Calculator

import React from 'react'
import './Display.css'

function Display(props) {
  const formatted = parseFloat(props.data).toLocaleString()
  return (
    <div className='display'>
      <p className='data'>{!isNaN(formatted) ? formatted : props.data}</p>
    </div>
  )
}

export default Display

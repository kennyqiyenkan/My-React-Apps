import React from 'react'

function NumButton(props) {
  return (
    <button
      className={props.className}
      onClick={() => props.callback(props.value)}
    >{props.value}</button>
  )
}

export default NumButton

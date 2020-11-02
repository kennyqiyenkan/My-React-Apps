import React from 'react'
import logo from '../../../images/pokeball.svg'
import './Header.css'

function Header(props) {
  return (
    <header className='Header'>
      <img className='logo' src={logo} alt='logo' onClick={props.toggleCollapse} />
      <p className='title'>Pokédex</p>
    </header>
  )
}

export default Header

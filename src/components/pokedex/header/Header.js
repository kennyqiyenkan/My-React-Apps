import React from 'react'
import logo from '../../../images/logo.svg'
import './Header.css'

function Header() {
  return (
    <header className='Header'>
      <img className='logo' src={logo} alt='logo' />
      <p className='title'>Pokédex</p>
    </header>
  )
}

export default Header

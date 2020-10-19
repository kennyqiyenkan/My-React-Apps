import React from 'react'
import logo from '../../../images/logo.svg'
import './Header.css'

function Header() {
  return (
    <header className='Header'>
      <p className='title'>My</p>
      <img className='logo' src={logo} alt='logo' />
      <p className='title'>Calculator</p>
    </header>
  )
}

export default Header

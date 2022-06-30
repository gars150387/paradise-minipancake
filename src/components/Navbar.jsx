import React from 'react'
import '../style/navbar.css'

export const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='logo'>
            <img src={require('../images/logo-no-background.jpeg')} alt='logo' />
        </div>
    </nav>
  )
}

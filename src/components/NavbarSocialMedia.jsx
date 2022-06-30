import React from 'react'
import {FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa'

import '../style/navbar-socialMedia.css'

export const NavbarSocialMedia = () => {
  return (
    <nav className='nav-socialMedia'>
        <div className='icon-socialMedia'><span><FaFacebookF className='inner-icon' /></span></div>
        <div className='icon-socialMedia'><span><FaInstagram className='inner-icon'  /></span></div>
        <div className='icon-socialMedia'><span><FaTiktok className='inner-icon'  /></span></div>
        <div className='icon-socialMedia'><span><FaWhatsapp className='inner-icon'  /></span></div>
    </nav>
  )
}

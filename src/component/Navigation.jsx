import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navigation = () => {
  return (
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/order">Order</NavLink>
    </nav>
  )
}

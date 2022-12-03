import React from 'react'
import { Link } from 'react-router-dom'
import '../sass/nav.css'
import logo from '../images/pizza-logo.png'
import menu from '../images/menu-icon.png'
const nav = () => {
  return (
    <nav>
      <div className="container f-2">
      <img src={logo} alt="" className="logo" />
      <img src={menu} alt="menu-icon" className='menu' />
    <ul className='f-2'>
      <Link to="/pizza">pizza</Link>
      <Link to="/pasta">pasta</Link>
      <Link to="/sandwich">sandwich</Link>
      <Link to="/sea-food">sea food</Link>
    </ul>
      </div>
  </nav>
  )
}

export default nav
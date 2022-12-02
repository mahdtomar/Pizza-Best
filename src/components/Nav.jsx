import React from 'react'
import { Link } from 'react-router-dom'

const nav = () => {
  return (
    <nav>
    <img src="" alt="" className="logo" />
    <ul>
      <Link to="/pizza">pizza</Link>
      <Link to="/pasta">pasta</Link>
      <Link to="/sandwich">sandwich</Link>
      <Link to="/sea-food">sea food</Link>
    </ul>
  </nav>
  )
}

export default nav
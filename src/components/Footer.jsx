import React from 'react'
import phoneIcon from '../images/phone-solid.svg'
import '../sass/footer.css'
const Footer = () => {
  return (
    <footer>
        <div className="container">
        <span>Pizza Best</span>
        <p className="adress"> Adress : tanta, elgharbiea , egypt</p>
        <div className="phone f-2">
          <img src={phoneIcon} alt="phone-icone" className="icon" />
          01029949333
        </div>
        </div>
    </footer>
  )
}

export default Footer
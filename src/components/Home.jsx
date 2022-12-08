import React from 'react'
import Header from './Header'
import '../sass/home.css'
import BestDeals from './BestDeals'
import Footer from './Footer'
import Nav from'./Nav'
import Slider from './Slider'
import PastaSlider from './PastaSlider'
import SalesSlider from './SalesSlider'
const Home = () => {
  return (
    <div>
        <Nav/>
        <Header/>
        <h1>Pizza Best</h1>
        <SalesSlider/>
        {/* <BestDeals/> */}
        <Slider/>
        <PastaSlider/>
        <Footer/>
    </div>
  )
}

export default Home
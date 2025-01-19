import React from 'react'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import ServiceSection from '../components/ServiceSection'
import AboutSection from '../components/AboutSection'
import WhySection from '../components/WhySection'
import StartupSection from '../components/StartupSection'

const HomePage = () => {
    
  return (
    <div className='w-full overflow-hidden'>
        <Banner/>
        <Navbar/>
        <HeroSection/>
        <StartupSection/>
        <ServiceSection/>
        <AboutSection/>
        <WhySection/>
        <Footer/>
      
    </div>
  )
}

export default HomePage

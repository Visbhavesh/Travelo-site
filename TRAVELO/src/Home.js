import React from 'react'
import { Navbar } from './components/Navbar/Navbar'
import { Whychooseus } from './components/Reviewpage/Whychooseus'
import { Stations } from './components/Railways/Stations'
import { Mapped } from './components/Reviewpage/Mapped'
import { Footer } from './components/Footer/Footer'

export const Home = () => {
  return (
    <div> 
      <Navbar />

      <Whychooseus />
      <Stations />
      <Mapped />

      <Footer />
    
    </div>
  )
}

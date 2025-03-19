import React from 'react'
import { AboutUs } from '../components/AboutUs'
import { Header } from '../components/Header'
import Experience from './Experience'
import ThePerformer from './ThePerformer'
import Footer from '../Footer'
import { div } from 'three/webgpu'

const Home: React.FC = () => {
  return (
    <div>
      <div className="p-16">
        <Header />
        <AboutUs />
        <Experience />
        <ThePerformer />
      </div>
      <Footer />
    </div>
  )
}

export default Home

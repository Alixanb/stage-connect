import React from 'react'
import { AboutUs } from '../components/AboutUs'
import Experience from '../components/Experience'
import ThePerformer from '../components/ThePerformer'
import Layout from '../components/Layout'

const Home: React.FC = () => {
  return (
    <Layout>
      <AboutUs />
      <Experience />
      <ThePerformer />
    </Layout>
  )
}

export default Home

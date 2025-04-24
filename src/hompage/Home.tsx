import React from 'react'
import { AboutUs } from '../components/AboutUs'
import { Header } from '../components/Header'
import Footer from '../Footer'
import { div } from 'three/webgpu'
import Experience from '../components/Experience'
import ThePerformer from '../components/ThePerformer'
import Layout from '../components/Layout'

const Home: React.FC = () => {
  return (
    <Layout>
      <Header />
      <div className="">
        <AboutUs />
        <Experience />
        <ThePerformer />
      </div>
    </Layout>
  );
};

export default Home;

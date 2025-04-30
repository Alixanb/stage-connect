import React from 'react'
import { Helmet } from 'react-helmet'
import { AboutUs } from '../components/AboutUs'
import Experience from '../components/Experience'
import { Header } from '../components/Header'
import Layout from '../components/Layout'
import ThePerformer from '../components/ThePerformer'

const Home: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>Connect Stage | Expérience immersive de concerts virtuels en 3D</title>
        <meta name="description" content="Plongez dans l'expérience immersive de Connect Stage. Assistez à des concerts virtuels en 3D, interagissez et vivez l'événement comme si vous y étiez réellement." />
        <meta name="keywords" content="concert virtuel, expérience immersive, 3D, réalité virtuelle, musique en ligne, Connect Stage" />
        <link rel="canonical" href="https://connect-stage.com" />
      </Helmet>
      <Header />
      <article className="home-content">
        <AboutUs />
        <Experience />
        <ThePerformer />
      </article>
    </Layout>
  );
};

export default Home;

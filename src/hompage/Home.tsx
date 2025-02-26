import React from "react";
import { AboutUs } from "../components/AboutUs";
import { Header } from "../components/Header";
import Experience from './Experience';
import ThePerformer from "./ThePerformer";

const Home: React.FC = () => {
  return (
    <div className="p-16">
      <Header />
      <AboutUs />
      <h1>Bienvenue sur la page d'accueil</h1>
      <p>Rejoignez une expérience immersive dès maintenant !</p>
      <Experience />
      <ThePerformer />
    </div>
  )
}

export default Home

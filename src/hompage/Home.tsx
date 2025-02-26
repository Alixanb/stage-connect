import React from "react";
import { AboutUs } from "../components/AboutUs";
import { Header } from "../components/Header";

const Home: React.FC = () => {
  return (
    <div className="p-16">
      <AboutUs />
      <Header />
      <h1>Bienvenue sur la page d'accueil</h1>
      <p>Rejoignez une expérience immersive dès maintenant !</p>
    </div>
  );
};

export default Home;

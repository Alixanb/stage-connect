import React from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleJoinExperience = () => {
    navigate("/experience");
  };

  return (
    <div className="container">
      <h1>Bienvenue sur la page d'accueil</h1>
      <p>Rejoignez une expérience immersive dès maintenant !</p>
      <button onClick={handleJoinExperience}>Rejoindre une expérience</button>
    </div>
  );
};

export default Home;

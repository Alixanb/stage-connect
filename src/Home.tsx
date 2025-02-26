import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home: React.FC = () => {
  const navigate = useNavigate()

  const handleJoinExperience = () => {
    navigate('/experience')
  }

  return (
    <div
      className="container flex-grow"
      style={{ textAlign: 'center', padding: '20px' }}
    >
      <h1>Bienvenue sur la page d'accueil</h1>
      <p>Rejoignez une expérience immersive dès maintenant !</p>
      <button
        onClick={handleJoinExperience}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        Rejoindre une expérience
      </button>
    </div>
  )
}

export default Home

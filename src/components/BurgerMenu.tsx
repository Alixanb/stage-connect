import React, { useState } from "react";
import { Link } from "react-router-dom";
import BurgerMenuIcon from "../assets/burger-menu.svg";
import CrossIcon from "../assets/cross.svg";
import background from '../assets/bg_footer.png'

const BurgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Icône du menu burger */}
      <button
        onClick={toggleMenu}
        className="fixed top-4 right-4 z-50 p-2 text-white bg-black rounded-md focus:outline-none"
      >
        {isOpen ? (
          <img src={CrossIcon} alt="Close Menu" className="w-6 h-6" />
        ) : (
          <img src={BurgerMenuIcon} alt="Open Menu" className="w-6 h-6" />
        )}
      </button>

      {/* Zone de navigation */}
      <div
        className={`fixed top-0 right-0 w-64 h-auto bg-black text-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out shadow-lg`}
      >
        <img
        src={background}
        alt="background"
        className="absolute top-0 left-0 w-full h-full object-cover bg-center opacity-50 z-0"
        />
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 p-2 text-white bg-black rounded-md focus:outline-none"
        >
          <img src={CrossIcon} alt="Close Menu" className="w-6 h-6" />
        </button>
        <nav className="relative z-10 flex flex-col items-start p-4 space-y-4 text-xl text-white">

          <Link
            to="/"
            onClick={toggleMenu}
            className="hover:underline hover:text-white"
          >
            Accueil
          </Link>
          <Link
            to="/experience"
            onClick={toggleMenu}
            className="hover:underline hover:text-white"
          >
            Expérience
          </Link>
          <Link
            to="/about"
            onClick={toggleMenu}
            className="hover:underline hover:text-white"
          >
            À propos
          </Link>
          <Link
            to="/contact"
            onClick={toggleMenu}
            className="hover:underline hover:text-white"
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default BurgerMenu;
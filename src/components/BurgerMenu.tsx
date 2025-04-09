import React, { useState } from "react";
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
        className="fixed top-4 right-4 z-50 p-2 text-white bg-black rounded-md focus:outline-none cursor-pointer"
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
        } transition-transform duration-300 ease-in-out shadow-lg z-10`}
      >
        <img
        src={background}
        alt="background"
        className="absolute top-0 left-0 w-full h-full object-cover bg-center opacity-75 z-0 bg-black"
        />
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 p-2 text-white bg-black rounded-md focus:outline-none cursor-pointer"
        >
          <img src={CrossIcon} alt="Close Menu" className="w-6 h-6" />
        </button>
        <nav className="relative z-10 flex flex-col items-start p-4 space-y-4 text-xl text-white">

          <a
            href="/"
            onClick={toggleMenu}
            className="hover:underline hover:text-white"
          >
            Accueil
          </a>
          <a
            href="/experience"
            onClick={toggleMenu}
            className="hover:underline hover:text-white"
          >
            Expérience
          </a>
          <a
            href="/about"
            onClick={toggleMenu}
            className="hover:underline hover:text-white"
          >
            À propos
          </a>
          <a
            href="/contact"
            onClick={toggleMenu}
            className="hover:underline hover:text-white"
          >
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
};

export default BurgerMenu;
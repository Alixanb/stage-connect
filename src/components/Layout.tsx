import Lenis from '@studio-freight/lenis';
import React, { ReactNode, useEffect, useRef } from 'react';
import Footer from '../Footer';
import BurgerMenu from "./BurgerMenu";
import { isMobile } from 'react-device-detect';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { textAnimations } from '../animations/textAnimations';

type LayoutProps = {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })

    const raf = (time: number) => {
      lenisRef.current?.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenisRef.current?.destroy()
    }
  }, [])

  return (
    <div className="site-wrapper">
      <header className="flex justify-between">
      <div className="relative z-10 flex flex-row p-4 justify-start text-xl text-white ml-8">
        <motion.img
          src="src/assets/logo_footer.svg"
          alt="Logo Connect Stage"
          variants={textAnimations.reveal.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-32 h-auto"
        />
    </div>
        {
          isMobile ? (
            <div className="p-4">
              <BurgerMenu />
            </div>
          ) :
          (
            <nav className="relative z-10 flex flex-row p-4 justify-end space-x-6 text-xl text-white mr-8">
              <Link
                to="/"
                className="hover:underline hover:text-white"
              >
                Accueil
              </Link>
              <Link
                to="/experience"
                className="hover:underline hover:text-white"
              >
                Expérience
              </Link>
              <Link
                to="/about"
                className="hover:underline hover:text-white"
              >
                À propos
              </Link>
              <Link
                to="/contact"
                className="hover:underline hover:text-white"
              >
                Contact
              </Link>
            </nav>
          )
        }
      </header>
      <main id="main-content" className="p-4">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
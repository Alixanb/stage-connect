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
    <div className="site-wrapper flex flex-col min-h-screen">
      <header className="sticky top-0 z-20 bg-black/80 backdrop-blur flex justify-between">
        <div className="relative z-10 flex flex-row p-4 justify-start text-xl text-white ml-8 font-apotek-medium">
          <motion.h1
            variants={textAnimations.reveal.container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Connect Stage - Expérience immersive de concerts virtuels en 3D
          </motion.h1>
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
                className="link-underline-animate font-nickel"
              >
                Accueil
              </Link>
              <Link
                to="/experience"
                className="link-underline-animate font-nickel"
              >
                Expérience
              </Link>
              <Link
                to="/about"
                className="link-underline-animate font-nickel"
              >
                À propos
              </Link>
              <Link
                to="/contact"
                className="link-underline-animate font-nickel"
              >
                Contact
              </Link>
            </nav>
          )
        }
      </header>
      <main id="main-content" className="p-4 flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
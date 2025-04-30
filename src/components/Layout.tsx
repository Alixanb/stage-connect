import Lenis from '@studio-freight/lenis';
import { motion } from 'framer-motion';
import React, { ReactNode, useEffect, useRef } from 'react';
import { isMobile } from 'react-device-detect';
import { textAnimations } from '../animations/textAnimations';
import Footer from '../Footer';
import BurgerMenu from "./BurgerMenu";

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
        <div className="relative z-10 flex flex-row p-4 justify-start text-xl text-white ml-8">
          <a href="/" target="_blank" rel="noopener noreferrer">
            <motion.img
              src="/pictures/logo.png"
              alt="Logo Connect Stage"
              variants={textAnimations.reveal.container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-16 h-auto"
            />
          </a>
        </div>
        {
          isMobile ? (
            <div className="p-4">
              <BurgerMenu />
            </div>
          ) :
            (
              <nav className="relative z-10 flex flex-row p-4 justify-end space-x-6 text-xl text-white mr-8">
                <a href='/'
                  className="link-underline-animate font-nickel"
                >
                  Accueil
                </a>
                <a href='/experience'
                  className="link-underline-animate font-nickel"
                >
                  Expérience
                </a>
                <a href='/about'
                  className="link-underline-animate font-nickel"
                >
                  À propos
                </a>
                <a href='/contact'
                  className="link-underline-animate font-nickel"
                >
                  Contact
                </a>
              </nav>
            )
        }
      </header>
      <main id="main-content" className="p-4 flex-1 overflow-x-hidden">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
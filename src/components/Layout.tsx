import Lenis from '@studio-freight/lenis';
import React, { ReactNode, useEffect, useRef } from 'react';
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
    <div className="site-wrapper">
      <header>
        <div className="p-4">
          <BurgerMenu />
        </div>
      </header>
      <main id="main-content" className="p-4">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
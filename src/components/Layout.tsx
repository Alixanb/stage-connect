import React, { ReactNode, useEffect, useRef } from 'react'
import { Header } from './Header'
import Footer from '../Footer'
import Lenis from '@studio-freight/lenis'
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
    <div>
      <div className="p-16">
        <BurgerMenu />
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import {
  textAnimations
} from '../animations/textAnimations'
import cityImage from '../assets/city.png'
import humanImage from '../assets/human.png'
import motelImage from '../assets/motel.png'
import star from '../assets/star.svg'
import windowImage from '../assets/window.png'

const Experience = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const intervalRef = useRef<number | null>(null)

  const slides = [
    [
      { image: cityImage, alt: 'Vue panoramique d\'une salle de concert virtuelle Connect Stage', width: 600, height: 400 },
      { image: windowImage, alt: 'Interface immersive de Connect Stage', width: 300, height: 200 },
      { image: motelImage, alt: 'Environnement 3D de Connect Stage', width: 300, height: 200 },
    ],
    [
      { image: windowImage, alt: 'Interface immersive de Connect Stage', width: 300, height: 200 },
      { image: cityImage, alt: 'Vue panoramique d\'une salle de concert virtuelle Connect Stage', width: 600, height: 400 },
      { image: humanImage, alt: 'Avatar participant à un concert virtuel', width: 300, height: 200 },
    ],
  ]

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = window.setInterval(() => {
        nextSlide()
      }, 5000)
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const toggleAutoplay = () => {
    setIsPlaying((prev) => !prev)
  }

  const handleNavigation = (callback: () => void) => {
    // Pause autoplay when manually navigating
    setIsPlaying(false)
    callback()
  }

  return (
    <section className="bg-black text-white py-20" aria-labelledby="experience-section">
      <div className="mb-20 font-nickel">
        <motion.h2
          id="experience-section"
          className="font-bold text-4xl lg:text-6xl uppercase"
          variants={textAnimations.reveal.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Immersion totale
        </motion.h2>

        <motion.p
          className="font-bold text-4xl lg:text-6xl uppercase lg:text-right flex items-center gap-4 justify-end h-fit font-nickel"
          variants={textAnimations.paragraph.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="hidden lg:block">
            <img src={star} alt="Icône Connect Stage" className="w-[100px] h-[100px]" width="100" height="100" />
          </div>
          expérience 3D
        </motion.p>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-start max-w-[1400px] mx-auto">
          <div className="w-full">
            <div className="mb-6">
              <div className="grid grid-cols-8 gap-4">
                {slides[currentSlide].map((slide, index) => (
                  <div
                    key={index}
                    className={`max-h-[540px] overflow-hidden ${index === 0 ? 'col-span-4' : 'col-span-2'}`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      width={slide.width}
                      height={slide.height}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-end gap-4 mb-16">
              <button
                onClick={() => handleNavigation(prevSlide)}
                className="group"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M15 19L8 12L15 5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="square"
                  />
                </svg>
              </button>
              <button
                onClick={() => handleNavigation(nextSlide)}
                className="group"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M9 5L16 12L9 19"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="square"
                  />
                </svg>
              </button>
              <button onClick={toggleAutoplay} className="group ml-4">
                {isPlaying ? (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="6" y="4" width="4" height="16" fill="white" />
                    <rect x="14" y="4" width="4" height="16" fill="white" />
                  </svg>
                ) : (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6 4L20 12L6 20V4Z" fill="white" />
                  </svg>
                )}
              </button>
            </div>

            <div className="flex flex-col lg:flex-row items-start justify-between mt-8 lg:mt-20">
              <motion.h3
                className="text-4xl font-bold max-w-[320px] font-apotek-medium"
                variants={textAnimations.slideIn.container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Explorez et interagissez
                <br />
                comme si vous y étiez
              </motion.h3>
              <motion.div
                variants={textAnimations.textMask.container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="lg:text-3xl text-xl opacity-80 max-w-[800px] font-apotek-regular"
              >
                <motion.p
                  variants={textAnimations.textMask.item}
                  style={{ overflow: 'hidden' }}
                >
                  Connect Stage n'est pas seulement un site de diffusion en ligne, c'est un espace virtuel où chaque utilisateur peut s'immerger totalement dans l'ambiance d'un concert. Notre technologie 3D vous permet d'explorer librement une salle de concert virtuelle, de vous déplacer à votre guise, d'interagir avec d'autres participants et de vivre le concert comme si vous étiez au cœur de l'événement. Les artistes peuvent ainsi toucher un public mondial tout en offrant une expérience authentique et immersive.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

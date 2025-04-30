import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { textAnimations } from '../animations/textAnimations'
import caroussel_1 from '../../public/assets/pictures/caroussel_1.webp'
import caroussel_2 from '../../public/assets/pictures/caroussel_2.webp'
import star from '../../public/assets/pictures/star.svg'
import windowImage from '../../public/assets/pictures/window.png'

const Experience = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const intervalRef = useRef<number | null>(null)

  const slides = [
    {
      images: [
        {
          image: caroussel_1,
          alt: "Vue panoramique d'une salle de concert virtuelle Connect Stage",
          width: '50%',
        },
        {
          image: caroussel_2,
          alt: 'Interface immersive de Connect Stage',
          width: '25%',
        },
        {
          image: caroussel_2,
          alt: 'Environnement 3D de Connect Stage',
          width: '25%',
        },
      ],
      title: 'Explorez et interagissez comme si vous y étiez',
      description:
        "Connect Stage n'est pas seulement un site de diffusion en ligne, c'est un espace virtuel où chaque utilisateur peut s'immerger totalement dans l'ambiance d'un concert. Notre technologie 3D vous permet d'explorer librement une salle de concert virtuelle, de vous déplacer à votre guise, d'interagir avec d'autres participants et de vivre le concert comme si vous étiez au cœur de l'événement.",
    },
    {
      images: [
        {
          image: caroussel_1,
          alt: "Vue panoramique d'une salle de concert virtuelle Connect Stage",
          width: '25%',
        },
        {
          image: caroussel_2,
          alt: 'Interface immersive de Connect Stage',
          width: '50%',
        },
        {
          image: caroussel_2,
          alt: 'Environnement 3D de Connect Stage',
          width: '25%',
        },
      ],
      title: 'Une expérience immersive unique',
      description:
        "Découvrez une nouvelle façon de vivre les concerts en ligne. Notre plateforme vous offre une expérience immersive inégalée, où chaque détail compte. Interagissez avec l'environnement, découvrez des points de vue uniques et partagez ces moments avec d'autres passionnés de musique.",
    },
    {
      images: [
        {
          image: caroussel_1,
          alt: "Vue panoramique d'une salle de concert virtuelle Connect Stage",
          width: '25%',
        },
        {
          image: caroussel_2,
          alt: 'Interface immersive de Connect Stage',
          width: '25%',
        },
        {
          image: caroussel_2,
          alt: 'Environnement 3D de Connect Stage',
          width: '50%',
        },
      ],
      title: 'Une technologie révolutionnaire',
      description:
        "Notre technologie de pointe vous permet de vivre une expérience de concert unique. Grâce à notre moteur 3D avancé, vous pouvez explorer la scène sous tous les angles, interagir avec l'environnement et créer des souvenirs inoubliables, le tout depuis le confort de votre domicile.",
    },
  ]

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = window.setInterval(() => {
        nextSlide()
      }, 20000)
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
    <section
      className="bg-black text-white py-20 min-h-[800px] lg:min-h-[1000px]"
      aria-labelledby="experience-section"
    >
      <div className="container mx-auto px-4 mb-20">
        <motion.h2
          id="experience-section"
          className="font-bold text-4xl lg:text-8xl uppercase lg:text-right flex items-center gap-4 justify-start h-fit font-nickel"
          variants={textAnimations.reveal.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Immersion totale
        </motion.h2>

        <motion.p
          className="font-bold text-4xl lg:text-8xl uppercase lg:text-right flex items-center gap-4 justify-end h-fit font-nickel"
          variants={textAnimations.paragraph.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          expérience 3D
        </motion.p>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-start max-w-[1400px] mx-auto">
          <div className="w-full ">
            <div className="mb-4 border-1 border-white p-6">
              <div className="flex gap-4">
                {slides[currentSlide].images.map((slide, index) => (
                  <div
                    key={index}
                    className="h-[300px] lg:h-[540px] w-auto overflow-hidden transition-[width] duration-500 ease-in-out"
                    style={{ width: slide.width }}
                  >
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center gap-4 mb-16 cursor-pointer">
              <button onClick={prevSlide} className="group">
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
              <button onClick={nextSlide} className="group">
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
              {/* <button onClick={toggleAutoplay} className="group ml-4">
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
              </button> */}
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between mt-8 lg:mt-20 h-full font-apotek-regular min-h-[200px]">
              <motion.h3
                className="text-2xl lg:text-6xl font-bold max-w-[320px]"
                variants={textAnimations.slideIn.container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {slides[currentSlide].title}
              </motion.h3>
              <motion.div
                variants={textAnimations.textMask.container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-xl lg:text-4xl opacity-80 max-w-[800px] h-fit"
              >
                <motion.p
                  variants={textAnimations.textMask.item}
                  style={{ overflow: 'hidden' }}
                >
                  {slides[currentSlide].description}
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

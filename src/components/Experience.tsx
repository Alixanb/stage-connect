import { motion } from 'framer-motion'
import { useState } from 'react'
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

  const slides = [
    [
      { image: cityImage, alt: 'Foggy city skyline' },
      { image: windowImage, alt: 'Window silhouettes' },
      { image: motelImage, alt: 'Vintage motel sign' },
    ],
    [
      { image: windowImage, alt: 'Window silhouettes' },
      { image: cityImage, alt: 'Foggy city skyline' },
      { image: humanImage, alt: 'Human portrait' },
    ],
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="bg-black text-white py-20">
      <div className="mb-20">
        <motion.p
          className="font-bold text-4xl lg:text-6xl uppercase"
          variants={textAnimations.reveal.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Immersion totale
        </motion.p>

        <motion.p
          className="font-bold text-4xl lg:text-6xl uppercase lg:text-right flex items-center gap-4 justify-end h-fit"
          variants={textAnimations.paragraph.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="hidden lg:block">
            <img src={star} alt="logo" className="w-[100px] h-[100px]" />
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
                    className={`max-h-[540px] overflow-hidden ${index === 0 ? 'col-span-4' : 'col-span-2'
                      }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-4 mb-16">
              <button onClick={prevSlide} className="group">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
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
                >
                  <path
                    d="M9 5L16 12L9 19"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="square"
                  />
                </svg>
              </button>
            </div>

            <div className="flex flex-col lg:flex-row items-start justify-between mt-8 lg:mt-20">
              <motion.h2
                className="text-3xl font-bold max-w-[320px]"
                variants={textAnimations.slideIn.container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Explorez et interagissez
                <br />
                comme si vous y étiez
              </motion.h2>
              <motion.div
                variants={textAnimations.textMask.container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-lg opacity-80 max-w-[800px]"
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
    </div>
  )
}

export default Experience

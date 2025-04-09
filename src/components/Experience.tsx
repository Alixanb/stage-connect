import star from '../assets/star.svg'
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import {
  textAnimations,
  splitText,
  splitTextByLines,
} from '../animations/textAnimations'
import cityImage from '../assets/city.png'
import windowImage from '../assets/window.png'
import motelImage from '../assets/motel.png'
import humanImage from '../assets/human.png'

const Experience = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const intervalRef = useRef<number | null>(null)

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
    <div className="bg-black text-white py-20">
      <div className="mb-20">
        <motion.p
          className="font-bold text-8xl uppercase"
          variants={textAnimations.reveal.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Your very own
        </motion.p>

        <motion.p
          className="font-bold text-8xl uppercase text-right flex items-center gap-4 justify-end"
          variants={textAnimations.paragraph.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div>
            <img src={star} alt="logo" className="w-[100px] h-[100px]" />
          </div>
          3d experience
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
                    className={`max-h-[540px] overflow-hidden ${
                      index === 0 ? 'col-span-4' : 'col-span-2'
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

            <div className="flex items-start justify-between mt-20">
              <motion.h2
                className="text-3xl font-bold max-w-[320px]"
                variants={textAnimations.slideIn.container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Title of this section,
                <br />
                mus be a little bit long
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
                  Lorem Elsass ipsum knack schneck libero. Carola Racing. non
                  tellus Mauris knepfle libero, Salut bisamme id ac senectus
                  flammekueche leverwurscht Heineken Pellentesque elit tchao
                  bissame sed Chulien eleifend so auctor, in, nullam Pfourtz !
                  risus, salu wie turpis, id, gal hopla dui gewurztraminer et
                  rucksack Gal. mollis nüdle ch'ai suspendisse hopla condimentum
                  eget bredele placerat Yo dû. rhoncus pellentesque
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
import {
  Environment,
  OrthographicCamera
} from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { useControls } from "leva";
import { useRef } from "react";
import { CharacterController } from "./CharacterController";
import { InteractiveElements } from "./InteractiveElements";
import { Map } from "./Map";

const maps = {
  castle_on_hills: {
    scale: 3,
    position: [-6, -7, 0],
  },
  animal_crossing_map: {
    scale: 20,
    position: [-15, -1, 10],
  },
  city_scene_tokyo: {
    scale: 0.72,
    position: [0, -1, -3.5],
  },
  de_dust_2_with_real_light: {
    scale: 0.3,
    position: [-5, -3, 13],
  },
  medieval_fantasy_book: {
    scale: 0.4,
    position: [-4, 0, -6],
  },
};

export const Experience = () => {
  const shadowCameraRef = useRef();
  const { map } = useControls("Map", {
    map: {
      value: "castle_on_hills",
      options: Object.keys(maps),
    },
  });

  return (
    <>
      {/* <OrbitControls /> */}
      <Environment preset="sunset" />
      <directionalLight
        intensity={0.65}
        castShadow
        position={[-15, 10, 15]}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.00005}
      >
        <OrthographicCamera
          left={-22}
          right={15}
          top={10}
          bottom={-20}
          ref={shadowCameraRef}
          attach={"shadow-camera"}
        />
      </directionalLight>
      <Physics debug>
        <Map
          scale={maps[map].scale}
          position={maps[map].position}
          model={`models/${map}.glb`}
        />
        <CharacterController />
        <InteractiveElements />
      </Physics>
    </>
  );
};

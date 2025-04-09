import React from 'react'
import { motion } from 'framer-motion'
import { textAnimations } from '../animations/textAnimations'

const ThePerformer: React.FC = () => {
  return (
    <section>
      <div className="">
        <motion.h1
          className="text-6xl font-bold"
          variants={textAnimations.reveal.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          THE PERFORMER
        </motion.h1>
        <motion.p
          className="mt-2 border-t border-gray-500 pt-2"
          variants={textAnimations.fadeIn.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Lorem Elsass ipsum knack schneck libero. Carola Racing. non tellus
          Mauris
        </motion.p>
      </div>
      <div className="mt-8 grid md:grid-cols-2 gap-8 items-center">
        <motion.img
          src="src/assets/city-skyline.png"
          alt="City Skyline"
          className="rounded-lg shadow-lg w-full h-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        />
        <div>
          <motion.h2
            className="text-2xl font-bold"
            variants={textAnimations.slideIn.container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Lorem Elsass ipsum knack.
          </motion.h2>
          <motion.div
            variants={textAnimations.textMask.container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p
              className="mt-4 text-gray-300"
              variants={textAnimations.textMask.item}
              style={{ overflow: 'hidden' }}
            >
              Lorem Elsass ipsum knack schneck libero. Carola Racing. non tellus
              Mauris knepfle libero, Salut bisamme id ac senectus flammekueche
              leverwurscht Heineken Pellentesque elit tchao bissame sed Chulien
              eleifend so auctor, in, nullam Pfourtz ! risus, salu wie turpis.
            </motion.p>
          </motion.div>
          <motion.a
            href="https://spotify.com"
            className="mt-4 inline-block text-blue-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            See on Spotify ↗
          </motion.a>
        </div>
      </div>
    </section>
  )
}

export default ThePerformer

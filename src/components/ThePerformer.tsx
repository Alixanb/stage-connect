import { motion } from 'framer-motion'
import React from 'react'
import { textAnimations } from '../animations/textAnimations'

const ThePerformer: React.FC = () => {
  return (
    <section aria-labelledby="artistes-section" className="performer-section">
      <div className="performer-header">
        <motion.h2
          id="artistes-section"
          className="text-4xl lg:text-6xl font-bold font-nickel"
          variants={textAnimations.reveal.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          LES ARTISTES
        </motion.h2>
        <motion.p
          className="mt-2 border-t border-gray-500 pt-2 font-apotek-medium text-xl"
          variants={textAnimations.fadeIn.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Une visibilité mondiale pour tous les talents
        </motion.p>
      </div>
      <div className="mt-8 grid md:grid-cols-2 gap-8 items-center">
        <motion.img
          src="src/assets/city-skyline.png"
          alt="Artistes performant sur une scène virtuelle Connect Stage"
          className="rounded-lg shadow-lg w-full h-auto"
          loading="lazy"
          width="600"
          height="400"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        />
        <div>
          <motion.h3
            className="text-4xl font-bold font-apotek-medium"
            variants={textAnimations.slideIn.container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Performances virtuelles pour un public mondial
          </motion.h3>
          <motion.div
            variants={textAnimations.textMask.container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p
              className="mt-4 text-gray-300 font-apotek-regular text-xl"
              variants={textAnimations.textMask.item}
              style={{ overflow: 'hidden' }}
            >
              Les artistes peuvent se produire en ligne dans un environnement virtuel réaliste, atteignant un public mondial, tout en augmentant la visibilité de leur merchandising grâce à des liens directs vers leurs boutiques en ligne. Avec Connect Stage, développez votre audience et créez des expériences uniques pour vos fans, où qu'ils soient et quand ils le souhaitent.
            </motion.p>
          </motion.div>
          <motion.a
            href="https://spotify.com"
            className="mt-4 inline-block text-secondary hover:underline font-apotek-regular text-xl"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            aria-label="Rejoindre nos artistes sur Connect Stage"
          >
            Rejoindre nos artistes ↗
          </motion.a>
        </div>
      </div>
    </section>
  )
}

export default ThePerformer

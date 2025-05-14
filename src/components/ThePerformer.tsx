import { motion } from 'framer-motion'
import React from 'react'
import { textAnimations } from '../animations/textAnimations'

const ThePerformer: React.FC = () => {
  return (
    <section aria-labelledby="artistes-section" className="container">
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

      {/* Wrapper global de cette section */}
      <div className="mt-8 grid md:grid-cols-2 gap-8 items-center">
        {/* Image + popup */}
        <div className="relative group">
          <motion.img
            src="/pictures/caroussel_1.webp"
            alt="Artistes performant sur une scène virtuelle Connect Stage"
            className="rounded-lg shadow-lg w-full h-auto cursor-pointer"
            loading="lazy"
            width="600"
            height="400"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          />

          {/* Boutons overlay (desktop uniquement) */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex">
            <div className="flex gap-4">
              <a
                href="https://open.spotify.com/artist/4JS2lTQZgzfanDQj7Yfrkq?si=v7uhOc9rRnGLYjQsiRqBSw"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full flex items-center gap-2"
              >
                <img
                  src="https://www.logo.wine/a/logo/Spotify/Spotify-Black-Logo.wine.svg"
                  alt="Spotify logo"
                  className="h-12"
                />
              </a>
              <a
                href="https://dzr.page.link/Ld67Wa7m7GivY2dE6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white px-4 py-2 rounded-full flex items-center gap-2 bg-white hover:bg-gray-200"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/fr/c/ca/Logo_Deezer_2023.svg"
                  alt="Deezer logo"
                  className="h-5"
                />
              </a>
              <a
                href="https://m.soundcloud.com/baptippo?utm_source=direct&utm_content=download_button_header&utm_medium=mobi&utm_campaign=no_campaign"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-200 text-white px-4 py-2 rounded-full flex items-center gap-2"
              >
                <img
                  src="https://www.svgrepo.com/show/303135/soundcloud-logo.svg"
                  alt="SoundCloud logo"
                  className="h-12"
                />
              </a>
            </div>
          </div>

          {/* Boutons visibles sous l'image en mobile */}
          <div className="flex gap-4 justify-center mt-4 md:hidden">
            <a
              href="https://open.spotify.com/artist/4JS2lTQZgzfanDQj7Yfrkq?si=v7uhOc9rRnGLYjQsiRqBSw"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full flex items-center gap-2"
            >
              <img
                src="https://www.logo.wine/a/logo/Spotify/Spotify-Black-Logo.wine.svg"
                alt="Spotify logo"
                className="h-12"
              />
            </a>
            <a
              href="https://dzr.page.link/Ld67Wa7m7GivY2dE6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white px-4 py-2 rounded-full flex items-center gap-2 bg-white hover:bg-gray-200"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/fr/c/ca/Logo_Deezer_2023.svg"
                alt="Deezer logo"
                className="h-5"
              />
            </a>
            <a
              href="https://m.soundcloud.com/baptippo?utm_source=direct&utm_content=download_button_header&utm_medium=mobi&utm_campaign=no_campaign"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-200 text-white px-4 py-2 rounded-full flex items-center gap-2"
            >
              <img
                src="https://www.svgrepo.com/show/303135/soundcloud-logo.svg"
                alt="SoundCloud logo"
                className="h-12"
              />
            </a>
          </div>
        </div>

        {/* Texte explicatif */}
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
              Les artistes peuvent se produire en ligne dans un environnement
              virtuel réaliste, atteignant un public mondial, tout en augmentant
              la visibilité de leur merchandising grâce à des liens directs vers
              leurs boutiques en ligne. Avec Connect Stage, développez votre
              audience et créez des expériences uniques pour vos fans, où qu'ils
              soient et quand ils le souhaitent.
            </motion.p>
          </motion.div>
          <motion.a
            href="/contact"
            className="mt-4 inline-block text-secondary hover:underline font-apotek-regular text-xl"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            aria-label="Rejoindre nos artistes sur Connect Stage"
          >
            Nous contacter ↗
          </motion.a>
        </div>
      </div>
    </section>
  )
}

export default ThePerformer

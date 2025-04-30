import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { textAnimations } from '../animations/textAnimations'

export const AboutUs = () => {
  return (
    <div className="my-16 lg:my-[260px] grid grid-cols-1 lg:grid-cols-2 gap-4">
      <motion.h2
        className="font-bold text-xl"
        variants={textAnimations.reveal.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        À propos de Connect Stage
      </motion.h2>
      <article className="flex flex-col gap-6">
        <motion.h3
          className="font-bold text-4xl"
          variants={textAnimations.slideIn.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Une expérience immersive unique
        </motion.h3>
        <motion.div
          variants={textAnimations.textMask.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p
            className="leading-7"
            variants={textAnimations.textMask.item}
            style={{ overflow: 'hidden' }}
          >
            Connect Stage vous offre la possibilité d'assister à un concert sans quitter votre domicile, tout en ayant l'impression d'y être réellement. Explorez librement une salle de concert virtuelle, où vous pouvez vous promener, intéragir et vivre l'événement comme si vous étiez au cœur de l'action. Notre technologie 3D crée une immersion totale dans l'ambiance du concert.
          </motion.p>
        </motion.div>
        <motion.a
          href="/experience"
          className="hover:underline flex items-center gap-2"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.3 }}
          viewport={{ once: true }}
        >
          Découvrir l'expérience
          <ArrowRight className="size-4" />
        </motion.a>
        <h3 className="font-bold text-4xl">
          Pour les spectateurs et les artistes
        </h3>
        <p className="leading-7">
          Connect Stage n'est pas seulement un site de diffusion en ligne, c'est un espace virtuel où chaque utilisateur peut s'immerger totalement dans l'ambiance d'un concert. Que vous soyez dans l'impossibilité de vous rendre à un concert à cause de problèmes de mobilité, de santé ou de phobie de la foule, ou que vous soyez un artiste en quête de visibilité, cette expérience immersive est faite pour vous.
        </p>
        <motion.a
          href="/about"
          className="hover:underline flex items-center gap-2 "
        >
          En savoir plus
          <ArrowRight className="size-4" />
        </motion.a>
      </article>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Connect Stage - L'immersion dans un concert accessible à tous.
      </motion.div>
    </div>
  )
}

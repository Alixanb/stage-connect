import { motion } from 'framer-motion';
import { ArrowRight } from "lucide-react";
import { textAnimations } from '../animations/textAnimations';

export const Header = () => {
  return (
    <header className="relative flex flex-col gap-4 container mx-auto px-4">
      {/* Onde du haut */}
      {/* <img
        src={waveTop}
        alt=""
        className="absolute top-0 left-0 w-full pointer-events-none select-none z-0"
        draggable={false}
        style={{ maxHeight: 180 }}
      /> */}

      <img
        src="/pictures/medium_wave_2.png"
        alt=""
        className="pointer-events-none select-none z-0"
        style={{
          position: 'absolute',
          right: 0,
          bottom: 0,
          maxHeight: 0,
          width: 'auto',
        }}
        draggable={false}
      />

      <div className="relative flex flex-col text-6xl xl:text-9xl 2xl:text-[140px] uppercase font-medium">
        {/* Image waveBottom derrière le titre */}
        <img
          src="/pictures/medium_wave_1.png"
          alt=""
          className="absolute left-0 bottom-0 w-full pointer-events-none select-none z-0"
          style={{ maxHeight: 180 }}
          draggable={false}
        />

        {/* Le contenu du titre, avec z-10 */}
        <div className="relative z-10">
          <motion.div
            className="flex gap-12 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="font-nickel"
              variants={textAnimations.slideIn.container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Votre concert
            </motion.span>
          </motion.div>
          <motion.div
            className="flex gap-8 justify-between items-center font-nickel"
            variants={textAnimations.paragraph.container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span
              className="lg:shrink-0 lg:whitespace-nowrap"
              variants={textAnimations.paragraph.item}
            >
              NOTRE SCÈNE
            </motion.span>

            <motion.h1
              className="text-base lg:text-end max-w-[500px] shrink normal-case font-normal hidden lg:block font-apotek-medium text-xl"
              variants={textAnimations.paragraph.item}
            >
              Plongez dans l'expérience immersive d'un concert virtuel, où vous pouvez vous promener, interagir et vivre le concert comme si vous y étiez réellement.
            </motion.h1>
          </motion.div>
          <motion.div
            className="lg:text-center font-nickel"
            variants={textAnimations.clipReveal.container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            VIRTUELLE
          </motion.div>

          <motion.h1
            className="text-base lg:text-end max-w-[500px] shrink normal-case font-normal block lg:hidden"
            variants={textAnimations.paragraph.item}
          >
            Plongez dans l'expérience immersive d'un concert virtuel, où vous pouvez vous promener, interagir et vivre le concert comme si vous y étiez réellement.
          </motion.h1>
        </div>
      </div>

      {/* Section d'accès à l'expérience (reste du code) */}
      <section className="relative z-10 mt-12 p-2 flex flex-col gap-4 max-w-[2400px] mx-auto border border-white" aria-label="Accès à l'expérience Connect Stage">
        <motion.div
          className="mt-12 p-2 flex flex-col gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-between uppercase font-medium tracking-wide font-apotek-regular">
            <motion.div
              className="flex gap-2 items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="bg-[#28927C] rounded-full size-4 text-lg"></span>
              ACTUELLEMENT EN LIGNE
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              [DÉFILER]
            </motion.div>
          </div>
          <motion.img
            src="/pictures/overview.webp"
            alt="Expérience de concert virtuel immersif Connect Stage"
            className="w-full aspect-square lg:aspect-auto lg:h-[500px] lg:w-[1200px] object-cover"
            loading="eager"
            width="1200"
            height="350"
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          />
          <motion.div
            className="flex items-center justify-center gap-4 flex-col lg:flex-row"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="/experience"
              className="hover:underline py-1 px-16 bg-white text-black flex items-center gap-2 font-apotek-regular text-lg lg:text-2xl"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              aria-label="Commencer l'expérience Connect Stage"
            >
              C'est parti
              <ArrowRight className="size-4" aria-hidden="true" />
            </motion.a>
            <motion.a
              href="/about"
              className="hover:underline py-1 px-16 border border-white flex items-center gap-2 font-apotek-regular text-lg lg:text-2xl"
              aria-label="En savoir plus sur Connect Stage"
            >
              En savoir plus
            </motion.a>
          </motion.div>
          <motion.div
            className="text-sm uppercase font-medium tracking-wide flex justify-center"
            variants={textAnimations.fadeIn.container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="mx-8 lg:mx-0 lg:w-1/3 text-center font-apotek-regular text-lg">
              Connect Stage vous offre une expérience immersive unique pour vivre les concerts à domicile.
            </span>
          </motion.div>
        </motion.div>
      </section>
    </header>
  )
}

import { ArrowRight } from "lucide-react";
import { motion } from 'framer-motion'
import { textAnimations } from '../animations/textAnimations'

export const Header = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex h-[170px] text-[#979797] tracking-tighter font-bold">
        <motion.h1
          variants={textAnimations.reveal.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Stage connect is a software
        </motion.h1>
      </div>
      <div className="flex flex-col text-[140px] uppercase font-medium [&>div]:-mt-12">
        <motion.div
          className="flex gap-12 items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            initial={{ rotate: -90, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <mask
              id="mask0_55_36"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="120"
              height="120"
            >
              <path d="M120 0H0V120H120V0Z" fill="white" />
            </mask>
            <g mask="url(#mask0_55_36)">
              <path
                d="M53.9591 3.67718C56.4941 -1.22573 63.5058 -1.22573 66.0408 3.67718L82.1838 34.8986C82.8306 36.1498 83.85 37.1692 85.1016 37.8161L116.323 53.9591C121.226 56.4941 121.226 63.5058 116.323 66.0408L85.1016 82.1838C83.85 82.8306 82.8306 83.85 82.1838 85.1016L66.0408 116.323C63.5058 121.226 56.4941 121.226 53.9591 116.323L37.8161 85.1016C37.1692 83.85 36.1498 82.8306 34.8986 82.1838L3.67718 66.0408C-1.22573 63.5058 -1.22573 56.4941 3.67718 53.9591L34.8986 37.8161C36.1498 37.1692 37.1692 36.1498 37.8161 34.8986L53.9591 3.67718Z"
                fill="#28927C"
              />
            </g>
          </motion.svg>
          <motion.span
            variants={textAnimations.slideIn.container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Your art
          </motion.span>
        </motion.div>
        <motion.div
          className="flex gap-8 justify-between items-center"
          variants={textAnimations.paragraph.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p
            className="text-base text-end max-w-[500px] shrink normal-case font-normal"
            variants={textAnimations.paragraph.item}
          >
            Stage Connect® Elsass ipsum Racing. aliquam Gal. schneck Pfourtz !
            geïz knepfle turpis so semper sed morbi hop Oberschaeffolsheim tchao
            bissame DNA.
          </motion.p>
          <motion.span
            className="shrink-0 whitespace-nowrap"
            variants={textAnimations.paragraph.item}
          >
            OUR STAGE,
          </motion.span>
        </motion.div>
        <motion.div
          className="text-center"
          variants={textAnimations.clipReveal.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          3D experience™
        </motion.div>
      </div>
      <motion.div
        className="mt-12 bg-[#86182F] p-2 flex flex-col gap-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="flex justify-between uppercase font-medium tracking-wide">
          <motion.div
            className="flex gap-2 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="bg-[#28927C] rounded-full size-4"></span>
            CURRENTLY ONLINE
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            [SCROLL]
          </motion.div>
        </div>
        <motion.img
          src="/header-image.jpg"
          alt="Stage Connect Header"
          className="w-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        />
        <motion.div
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="/experience"
            className="hover:underline py-1 px-16 bg-white text-black flex items-center gap-2"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
          >
            C'est parti
            <ArrowRight className="size-4" />
          </motion.a>
          <motion.a
            href="/about"
            className="hover:underline py-1 px-16 border border-white flex items-center gap-2"
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
          <span className="w-1/3 text-center">
            Stage Connect® Elsass ipsum Racing. aliquam Gal. schneck Pfourtz !
            geïz knepfle turpis.
          </span>
        </motion.div>
      </motion.div>
    </div>
  )
}

import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { textAnimations } from '../animations/textAnimations'

export const AboutUs = () => {
  return (
    <div className="my-[260px] grid grid-cols-2 gap-4">
      <motion.h2
        className="font-bold text-xl"
        variants={textAnimations.reveal.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        A little more about us
      </motion.h2>
      <article className="flex flex-col gap-6">
        <motion.h3
          className="font-bold text-4xl"
          variants={textAnimations.slideIn.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Space connect® météor sit leo Hans geïz Spätzle™
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
            Lorem Elsass ipsum knack schneck libero. Carola Racing. non tellus
            Mauris knepfle libero, Salut bisamme id ac senectus flammekueche
            leverwurscht Heineken Pellentesque elit tchao bissame sed Chulien
            eleifend so auctor, in, nullam Pfourtz ! risus, salu wie turpis, id,
            gal hopla dui gewurztraminer et rucksack Gal. mollis nüdle ch'ai
            suspendisse hopla condimentum eget bredele placerat Yo dû. rhoncus
            pellentesque Chulia Roberstau hoplageiss ftomi! und commodo wurscht
            dolor Salu bissame tristique Verdammi amet
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
          See the experience
        <h3 className="font-bold text-4xl">Space connect® météor  sit leo Hans geïz Spätzle™</h3>
        <p className="leading-7">
          Lorem Elsass ipsum knack schneck libero. Carola Racing. non tellus Mauris knepfle libero, Salut bisamme id ac senectus flammekueche leverwurscht Heineken Pellentesque elit tchao bissame sed Chulien eleifend so auctor, in, nullam Pfourtz ! risus, salu wie turpis, id, gal hopla dui gewurztraminer et rucksack Gal. mollis nüdle ch'ai suspendisse hopla condimentum eget bredele placerat Yo dû. rhoncus pellentesque Chulia Roberstau hoplageiss ftomi! und commodo wurscht dolor Salu bissame tristique Verdammi amet
        </p>
        <a href="/about" className="hover:underline flex items-center gap-2 ">
          More about us
          <ArrowRight className="size-4" />
        </motion.a>
      </article>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Lorem ipsum dolor sit amet.
      </motion.div>
    </div>
  )
}

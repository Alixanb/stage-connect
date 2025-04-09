import { ArrowRight } from "lucide-react";

export const AboutUs = () => {
  return (
    <div className="my-[260px] grid grid-cols-2 gap-4">
      <h2 className="font-bold text-xl">A little more about us</h2>
      <article className="flex flex-col gap-6">
        <h3 className="font-bold text-4xl">Space connect® météor  sit leo Hans geïz Spätzle™</h3>
        <p className="leading-7">
          Lorem Elsass ipsum knack schneck libero. Carola Racing. non tellus Mauris knepfle libero, Salut bisamme id ac senectus flammekueche leverwurscht Heineken Pellentesque elit tchao bissame sed Chulien eleifend so auctor, in, nullam Pfourtz ! risus, salu wie turpis, id, gal hopla dui gewurztraminer et rucksack Gal. mollis nüdle ch'ai suspendisse hopla condimentum eget bredele placerat Yo dû. rhoncus pellentesque Chulia Roberstau hoplageiss ftomi! und commodo wurscht dolor Salu bissame tristique Verdammi amet
        </p>
        <a href="/about" className="hover:underline flex items-center gap-2 ">
          More about us
          <ArrowRight className="size-4" />
        </a>
      </article>
      <div>Lorem ipsum dolor sit amet.</div>
    </div>
  );
};
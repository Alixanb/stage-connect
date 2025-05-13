import { Helmet } from "react-helmet";
import Layout from "../components/Layout";

export default function AboutUs() {
  return (
    <Layout>
      <Helmet>
        <title>À propos de Connect Stage - Concerts virtuels en 3D immersifs</title>
        <meta name="description" content="Découvrez Connect Stage, une plateforme qui vous offre la possibilité d'assister à des concerts virtuels immersifs en 3D sans quitter votre domicile." />
        <meta name="keywords" content="Connect Stage, concert virtuel, expérience immersive, 3D, artistes, technologie" />
        <link rel="canonical" href="https://connect-stage.com/about" />
      </Helmet>
      <div className="bg-black text-white">
        {/* Header */}
        <section className="py-8 px-6 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 text-center md:text-left">
          <h1 className="text-6xl md:text-7xl font-black tracking-wide font-nickel z-1">À PROPOS</h1>
          <img
            src="/pictures/medium_wave_1.png"
            alt=""
            className="absolute left-0 top-20 max-w-full w-auto md:w-full pointer-events-none select-none z-0"
            style={{ maxHeight: 180, transform: "scaleX(-1)" }}
            draggable={false}
          />
        </section>

        <section className="bg-black text-white py-20 px-4 md:px-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Colonne gauche */}
            <div className="h-full">
              <p className="text-lg font-medium text-white/60 mb-4 font-apotek-regular">Pourquoi nous choisir</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight font-nickel">
                Immersion totale <br /> dans l'expérience concert
              </h2>
              <p className="text-white/70 text-base md:text-xl mb-6 max-w-xl font-apotek-regular">
                Connect Stage vous offre la possibilité d'assister à un concert sans quitter votre domicile, tout en ayant l'impression d'y être réellement. Notre plateforme vous permet d'explorer librement une salle de concert virtuelle, où vous pouvez vous promener, interagir et vivre le concert comme si vous étiez au cœur de l'événement.
              </p>
              <p className="text-white/70 text-base md:text-xl mb-6 max-w-xl font-apotek-regular">
                Que vous soyez dans l'impossibilité de vous rendre à un concert à cause de problèmes de mobilité, de santé ou de phobie de la foule, ou que vous soyez simplement éloigné géographiquement, Connect Stage vous permet de vivre pleinement l'expérience concert depuis n'importe où.
              </p>
              <p className="text-white/70 text-base md:text-xl mb-6 max-w-xl font-apotek-regular">
                Les artistes peuvent ainsi se produire en ligne dans un environnement virtuel réaliste, atteignant un public mondial, tout en augmentant la visibilité de leur merchandising grâce à des liens directs vers leurs boutiques en ligne.
              </p>
              <div className="max-w-7xl mx-auto mt-6 text-secondary text-sm md:text-base">
                <a href="/experience" className="underline mt-2 inline-block text-secondary font-apotek-medium text-lg" aria-label="Découvrir l'expérience Connect Stage">
                  Découvrir l'expérience
                </a>
              </div>
            </div>

            {/* Colonne droite */}
            <div className="relative">
              <div className="overflow-hidden rounded-xl shadow-lg">
                <img
                  src="pictures/stage.png"
                  alt="Scène virtuelle de concert Connect Stage"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  width="800"
                  height="600"
                />
              </div>

              {/* Badge + texte par-dessus l'image */}
              <div className="absolute bottom-0 left-0 w-full bg-[#000000] border border-white text-white px-4 py-3 rounded-b-xl">
                <p className="text-lg font-semibold font-nickel">Expérience 3D</p>
                <p className="text-lg font-apotek-medium">
                  Avec Connect Stage, l'immersion dans un concert devient accessible à tous, où que vous soyez et quand vous le souhaitez.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Partners */}
        <img
          src="/pictures/big_wave_2.png"
          alt=""
          className="w-full pointer-events-none select-none z-0"
          style={{ maxHeight: 180 }}
          draggable={false}
        />
        <section className="px-6 pb-12" aria-labelledby="partners-section">
<<<<<<< HEAD
          <h2 id="partners-section" className="text-8xl tracking-tight font-nickel">ARTISTES PARTENAIRES</h2>
          <div className="flex justify-between">
            <p className="mt-2 text-lg text-gray-400 font-apotek-medium">
              Découvrez les artistes avec qui nous avons développé leur propre scène virtuelle
            </p>
            <p className="text-8xl tracking-tight font-nickel uppercase">
=======
          <h2 id="partners-section" className="lg:text-8xl text-4xl tracking-tight font-nickel">ARTISTES PARTENAIRES</h2>
        <div className="flex lg:justify-between">
          <p className="mt-2 text-lg text-gray-400 font-apotek-medium">
            Découvrez les artistes avec qui nous avons développé leur propre scène virtuelle
          </p>
          <p className="lg:text-8xl text-4xl tracking-tight font-nickel uppercase">
>>>>>>> refs/remotes/origin/main
            Collaborations
          </p>
        </div>

        {/* Avatars */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <a href="/artist" ><img src="/pictures/caroussel_1.webp" alt="Artiste partenaire 1" className="w-full h-auto rounded-lg shadow-md" loading="lazy" width="300" height="300" /></a>
          <img src="/pictures/caroussel_2.webp" alt="Artiste partenaire 2" className="w-full h-auto rounded-lg shadow-md" loading="lazy" width="300" height="300" />
          <img src="/pictures/caroussel_2.webp" alt="Artiste partenaire 3" className="w-full h-auto rounded-lg shadow-md" loading="lazy" width="300" height="300" />
          <img src="/pictures/caroussel_2.webp" alt="Artiste partenaire 4" className="w-full h-auto rounded-lg shadow-md" loading="lazy" width="300" height="300" />

        </div>
      </section>
    </div>
    </Layout >
  );
}
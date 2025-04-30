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
        <section className="bg-[#B01E3B] py-8 px-6 flex items-center gap-6 md:gap-8">
          <svg width="160" height="160" viewBox="0 0 140 141" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M69.9996 108.214C98.8029 108.214 123.796 89.7782 136.239 78.6713C141.252 74.1962 141.252 66.7181 136.239 62.243C123.796 51.1362 98.8029 32.7002 69.9996 32.7002C41.1961 32.7002 16.2035 51.1362 3.76014 62.2431C-1.25338 66.7181 -1.25338 74.1962 3.76015 78.6713C16.2035 89.7782 41.1961 108.214 69.9996 108.214ZM69.9996 96.7992C84.5481 96.7992 96.3417 85.0056 96.3417 70.457C96.3417 55.9088 84.5481 44.115 69.9996 44.115C55.4513 44.115 43.6576 55.9088 43.6576 70.457C43.6576 85.0056 55.4513 96.7992 69.9996 96.7992Z"
              fill="#28927C"
            />
          </svg>
          <h1 className="text-5xl md:text-6xl font-black tracking-wide font-nickel">À PROPOS</h1>
          <p className="ml-auto text-lg md:text-xl max-w-xs md:max-w-sm text-right leading-tight font-apotek-medium">
            Connect Stage est une plateforme immersive pour vivre des concerts virtuels en 3D.
          </p>
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
                  src="src/assets/stage.png"
                  alt="Scène virtuelle de concert Connect Stage"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  width="800"
                  height="600"
                />
              </div>

              {/* Badge + texte par-dessus l'image */}
              <div className="absolute bottom-0 left-0 w-full bg-[#b11f30] text-white px-4 py-3 rounded-b-xl">
                <p className="text-lg font-semibold font-nickel">Expérience 3D</p>
                <p className="text-lg font-apotek-medium">
                  Avec Connect Stage, l'immersion dans un concert devient accessible à tous, où que vous soyez et quand vous le souhaitez.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="px-6 py-12" aria-labelledby="partners-section">
          <h2 id="partners-section" className="text-8xl tracking-tight font-nickel">ARTISTES PARTENAIRES</h2>
          <div className="flex justify-between">
            <p className="mt-2 text-lg text-gray-400 font-apotek-medium">
              Découvrez les artistes avec qui nous avons développé leur propre scène virtuelle
            </p>
            <svg width="100" height="101" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <g clipPath="url(#clip0_82_119)">
                <mask id="mask0_82_119" maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="101">
                  <path d="M100 0.5H0V100.5H100V0.5Z" fill="white" />
                </mask>
                <g mask="url(#mask0_82_119)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M50 17.3225C46.3869 17.3225 43.458 20.2514 43.458 23.8645H26.6355C26.6355 10.9607 37.0961 0.5 50 0.5C62.904 0.5 73.3645 10.9607 73.3645 23.8645C73.3645 36.7683 62.904 47.229 50 47.229V30.4065C53.613 30.4065 56.542 27.4776 56.542 23.8645C56.542 20.2514 53.613 17.3225 50 17.3225ZM83.1775 50.5C83.1775 46.8869 80.2485 43.958 76.6355 43.958V27.1355C89.5395 27.1355 100 37.5961 100 50.5C100 63.404 89.5395 73.8645 76.6355 73.8645C63.7315 73.8645 53.271 63.404 53.271 50.5H70.0935C70.0935 54.113 73.0225 57.042 76.6355 57.042C80.2485 57.042 83.1775 54.113 83.1775 50.5ZM23.3645 57.042C19.7514 57.042 16.8225 54.113 16.8225 50.5C16.8225 46.8869 19.7514 43.958 23.3645 43.958C26.9776 43.958 29.9065 46.8869 29.9065 50.5H46.729C46.729 37.5961 36.2683 27.1355 23.3645 27.1355C10.4607 27.1355 0 37.5961 0 50.5C0 63.404 10.4607 73.8645 23.3645 73.8645V57.042ZM50 83.6775C53.613 83.6775 56.542 80.7485 56.542 77.1355H73.3645C73.3645 90.0395 62.904 100.5 50 100.5C37.0961 100.5 26.6355 90.0395 26.6355 77.1355C26.6355 64.2315 37.0961 53.771 50 53.771V70.5935C46.3869 70.5935 43.458 73.5225 43.458 77.1355C43.458 80.7485 46.3869 83.6775 50 83.6775Z" fill="#28927C" />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_82_119">
                  <rect width="100" height="100" fill="white" transform="translate(0 0.5)" />
                </clipPath>
              </defs>
            </svg>
            <p className="text-8xl tracking-tight font-nickel">
              COLLABORATIONS
            </p>
          </div>

          {/* Avatars */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src="src/assets/artist.png" alt="Artiste partenaire 1" className="w-full h-auto rounded-lg shadow-md" loading="lazy" width="300" height="300" />
            <img src="src/assets/artist.png" alt="Artiste partenaire 2" className="w-full h-auto rounded-lg shadow-md" loading="lazy" width="300" height="300" />
            <img src="src/assets/artist.png" alt="Artiste partenaire 3" className="w-full h-auto rounded-lg shadow-md" loading="lazy" width="300" height="300" />
            <img src="src/assets/artist.png" alt="Artiste partenaire 4" className="w-full h-auto rounded-lg shadow-md" loading="lazy" width="300" height="300" />
          </div>
        </section>
      </div>
    </Layout>
  );
}
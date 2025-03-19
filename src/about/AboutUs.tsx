export default function AboutUs() {
  return (
    <div className="bg-black text-white">
      {/* Header */}
      <div className="bg-[#B01E3B] py-8 px-6 flex items-center gap-6 md:gap-8">
        <svg width="160" height="160" viewBox="0 0 140 141" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M69.9996 108.214C98.8029 108.214 123.796 89.7782 136.239 78.6713C141.252 74.1962 141.252 66.7181 136.239 62.243C123.796 51.1362 98.8029 32.7002 69.9996 32.7002C41.1961 32.7002 16.2035 51.1362 3.76014 62.2431C-1.25338 66.7181 -1.25338 74.1962 3.76015 78.6713C16.2035 89.7782 41.1961 108.214 69.9996 108.214ZM69.9996 96.7992C84.5481 96.7992 96.3417 85.0056 96.3417 70.457C96.3417 55.9088 84.5481 44.115 69.9996 44.115C55.4513 44.115 43.6576 55.9088 43.6576 70.457C43.6576 85.0056 55.4513 96.7992 69.9996 96.7992Z"
            fill="#28927C"
          />
        </svg>
        <h1 className="text-5xl md:text-6xl font-black tracking-wide">ABOUT US</h1>
        <p className="ml-auto text-xs md:text-sm max-w-xs md:max-w-sm text-right leading-tight">
          Stage Connect® is a SaaS for staging. Albums, Q&A, showcase products, deep immersive tunnels.
        </p>
      </div>

<section className="bg-black text-white py-20 px-4 md:px-10">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    
    {/* Colonne gauche */}
    <div className="h-full">
      <p className="text-sm font-medium text-white/60 mb-4">Why choose us</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
        Space connect® météor sit leo <br /> Hans geiß Spätzle™
      </h2>
      <p className="text-white/70 text-base mb-6 max-w-xl">
        Lorem Bisses ipsum knack schnecke libero. Carola Racing non tellus Maults
        knöpfle libero. Sauß bissame id ac senectus flammkueche leberwurscht
        Heineken Pellentesque elit...
      </p>
      <p className="text-white/70 text-base mb-6 max-w-xl">
        Lorem Bisses ipsum knack schnecke libero. Carola Racing non tellus Maults
        knöpfle libero. Sauß bissame id ac senectus flammkueche leberwurscht
        Heineken Pellentesque elit...
      </p>
      <p className="text-white/70 text-base mb-6 max-w-xl">
        Lorem Bisses ipsum knack schnecke libero. Carola Racing non tellus Maults
        knöpfle libero. Sauß bissame id ac senectus flammkueche leberwurscht
        Heineken Pellentesque elit...
      </p>
    </div>

    {/* Colonne droite */}
    <div className="relative">
      <div className="overflow-hidden rounded-xl shadow-lg">
        <img
          src="src/assets/stage.png"
          alt="Virtual stage"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Badge + texte par-dessus l'image */}
      <div className="absolute bottom-0 left-0 w-full bg-[#b11f30] text-white px-4 py-3 rounded-b-xl">
        <p className="text-sm font-semibold">Early stage</p>
        <p className="text-sm">
          Sauß bissame id ac senectus flammkueche leberwurscht Heineken Pellentesque elit
        </p>
      </div>
    </div>
  </div>

  {/* Texte sous image */}
  <div className="max-w-7xl mx-auto mt-6 text-white/70 text-sm md:text-base">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum id felis...
    </p>
    <a href="#" className="text-sky-300 underline mt-2 inline-block">
      Learn more about us
    </a>
  </div>
</section>

      {/* Partners */}
      <div className="px-6 py-12 text-center">
        <h2 className="text-4xl font-black tracking-tight">WE LOVED TO WORK</h2>
        <p className="mt-2 text-sm text-gray-400">
          Here is the artists we worked with to develop their own online stage
        </p>
        <div className="flex justify-center items-center gap-2 my-4">
          <span className="text-2xl">🔁</span>
          <span className="text-4xl font-black text-[#B01E3B]">WITH THEM</span>
        </div>

        {/* Avatars */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src="src/assets/artist.png" alt="Artist 1" className="w-full h-auto rounded-lg shadow-md" />
          <img src="src/assets/artist.png" alt="Artist 2" className="w-full h-auto rounded-lg shadow-md" />
          <img src="src/assets/artist.png" alt="Artist 3" className="w-full h-auto rounded-lg shadow-md" />
          <img src="src/assets/artist.png" alt="Artist 4" className="w-full h-auto rounded-lg shadow-md" />
        </div>
      </div>
    </div>
  );
  
}
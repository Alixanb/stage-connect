import React from "react";

const ThePerformer: React.FC = () => {
  return (
    <section>
      <div className="">
        <h1 className="text-6xl font-bold">THE PERFORMER</h1>
        <p className="mt-2 border-t border-gray-500 pt-2">
          Lorem Elsass ipsum knack schneck libero. Carola Racing. non tellus Mauris
        </p>
      </div>
      <div className="mt-8 grid md:grid-cols-2 gap-8 items-center">
        <img
          src="src/assets/city-skyline.png"
          alt="City Skyline"
          className="rounded-lg shadow-lg w-full h-auto"
        />
        <div>
          <h2 className="text-2xl font-bold">Lorem Elsass ipsum knack.</h2>
          <p className="mt-4 text-gray-300">
            Lorem Elsass ipsum knack schneck libero. Carola Racing. non tellus Mauris knepfle libero,
            Salut bisamme id ac senectus flammekueche leverwurscht Heineken Pellentesque elit tchao bissame
            sed Chulien eleifend so auctor, in, nullam Pfourtz ! risus, salu wie turpis.
          </p>
          <a
            href="https://spotify.com"
            className="mt-4 inline-block text-blue-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            See on Spotify ↗
          </a>
        </div>
      </div>
    </section>
  );
};

export default ThePerformer;

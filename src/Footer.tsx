import background from '/pictures/bg_footer.png'
import deezer from '/pictures/deezer.svg'
import facebook from '/pictures/facebook.svg'
import insta from '/pictures/insta.svg'
import logo from '/pictures/logo_footer.svg'
import soundcloud from '/pictures/soundcloud.svg'
import spotify from '/pictures/spotify.svg'

const Footer: React.FC = () => {
  return (
    <footer
      className="bg-black max-h-[800px] relative overflow-hidden hidden lg:block mt-40"
      aria-label="Pied de page"
    >
      <img
        src={background}
        alt="Arrière-plan du footer Connect Stage"
        className="w-full h-full object-cover bg-center"
        loading="lazy"
        width="1920"
        height="800"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-between">
        <div className="max-w-screen mx-auto">
          <div className="mt-24 flex justify-center">
            <img src={logo} alt="Logo Connect Stage" width={150} height={50} />
          </div>
          <h2 className="text-white text-5xl my-20 font-nickel">
            Ta salle de concert virtuelle
          </h2>
          <div className="flex justify-center">
            <a
              href="/contact"
              className="text-black bg-white text-2xl py-4 px-24 rounded-full font-apotek-medium"
              aria-label="Nous contacter"
            >
              Nous contacter
            </a>
          </div>
          <nav aria-label="Navigation du pied de page">
            <ul className="flex items-center justify-center gap-12 text-base text-white mt-20 font-nickel">
              <li>
                <a href="/experience" aria-label="Expérience" className='hover:underline '>
                  Expérience
                </a>
              </li>
              <li>
                <a href="/about" aria-label="À propos de nous" className='hover:underline '>
                  À propos
                </a>
              </li>
              <li>
                <a href="/contact" aria-label="Contact" className='hover:underline '>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mt-auto flex justify-between w-full px-20 py-8 border-t border-white/20">
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/share/19ExbnA4Uf/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <img src={facebook} alt="Facebook" height={12} width={12} />
            </a>
            <a
              href="https://www.instagram.com/connect.stage/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img src={insta} alt="Instagram" width={20} height={20} />
            </a>

            <a
              href="https://open.spotify.com/artist/4JS2lTQZgzfanDQj7Yfrkq?si=v7uhOc9rRnGLYjQsiRqBSw"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Spotify"
            >
              <img src={spotify} alt="Instagram" width={20} height={20} />
            </a>

            <a
              href="https://dzr.page.link/Ld67Wa7m7GivY2dE6"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Deezer"
            >
              <img src={soundcloud} alt="Instagram" width={20} height={20} />
            </a>

            <a
              href="https://m.soundcloud.com/baptippo?utm_source=direct&utm_content=download_button_header&utm_medium=mobi&utm_campaign=no_campaign"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="SoundCloud"
            >
              <img src={deezer} alt="Instagram" width={20} height={20} />
            </a>
          </div >
          <p className="text-white/50 text-lg font-apotek-regular">
            © 2025 Connect Stage. Tous droits réservés.
          </p>
        </div >
      </div >
    </footer >
  )
}

export default Footer

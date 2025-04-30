import background from './assets/bg_footer.png'
import facebook from './assets/facebook.svg'
import insta from './assets/insta.svg'
import linkedin from './assets/linkedin.svg'
import logo from './assets/logo_footer.svg'
import x from './assets/x.svg'

const Footer: React.FC = () => {
  return (
    <footer className="bg-black max-h-[800px] relative overflow-hidden hidden lg:block" aria-label="Pied de page">
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
          <h2 className="text-white text-5xl my-20">Votre Concert, Notre Scène</h2>
          <div className="flex justify-center">
            <a
              href="/contact"
              className="text-black bg-white text-xl py-4 px-24 rounded-full"
              aria-label="Nous contacter"
            >
              Nous contacter
            </a>
          </div>
          <nav aria-label="Navigation du pied de page">
            <ul className="flex items-center gap-12 text-base text-white mt-20">
              <li><a href="/about" aria-label="À propos de l'entreprise">L'entreprise</a></li>
              <li><a href="/about#vision" aria-label="Notre vision">Vision</a></li>
              <li><a href="/about" aria-label="À propos de nous">À propos</a></li>
              <li><a href="/about#carrieres" aria-label="Nos offres d'emploi">Carrières</a></li>
              <li><a href="/blog" aria-label="Actualités et blog">Actualités</a></li>
            </ul>
          </nav>
        </div>
        <div className="mt-auto flex justify-between w-full px-20 py-8 border-t border-white/20">
          <div className="flex items-center gap-4">
            <a href="https://facebook.com/connectstage" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <img src={facebook} alt="Facebook" height={20} width={20} />
            </a>
            <a href="https://instagram.com/connectstage" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src={insta} alt="Instagram" width={20} height={20} />
            </a>
            <a href="https://twitter.com/connectstage" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <img src={x} alt="Twitter" width={20} height={20} />
            </a>
            <a href="https://linkedin.com/company/connectstage" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <img src={linkedin} alt="LinkedIn" width={20} height={20} />
            </a>
          </div>
          <p className="text-white/50 text-sm">
            © 2025 Connect Stage. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

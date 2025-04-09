import background from './assets/bg_footer.png'
import logo from './assets/logo_footer.svg'
import facebook from './assets/facebook.svg'
import insta from './assets/insta.svg'
import x from './assets/x.svg'
import linkedin from './assets/linkedin.svg'

const Footer: React.FC = () => {
  return (
    <footer className="bg-black max-h-[800px] relative overflow-hidden">
      <img
        src={background}
        alt="background"
        className="w-full h-full object-cover bg-center"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-between">
        <div>
          <div className="mt-24 flex justify-center">
            <img src={logo} alt="logo" width={150} height={50} />
          </div>
          <h1 className="text-white text-5xl my-20">Your Art, Our Stage</h1>
          <div className="flex justify-center">
            <a
              href="/contact"
              className="text-black bg-white text-xl py-4 px-24 rounded-full"
            >
              Nous contacter
            </a>
          </div>
          <div className="flex items-center gap-12 text-base text-white mt-20">
            <p>L’entreprise</p>
            <p>Vision</p>
            <p>A propos</p>
            <p>Carrière</p>
            <p>Actualité</p>
          </div>
        </div>
        <div className="mt-auto flex justify-between w-full px-20 py-8 border-t border-white/20">
          <div className="flex items-center gap-4">
            <img src={facebook} alt="facebook" height={20} />
            <img src={insta} alt="insta" width={20} height={20} />
            <img src={x} alt="x" width={20} height={20} />
            <img src={linkedin} alt="linkedin" width={20} height={20} />
          </div>
          <p className="text-white/50 text-sm">
            © 2025 Your Art, Our Stage. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

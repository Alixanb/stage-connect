import artist from '@p/pictures/artist.png'
import deco_artist from '@p/pictures/deco_artist.png'
import deco_logo from '@p/pictures/deco_logo.svg'
import Layout from '../components/Layout'

export default function Artist() {
  return (
    <Layout>
      <div className="bg-black flex flex-col lg:flex-row items-center p-6 lg:p-30 relative overflow-hidden">
        <div className="absolute top-0 left-0 size-full translate-y-[-50%] translate-x-[-10%] z-1">
          <img
            src={deco_logo}
            alt="Deco logo"
            className="size-full object-cover rotate-200"
          />
        </div>
        <div className="w-full lg:w-1/2 font-bold z-10">
          <h1 className="text-white text-5xl lg:text-8xl uppercase font-nickel">
            Charmendo
          </h1>
          <p className="text-2xl lg:text-6xl uppercase mt-4 font-apotek-medium">
            En concert
            <br />
            le 14/05
          </p>
          <p className="text-white text-2xl lg:text-6xl font-apotek-medium">
            Hardstyle / techno
          </p>
          <p className="text-white text-xl lg:text-2xl mt-4 font-apotek-regular">
            Baptiste Sabatier, plus connu sous le nom de Charmendo, est un DJ
            etproducteur de Hardstyle depuis l’âge de 18 ans.
            <br />
            Originaire d’Alsace, il découvre le Hardstyle et la techno
            underground durant ses années de lycée, ce qui l’amène à produire
            ses propres morceaux sur FL Studio. C’est en 2021 que le projet
            prend réellement son envol, avec des sorties en indépendant sur les
            plateformes de streaming, lui permettant de se constituer
            progressivement un public fidèle.
            <br />
            Avec un mélange de kicks déjantés, de mélodies euphorisantes et de
            sonorités hautes en couleur, il s’attache à repousser sans cesse les
            frontières du genre. Parmi ses titres emblématiques, on retrouve
            Feel My Love, Leaving U Behind avec Dtailz, ou encore F.D.T en
            collaboration avec Explor8, témoignant d’un style bien affirmé et
            résolument unique.
          </p>
        </div>
        <div className="w-auto h-full min-w-[600px] max-h-[800px] overflow-hidden aspect-[943/1674] ml-auto">
          <img src={artist} alt="Artist" className="size-full object-cover" />
        </div>
        <div className="absolute bottom-0 right-0 z-2 lg:translate-y-[-60%] lg:translate-x-[-50%]">
          <img
            src={deco_artist}
            alt="Deco artist"
            className="size-full object-cover"
          />
        </div>
        <div className="absolute bottom-0 left-0 size-full translate-y-[40%] lg:translate-y-[30%] translate-x-[10%] lg:translate-x-[30%] z-1">
          <img
            src={deco_logo}
            alt="Deco logo"
            className="size-full object-cover"
          />
        </div>
      </div>
    </Layout>
  )
}

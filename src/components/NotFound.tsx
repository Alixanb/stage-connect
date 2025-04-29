import { ArrowLeft } from 'lucide-react';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Layout from './Layout';

const NotFound: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>Page non trouvée | Connect Stage</title>
        <meta name="description" content="La page que vous recherchez n'existe pas. Revenez à la page d'accueil pour découvrir nos concerts virtuels immersifs en 3D." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-6xl lg:text-8xl font-bold mb-6">404</h1>
        <p className="text-2xl lg:text-3xl font-medium mb-8">Page non trouvée</p>
        <p className="text-lg lg:text-xl text-gray-400 max-w-xl mb-12">
          La page que vous recherchez n'existe pas ou a été déplacée. Revenez à la page d'accueil pour explorer nos expériences immersives.
        </p>
        <Link
          to="/"
          className="flex items-center gap-2 bg-[#86182F] text-white py-3 px-8 rounded-lg hover:bg-[#6d1427] transition-colors"
          aria-label="Retour à l'accueil"
        >
          <ArrowLeft size={18} aria-hidden="true" />
          Retour à l'accueil
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound; 
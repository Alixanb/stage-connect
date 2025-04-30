import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./about/AboutUs";
import NotFound from "./components/NotFound";
import Contact from "./contact/Contact";
import ExperiencePage from "./experience/page";
import Home from "./hompage/Home";
import "./index.css";

// Déclaration pour TypeScript
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, unknown>) => void;
  }
}

export default function App() {
  // Fonction pour envoyer les événements de navigation à Google Analytics (si configuré)
  useEffect(() => {
    const handleRouteChange = () => {
      // Si Google Analytics est configuré, envoi des données de page
      if (typeof window.gtag === 'function') {
        window.gtag('config', 'G-XXXXXXXXXX', {
          page_path: window.location.pathname + window.location.search
        });
      }
    };

    // Écoute les changements d'URL
    window.addEventListener('popstate', handleRouteChange);

    // Nettoyage
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

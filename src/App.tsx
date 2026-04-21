import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import WhyUsSection from './components/WhyUsSection';
import CoverageSection from './components/CoverageSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactFooterSection from './components/ContactFooterSection';
import { Phone, MessageCircle } from 'lucide-react';

import Privacidad from './pages/Privacidad';
import AvisoLegal from './pages/AvisoLegal';
import Cookies from './pages/Cookies';

// Component to handle scrolling to hash links since React Router intercepts it sometimes
function ScrollToTopAndHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function Landing() {
  return (
    <>
      <main role="main">
        <HeroSection />
        <ServicesSection />
        <WhyUsSection />
        <CoverageSection />
        <TestimonialsSection />
        <ContactFooterSection />
      </main>

      {/* Floating WhatsApp Bubble - Desktop & Mobile */}
      <a 
        href="https://wa.me/34669881469" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-[0_4px_15px_rgba(34,197,94,0.4)] hover:scale-110 hover:bg-green-400 transition-all hidden md:flex"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </a>

      {/* Mobile Fixed Bottom CTA Bar */}
      <div className="fixed bottom-0 left-0 w-full z-50 p-4 md:hidden bg-gradient-to-t from-[#0A0A0A] to-transparent pb-6">
        <div className="flex gap-2 w-full">
          <a 
            href="tel:+34669881469" 
            className="flex-1 bg-[#FFD700] text-black font-bold h-14 rounded-full flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,215,0,0.3)] animate-[pulse-glow_2s_infinite]"
            aria-label="Llamar urgencia"
          >
            <Phone className="w-5 h-5 animate-bounce" /> Llamar 24H
          </a>
          <a 
            href="https://wa.me/34669881469" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg shrink-0"
            aria-label="Contactar por WhatsApp"
          >
             <MessageCircle className="w-6 h-6" />
          </a>
        </div>
      </div>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTopAndHash />
      <div className="relative w-full bg-[#0A0A0A] overflow-x-hidden pt-14 md:pt-0">
        
        {/* Optional: Simple Header for Mobile Menu */}
        <header className="fixed top-0 left-0 w-full z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-gray-900 md:hidden">
          <div className="flex justify-center items-center h-14">
             <h2 className="font-heading text-xl text-white tracking-widest leading-none">CERRAJERÍA<span className="text-[#FFD700]">MADRID</span>24H</h2>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/privacidad" element={<Privacidad />} />
          <Route path="/aviso-legal" element={<AvisoLegal />} />
          <Route path="/cookies" element={<Cookies />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


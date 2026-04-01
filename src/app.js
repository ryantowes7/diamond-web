import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CorporateStatement from '@/components/CorporateStatement';
import Developments from '@/components/Developments';
import Awards from '@/components/Awards';
import News from '@/components/News';
import Events from '@/components/Events';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import '@/App.css';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-white">
          <Navbar />
          <Hero />
          <CorporateStatement />
          <Developments />
          <Awards />
          <News />
          <Events />
          <Contact />
          <Footer />
          <WhatsAppButton />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
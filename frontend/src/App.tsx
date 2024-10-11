import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Profil from './page/profil';
import Portfolio from './page/portfolio';
import About from './page/about';
import Experience from './page/experience';
import Biodata from './page/biodata';
import Projek from './page/halaman projek';
import Sertifikat from './page/sertifikat';
import Footer from './components/footer';
import FormInput from './page/form input';  // Mengimpor halaman form input
import { useLocation } from 'react-router-dom';

const AppContent: React.FC = () => {
  const profilRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const contactmeRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const scrollToProfil = () => {
    profilRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPortfolio = () => {
    portfolioRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToExperience = () => {
    experienceRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContactMe = () => {
    contactmeRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Menentukan apakah navbar perlu ditampilkan
  const showNavbar = !['/biodata', '/projek', '/sertifikat', '/form-input'].includes(location.pathname);

  return (
    <div>
      {showNavbar && ( // Hanya menampilkan navbar jika bukan di halaman biodata, projek, sertifikat, atau form input
        <Navbar
          scrollToProfil={scrollToProfil}
          scrollToPortfolio={scrollToPortfolio}
          scrollToAbout={scrollToAbout}
          scrollToExperience={scrollToExperience}
          scrollToContactMe={scrollToContactMe}
        />
      )}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div ref={profilRef}>
                <Profil />
              </div>
              <Portfolio ref={portfolioRef} />
              <div ref={aboutRef}>
                <About />
              </div>
              <div ref={experienceRef}>
                <Experience />
              </div>
              <div ref={contactmeRef}>
                <Footer />
              </div>
            </>
          }
        />
        <Route path="/biodata" element={<Biodata />} />
        <Route path="/projek" element={<Projek />} />
        <Route path="/sertifikat" element={<Sertifikat />} />
        <Route path="/form-input" element={<FormInput />} /> {/* Route untuk form input */}
      </Routes>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

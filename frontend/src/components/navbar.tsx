// navbar.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface NavbarProps {
  scrollToProfil: () => void;
  scrollToPortfolio: () => void;
  scrollToAbout: () => void;
  scrollToExperience: () => void;
  scrollToContactMe: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToProfil, scrollToPortfolio, scrollToAbout, scrollToExperience, scrollToContactMe }) => {
  const navigate = useNavigate();

  const handleHomePage = () => {
    navigate('/');
  };

  return (
    <div className="navbar bg-blue-600 text-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl text-white hover:text-gray-200" onClick={handleHomePage}>PAGE</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="hover:text-gray-200" onClick={scrollToProfil}>PROFIL</a>
          </li>
          <li>
            <a className="hover:text-gray-200" onClick={scrollToPortfolio}>PORTFOLIO</a>
          </li>
          <li>
            <a className="hover:text-gray-200" onClick={scrollToAbout}>ABOUT ME</a>
          </li>
          <li>
            <a className="hover:text-gray-200" onClick={scrollToExperience}>EXPERIENCE</a>
          </li>
          <li>
            <a className="hover:text-gray-200" onClick={scrollToContactMe}>CONTACT ME</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
      </div>
    </div>
  );
};

export default Navbar;

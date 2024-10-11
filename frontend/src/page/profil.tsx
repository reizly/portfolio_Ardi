import React from 'react';
import myImage from '../assets/img/profil.jpg';

const Profil: React.FC = () => {
  return (
    <div className="hero bg-base-200 min-h-screen flex flex-col items-center justify-center">
      <div className="hero-content text-center">
        <div className="max-w-md">
          
          <img
            src={myImage}
            alt="Profil"
            className="w-48 h-48 rounded-full shadow-lg mx-auto mb-4"
          />
          {/* Teks dalam satu baris dengan jarak */}
          <h1 className="text-4xl font-bold whitespace-nowrap mb-1">ARDI MOCH ARYA PRADANA</h1>
          <p className="py-6">
            Front End - Content Creator - Web Development
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profil;

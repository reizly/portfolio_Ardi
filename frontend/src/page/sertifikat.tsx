import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Mengimpor gambar secara langsung
import myImage from '../assets/img/sertifikat 1.1.jpg';
import myImg from '../assets/img/sertifikat 1.2.jpg';
import myGambar from '../assets/img/sertifikat 2.png';
import myGbr from '../assets/img/sertifikat 3.png';
import myFoto from '../assets/img/sertifikat 4.png';
import myFotoo from '../assets/img/sertifikat 5.png';

// Objek untuk menyimpan gambar
const images = {
  sertifikat1_1: myImage,
  sertifikat1_2: myImg,
  sertifikat2: myGambar,
  sertifikat3: myGbr,
  sertifikat4: myFoto,
  sertifikat5: myFotoo,
};

const Sertifikat: React.FC = () => {
  const navigate = useNavigate(); // Deklarasi useNavigate untuk navigasi

  // Mengatur scroll ke atas saat halaman dimuat
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll ke posisi atas saat halaman dimuat
  }, []);

  const handleBack = () => {
    navigate('/'); 
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-4xl font-bold mb-6 text-center bg-blue-600 text-white p-4 rounded-lg flex-grow">
          SERTIFIKAT SAYA
        </h1>
        <button className="btn btn-secondary ml-4" onClick={handleBack}>Kembali</button>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mb-10">
        
        <div className="card bg-base-100 w-80 shadow-xl">
          <figure>
            <img src={images.sertifikat1_1} alt="Sertifikat 1.1" className="object-cover h-48 w-full" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Sertifikat 1</h2>
            <p>Samsung Innovation Campus (Halaman 1)</p>
          </div>
        </div>

        
        <div className="card bg-base-100 w-80 shadow-xl">
          <figure>
            <img src={images.sertifikat1_2} alt="Sertifikat 1.2" className="object-cover h-48 w-full" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Sertifikat 2</h2>
            <p>Samsung Innovation Campus (Halaman 2)</p>
          </div>
        </div>

        
        <div className="card bg-base-100 w-80 shadow-xl">
          <figure>
            <img src={images.sertifikat2} alt="Sertifikat 2" className="object-cover h-48 w-full" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Sertifikat 3</h2>
            <p>Skilvul (Python Dasar)</p>
          </div>
        </div>

        
        <div className="card bg-base-100 w-80 shadow-xl">
          <figure>
            <img src={images.sertifikat3} alt="Sertifikat 3" className="object-cover h-48 w-full" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Sertifikat 4</h2>
            <p>Skilvul (Python Lanjutan)</p>
          </div>
        </div>

        
        <div className="card bg-base-100 w-80 shadow-xl">
          <figure>
            <img src={images.sertifikat4} alt="Sertifikat 4" className="object-cover h-48 w-full" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Sertifikat 5</h2>
            <p>Skilvul (Algoritma & Data Structures With Python)</p>
          </div>
        </div>

        
        <div className="card bg-base-100 w-80 shadow-xl">
          <figure>
            <img src={images.sertifikat5} alt="Sertifikat 5" className="object-cover h-48 w-full" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Sertifikat 6</h2>
            <p>Gits (The Great Place To Work)</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Sertifikat;

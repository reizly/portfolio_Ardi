import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Mengimpor gambar secara langsung
import myImage from '../assets/img/profil projek 1.png';
import myImg from '../assets/img/profil projek 2.png';
import myGambar from '../assets/img/profil projek 3.png';
import myGbr from '../assets/img/profil projek 4.png';
import myFoto from '../assets/img/profil projek 5.png';

// Objek untuk menyimpan gambar
const images = {
  projek1: myImage,
  projek2: myImg,
  projek3: myGambar,
  projek4: myGbr,
  projek5: myFoto,
};

const Projek: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll ke atas ketika halaman dibuka
    window.scrollTo(0, 0); 
  }, []);

  const handleBack = () => {
    navigate('/'); // Kembali ke halaman utama
  };

  const handleEdit = () => {
    navigate('/form-input'); // Mengarahkan ke halaman form input
  };

  return (
    <div className="container mx-auto mt-10">
      {/* Bagian judul dan tombol */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-4xl font-bold mb-6 text-center bg-blue-600 text-white p-4 rounded-lg flex-grow">PROJEK SAYA</h1>
        
        {/* Tombol Edit */}
        <button className="btn btn-success text-white ml-4" onClick={handleEdit}>
          Edit
        </button>

        {/* Tombol Kembali */}
        <button className="btn btn-secondary ml-4" onClick={handleBack}>
          Kembali
        </button>
      </div>

      {/* Kartu-kartu proyek */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {/* Proyek 1 */}
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img src={images.projek1} alt="Projek 1" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Projek 1</h2>
            <p>Web Penjualan Menggunakan Laravel</p>
          </div>
        </div>

        {/* Proyek 2 */}
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img src={images.projek2} alt="Projek 2" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Projek 2</h2>
            <p>Web Input Data Karyawan Menggunakan C#</p>
          </div>
        </div>

        {/* Proyek 3 */}
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img src={images.projek3} alt="Projek 3" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Projek 3</h2>
            <p>Web ProfilPage Menggunakan Flutter</p>
          </div>
        </div>

        {/* Proyek 4 */}
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img src={images.projek4} alt="Projek 4" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Projek 4</h2>
            <p>Web BMI Menggunakan Flutter</p>
          </div>
        </div>

        {/* Proyek 5 */}
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img src={images.projek5} alt="Projek 5" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Projek 5</h2>
            <p>Web Translate Menggunakan Flutter</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projek;

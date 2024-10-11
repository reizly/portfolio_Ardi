import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import myImage from '../assets/img/biodata.jpg';

const Biodata: React.FC = () => {
  const navigate = useNavigate(); 

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  const handleBack = () => {
    navigate('/'); 
  };

  return (
    <div className="container mx-auto mt-10 p-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-4xl font-bold text-white bg-blue-600 p-4 rounded-lg flex-grow text-center">BIODATA SAYA</h1>
        <button className="btn btn-secondary ml-4" onClick={handleBack}>Kembali</button>
      </div>

      <div className="card card-side bg-base-100 shadow-xl mb-6 flex p-4">
        <figure>
          <img
            src={myImage}
            alt="Profil" 
            className="w-48 h-48 object-cover mr-6" 
          />
        </figure>
        <div className="card-body">
          <div className="mb-4">
            <h2 className="text-2xl font-semibold">Identitas Diri</h2>
            <p><strong>Nama Lengkap:</strong> Ardi Moch Arya Pradana</p>
            <p><strong>Tempat, Tanggal Lahir:</strong> Bandung, 23 Juni 2006</p>
            <p><strong>Jenis Kelamin:</strong> Laki-laki</p>
            <p><strong>Agama:</strong> Islam</p>
            <p><strong>Golongan Darah:</strong> O</p>
            <p><strong>Kewarganegaraan:</strong> Indonesia</p>
            <p><strong>Alamat:</strong> Komp.Grand Valley Lembah Citra Sekemala Blok B2 no 23</p>
            <p><strong>Nomor Telepon:</strong> +62 853-2056-7760</p>
          </div>
        </div>
      </div>

      <div className="card bg-base-100 shadow-xl mb-6 p-4">
        <h2 className="text-2xl font-semibold mb-2">Riwayat Pendidikan</h2>
        <p><strong>Nama Sekolah:</strong> SMKN 13 Bandung</p>
        <p><strong>Jurusan:</strong> Rekayasa Perangkat Lunak</p>
        <p><strong>Tahun Ajaran:</strong> 2022-2025</p>
      </div>

      <div className="card bg-base-100 shadow-xl mb-6 p-4">
        <h2 className="text-2xl font-semibold mb-2">Keahlian dan Keterampilan</h2>
        <p><strong>Kemampuan Bahasa:</strong> Bahasa Indonesia</p>
        <p><strong>Keahlian:</strong> Bahasa Pemrograman (JavaScript, PHP), Framework (Laravel, Node.js), Database (MySQL)</p>
        <p><strong>Keterampilan:</strong> Front-End, Content Creator</p>
      </div>

      <div className="card bg-base-100 shadow-xl mb-6 p-4">
        <h2 className="text-2xl font-semibold mb-2">Minat dan Hobi</h2>
        <p>Hobi saya yaitu bulu tangkis, sepak bola dan motoran. Selain itu, saya juga tertarik dalam konten kreator, pengembangan perangkat lunak dan mengikuti perkembangan teknologi terkini.</p>
      </div>
    </div>
  );
};

export default Biodata;

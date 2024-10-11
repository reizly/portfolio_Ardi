import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom'; // Tambahkan Link dari react-router-dom

import myImage from '../assets/img/portfolio biodata.png';
import myImg from '../assets/img/portfolio projek.png';
import myGambar from '../assets/img/portfolio sertifikat.png';

const images = {
  portfolio1: myImage,
  portfolio2: myImg,
  portfolio3: myGambar,
};

const Portfolio = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="flex flex-col items-center mt-10">
      <h1 className="text-4xl font-bold mb-6">Portfolio</h1>

      <div className="w-full flex justify-center mb-6">
        <div className="card glass w-96">
        <figure>
            <img src={images.portfolio1} alt="Biodata" />
        </figure>
          <div className="card-body">
            <h2 className="card-title">Biodata</h2>
            <p>Ini Adalah Biodata Pribadi Saya</p>
            <div className="card-actions justify-end">
              <Link to="/biodata">
                <button className="btn btn-primary text-white">Lihat!</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-4">
        <div className="card glass w-96">
          <figure>
            <img src={images.portfolio2} alt="Projek" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Projek Saya</h2>
            <p>Ini Adalah Projek Yang Pernah Saya Buat Sewaktu Disekolah</p>
            <div className="card-actions justify-end">
              <Link to="/projek">
                <button className="btn btn-primary text-white">Lihat!</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card glass w-96">
          <figure>
            <img src={images.portfolio3} alt="Sertifikat" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Sertifikat</h2>
            <p>Ini Adalah Sertifikat Yang Sudah Saya Dapatkan</p>
            <div className="card-actions justify-end">
              <Link to="/sertifikat">
                <button className="btn btn-primary text-white">Lihat!</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Portfolio;

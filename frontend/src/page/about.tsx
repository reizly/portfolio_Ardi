import React from 'react';
import { PiPowerFill } from "react-icons/pi";

const About: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="mockup-phone">
        <div className="display">
          <div className="artboard artboard-demo phone-1">
            <h1 className="text-2xl font-bold text-center mb-3">ABOUT ME</h1>
            <div className="p-4 text-center">
              <p className="mb-2 text-sm">
                Saya adalah pengembang perangkat lunak dengan minat dalam pengembangan web dan aplikasi bagian front-end.
              </p>
              <p className="mb-4 text-sm">
                Saya senang berolahraga dan bermain motor.
              </p>
              
              <h2 className="text-xl font-semibold mt-6">Motivasi</h2>
              <ul className="list-disc ml-6 mb-4 text-left text-sm">
                <li>Ingin Sukses</li>
                <li>Banyak Uang</li>
                <li>Membahagiakan Orang Tua</li>
              </ul>

              
              <h2 className="text-xl font-semibold mt-6">Hobi</h2>
              <ul className="list-disc ml-6 mb-4 text-left text-sm">
                <li>Bulu Tangkis</li>
                <li>Sepak Bola</li>
                <li>Motoran</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center h-0">
          <PiPowerFill className="text-4xl" />
        </div>
      </div>
    </div>
  );
};

export default About;

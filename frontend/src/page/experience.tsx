import React, { useState, forwardRef } from 'react';
import axios from 'axios';

interface ExperienceItem {
  year: string;
  title: string;
  description: string;
}

const Experience = forwardRef<HTMLDivElement>((props, ref) => {
  const [experienceData, setExperienceData] = useState<ExperienceItem[]>([
    {
      year: '2022',
      title: 'Algoritma & C++',
      description: 'Memecahkan studi kasus menggunakan bahasa pemrograman C++.',
    },
    {
      year: '2023',
      title: 'Belajar Banyak Pemrograman',
      description: `
        PBT (Pemrograman Berbasis Text) memecahkan studi kasus menggunakan bahasa pemrograman C# dan sedikit baca-baca bahasa pemrograman Python. 
        PWP (Pemrograman Web) membuat website menggunakan bahasa pemrograman PHP. 
        PPB (Pemrograman Perangkat Bergerak) membuat aplikasi mobile menggunakan Kodular & merancang perangkat elektronik menggunakan Arduino UNO. 
        Basis Data membuat sebuah database.
      `,
    },
    {
      year: '2024',
      title: 'Memperluas Materi Pemrograman & Belajar Framework',
      description: `
        Basis Data (DataBase) mempelajari ERD, DFD, DML, UML & Logika. 
        FW/API (Framework/Application Programming Interface) menggunakan Framework Node.js & Vue.js dengan bahasa pemrograman Javascript. 
        PBT (Pemrograman Berbasis Text) menggunakan bahasa pemrograman C#. 
        PWP (Pemrograman Web) Menggunakan Framework Laravel & bahasa pemrograman PHP. 
        PPB (Pemrograman Perangkat Bergerak) menggunakan framework Flutter & bahasa pemrograman dart.
      `,
    },
  ]);

  const [newExperience, setNewExperience] = useState<ExperienceItem>({
    year: '',
    title: '',
    description: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewExperience({ ...newExperience, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setExperienceData([...experienceData, newExperience]);
    setNewExperience({ year: '', title: '', description: '' });
  };

  return (
    <div ref={ref} className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Experience</h1>

      {/* Form Input Experience */}
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <label htmlFor="year" className="block font-bold mb-2">Year</label>
          <input
            type="text"
            id="year"
            name="year"
            value={newExperience.year}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="title" className="block font-bold mb-2">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={newExperience.title}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block font-bold mb-2">Description</label>
          <textarea
            id="description"
            name="description"
            value={newExperience.description}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            rows={4}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Add Experience
        </button>
      </form>

      {/* Experience Timeline */}
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {experienceData.map((experience, index) => (
          <li key={index}>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className={index % 2 === 0 ? "timeline-start mb-10 md:text-end" : "timeline-end mb-10"}>
              <time className="font-mono italic">{experience.year}</time>
              <div className="text-lg font-black">{experience.title}</div>
              <p>{experience.description}</p>
            </div>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Experience;

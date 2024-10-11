// form input.tsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FormInput: React.FC = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImage(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    if (image) {
      formData.append('image', image);
    }
    formData.append('description', description);

    try {
      const response = await axios.post('http://localhost:5000/api/projects', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Project berhasil ditambahkan:', response.data);
      setTitle('');
      setImage(null);
      setDescription('');
      navigate('/projek');
    } catch (error: any) {
      console.error('Gagal menambahkan project:', error);
      const message = error?.response?.data?.message || error.message || 'Terjadi kesalahan';
      alert('Gagal menambahkan project: ' + message);
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-4xl font-bold mb-6 text-center bg-blue-600 text-white p-4 rounded-lg">
        TAMBAH PROYEK BARU
      </h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data" className="bg-gray-100 p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Judul Proyek</label>
          <input 
            type="text" 
            placeholder="Masukkan judul proyek" 
            value={title}
            onChange={(e) => setTitle(e.target.value)} 
            required 
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Unggah Gambar</label>
          <input 
            type="file" 
            onChange={handleImageChange} 
            accept="image/*" 
            required 
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Deskripsi Proyek</label>
          <textarea 
            placeholder="Masukkan deskripsi proyek" 
            value={description}
            onChange={(e) => setDescription(e.target.value)} 
            required 
            className="w-full h-40 p-3 border border-gray-300 rounded-lg"
          ></textarea>
        </div>
        <button type="submit" className="bg-green-600 text-white p-3 rounded-lg hover:bg-green-500 mr-4">
          Simpan
        </button>
        <button type="button" className="bg-gray-600 text-white p-3 rounded-lg hover:bg-gray-500" onClick={() => navigate('/projek')}>
          Kembali
        </button>
      </form>
    </div>
  );
};

export default FormInput;

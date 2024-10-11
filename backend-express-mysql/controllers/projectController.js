// projectController.js
exports.addProject = (req, res) => {
  const { title, description } = req.body;
  const image = req.file; // Mengakses file gambar

  if (!title || !description || !image) {
    return res.status(400).json({ message: 'Judul, deskripsi, dan gambar harus diisi.' });
  }

  // Simpan proyek ke database atau lakukan operasi lain di sini
  res.status(200).json({
    message: 'Project berhasil ditambahkan',
    project: {
      title,
      description,
      image: image.originalname, // Nama asli file gambar
    },
  });
};

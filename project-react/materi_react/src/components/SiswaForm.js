import React, { useState, useEffect } from 'react';
import './Form.css'; // Pastikan untuk mengimpor CSS

const SiswaForm = ({ onSubmit, onClose, initialData }) => {
  const [nama, setNama] = useState('');
  const [kelas, setKelas] = useState('');
  const [jurusan, setJurusan] = useState('');
  const [nisn, setNisn] = useState('');
  const [asalSekolah, setAsalSekolah] = useState('');

  useEffect(() => {
    if (initialData) {
      setNama(initialData.nama);
      setKelas(initialData.kelas);
      setJurusan(initialData.jurusan);
      setNisn(initialData.nisn);
      setAsalSekolah(initialData.asalSekolah);
    } else {
      // Reset form jika tidak ada initialData
      setNama('');
      setKelas('');
      setJurusan('');
      setNisn('');
      setAsalSekolah('');
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedSiswa = {
      id: initialData ? initialData.id : Date.now(), // Pastikan id unik
      nama,
      kelas,
      jurusan,
      nisn,
      asalSekolah,
    };
    onSubmit(updatedSiswa); // Panggil fungsi onSubmit yang dikirim dari parent
  };

  return (
    <div className="overlay">
      <div className="form-container">
        <h2>{initialData ? 'Edit Siswa' : 'Tambah Siswa'}</h2>
        <form onSubmit={handleSubmit}>
          <label>Nama</label>
          <input
            type="text"
            placeholder="Nama"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            required
          />
          <label>Kelas</label>
          <input
            type="text"
            placeholder="Kelas"
            value={kelas}
            onChange={(e) => setKelas(e.target.value)}
            required
          />
          <label>Jurusan</label>
          <input
            type="text"
            placeholder="Jurusan"
            value={jurusan}
            onChange={(e) => setJurusan(e.target.value)}
            required
          />
          <label>NISN</label>
          <input
            type="text"
            placeholder="NISN"
            value={nisn}
            onChange={(e) => setNisn(e.target.value)}
            required
          />
          <label>Asal Sekolah</label>
          <input
            type="text"
            placeholder="Asal Sekolah"
            value={asalSekolah}
            onChange={(e) => setAsalSekolah(e.target.value)}
            required
          />
          <div>
            <button type="submit" className="button">Simpan</button>
            <button type="button" className="cancel-button" onClick={onClose}>Batal</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SiswaForm;

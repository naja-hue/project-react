import React, { useState, useEffect } from 'react';
import './Form.css'; // Pastikan untuk mengimpor CSS yang sudah diperbarui

const GuruForm = ({ onSubmit, onClose, initialData }) => {
  const [nama, setNama] = useState('');
  const [mapel, setMapel] = useState('');
  const [nik, setNik] = useState('');
  const [jk, setJk] = useState('');
  const [jabatan, setJabatan] = useState('');

  useEffect(() => {
    if (initialData) {
      setNama(initialData.nama);
      setMapel(initialData.mapel);
      setNik(initialData.nik);
      setJk(initialData.jk);
      setJabatan(initialData.jabatan);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedGuru = {
      id: initialData ? initialData.id : Date.now(),
      nama,
      mapel,
      nik,
      jk,
      jabatan,
    };
    onSubmit(updatedGuru);
  };

  return (
    <div className="overlay">
      <div className="form-container">
        <h2>{initialData ? 'Edit Guru' : 'Tambah Guru'}</h2>
        <form onSubmit={handleSubmit}>
          <label>Nama</label>
          <input
            type="text"
            placeholder="Nama"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            required
          />
          <label>Mata Pelajaran</label>
          <input
            type="text"
            placeholder="Mata Pelajaran"
            value={mapel}
            onChange={(e) => setMapel(e.target.value)}
            required
          />
          <label>NIK</label>
          <input
            type="text"
            placeholder="NIK"
            value={nik}
            onChange={(e) => setNik(e.target.value)}
            required
          />
          <label>Jenis Kelamin</label>
          <select value={jk} onChange={(e) => setJk(e.target.value)} required>
            <option value="">Pilih Jenis Kelamin</option>
            <option value="L">Laki-laki</option>
            <option value="P">Perempuan</option>
          </select>
          <label>Jabatan</label>
          <input
            type="text"
            placeholder="Jabatan"
            value={jabatan}
            onChange={(e) => setJabatan(e.target.value)}
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

export default GuruForm;

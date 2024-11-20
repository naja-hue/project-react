import React, { useState } from 'react';

function SiswaForm({ onSubmit, onClose }) {
  const [nama, setNama] = useState('');
  const [kelas, setKelas] = useState('');
  const [jurusan, setJurusan] = useState('');
  const [nisn, setNisn] = useState('');
  const [asalSekolah, setAsalSekolah] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ nama, kelas, jurusan, nisn, asalSekolah });
    onClose();
  };

  return (
    <div className="form-modal">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nama"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Kelas"
          value={kelas}
          onChange={(e) => setKelas(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Jurusan"
          value={jurusan}
          onChange={(e) => setJurusan(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="NISN"
          value={nisn}
          onChange={(e) => setNisn(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Asal Sekolah"
          value={asalSekolah}
          onChange={(e) => setAsalSekolah(e.target.value)}
          required
        />
        <button type="submit">Simpan</button>
        <button type="button" onClick={onClose}>Tutup</button>
      </form>
    </div>
  );
}

export default SiswaForm;

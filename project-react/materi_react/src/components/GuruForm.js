import React, { useState } from 'react';

function GuruForm({ onSubmit, onClose }) {
  const [nama, setNama] = useState('');
  const [mapel, setMapel] = useState('');
  const [nik, setNik] = useState('');
  const [jk, setJk] = useState('L');
  const [jabatan, setJabatan] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ nama, mapel, nik, jk, jabatan });
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
          placeholder="Mapel"
          value={mapel}
          onChange={(e) => setMapel(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="NIK"
          value={nik}
          onChange={(e) => setNik(e.target.value)}
          required
        />
        <select value={jk} onChange={(e) => setJk(e.target.value)} required>
          <option value="L">Laki-laki</option>
          <option value="P">Perempuan</option>
        </select>
        <input
          type="text"
          placeholder="Jabatan"
          value={jabatan}
          onChange={(e) => setJabatan(e.target.value)}
          required
        />
        <button type="submit">Simpan</button>
        <button type="button" onClick={onClose}>Tutup</button>
      </form>
    </div>
  );
}

export default GuruForm;

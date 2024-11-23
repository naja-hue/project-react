// src/components/DataGuru.js
import React, { useState } from 'react';
import './Table.css';

const DataGuru = ({ guruData, deleteGuru, updateGuru }) => {
  // State untuk mengelola data guru yang sedang diedit dan apakah form tampil
  const [showEditForm, setShowEditForm] = useState(false);
  const [editGuru, setEditGuru] = useState({
    id: '',
    nama: '',
    mapel: '',
    nik: '',
    jk: '',
    jabatan: ''
  });

  // Handle klik tombol Edit untuk menampilkan form edit
  const handleEdit = (guru) => {
    setEditGuru(guru);  // Set data guru yang akan diedit
    setShowEditForm(true);  // Tampilkan form edit
  };

  // Handle submit form edit
  const handleEditSubmit = (e) => {
    e.preventDefault();
    updateGuru(editGuru);  // Update data guru dengan data terbaru
    setShowEditForm(false);  // Sembunyikan form setelah submit
  };

  // Handle perubahan input form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditGuru((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="table-container">
      <h2>Data Guru</h2>
      <table>
        <thead>
          <tr>
            <th>Nama</th>
            <th>Mapel</th>
            <th>NIK</th>
            <th>Jenis Kelamin</th>
            <th>Jabatan</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {guruData.map((guru) => (
            <tr key={guru.id}>
              <td>{guru.nama}</td>
              <td>{guru.mapel}</td>
              <td>{guru.nik}</td>
              <td>{guru.jk}</td>
              <td>{guru.jabatan}</td>
              <td>
                <button className="aksi aksi-edit" onClick={() => handleEdit(guru)}>Edit</button>
                <button className="aksi aksi-delete" onClick={() => deleteGuru(guru.id)}>Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Form Edit */}
      {showEditForm && (
        <form onSubmit={handleEditSubmit} className="edit-form">
          <h3>Edit Guru</h3>
          <label>Nama:</label>
          <input
            type="text"
            name="nama"
            value={editGuru.nama}
            onChange={handleInputChange}
            required
          />
          <label>Mapel:</label>
          <input
            type="text"
            name="mapel"
            value={editGuru.mapel}
            onChange={handleInputChange}
            required
          />
          <label>NIK:</label>
          <input
            type="text"
            name="nik"
            value={editGuru.nik}
            onChange={handleInputChange}
            required
          />
          <label>Jenis Kelamin:</label>
          <select
            name="jk"
            value={editGuru.jk}
            onChange={handleInputChange}
            required
          >
            <option value="Laki-laki">Laki-laki</option>
            <option value="Perempuan">Perempuan</option>
          </select>
          <label>Jabatan:</label>
          <input
            type="text"
            name="jabatan"
            value={editGuru.jabatan}
            onChange={handleInputChange}
            required
          />
          <button type="submit" className="aksi aksi-edit">Simpan</button>
          <button
            type="button"
            onClick={() => setShowEditForm(false)} // Menutup form edit
            className="aksi aksi-delete"
          >
            Batal
          </button>
        </form>
      )}
    </div>
  );
};

export default DataGuru;

// GuruTable.js
import React from 'react';

const GuruTable = ({ guruData, setEditingGuru, setShowGuruForm, deleteGuru }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>No</th>
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
              <td>{guru.no}</td>
              <td>{guru.nama}</td>
              <td>{guru.mapel}</td>
              <td>{guru.nik}</td>
              <td>{guru.jk}</td>
              <td>{guru.jabatan}</td>
              <td>
                <button
                  className="aksi aksi-edit"
                  onClick={() => {
                    setEditingGuru(guru); // Set guru yang diedit
                    setShowGuruForm(true); // Tampilkan form edit guru
                  }}
                >
                  Edit
                </button>
                <button className="aksi aksi-delete" onClick={() => deleteGuru(guru.id)}>Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GuruTable;

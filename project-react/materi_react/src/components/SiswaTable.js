// SiswaTable.js
import React from 'react';

const SiswaTable = ({ siswaData, setEditingSiswa, setShowSiswaForm, deleteSiswa }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Kelas</th>
            <th>Jurusan</th>
            <th>NISN</th>
            <th>Asal Sekolah</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {siswaData.map((siswa) => (
            <tr key={siswa.id}>
              <td>{siswa.no}</td>
              <td>{siswa.nama}</td>
              <td>{siswa.kelas}</td>
              <td>{siswa.jurusan}</td>
              <td>{siswa.nisn}</td>
              <td>{siswa.asalSekolah}</td>
              <td>
                <button
                  className="aksi aksi-edit"
                  onClick={() => {
                    setEditingSiswa(siswa); // Set siswa yang diedit
                    setShowSiswaForm(true); // Tampilkan form edit siswa
                  }}
                >
                  Edit
                </button>
                <button className="aksi aksi-delete" onClick={() => deleteSiswa(siswa.id)}>Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SiswaTable;

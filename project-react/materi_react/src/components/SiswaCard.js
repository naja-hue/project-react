import React, { useState } from 'react';
function SiswaCard({ siswa, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedSiswa, setEditedSiswa] = useState(siswa);

  const handleEdit = () => {
    onEdit(editedSiswa);
    setIsEditing(false);
  };

  return (
    <div className="data-card">
      {!isEditing ? (
        <>
          <p><strong>Nama:</strong> {siswa.nama}</p>
          <p><strong>Kelas:</strong> {siswa.kelas}</p>
          <p><strong>Jurusan:</strong> {siswa.jurusan}</p>
          <p><strong>NISN:</strong> {siswa.nisn}</p>
          <p><strong>Asal Sekolah:</strong> {siswa.asalSekolah}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={onDelete}>Hapus</button>
        </>
      ) : (
        <div>
          <input
            type="text"
            value={editedSiswa.nama}
            onChange={(e) => setEditedSiswa({ ...editedSiswa, nama: e.target.value })}
          />
          <input
            type="text"
            value={editedSiswa.kelas}
            onChange={(e) => setEditedSiswa({ ...editedSiswa, kelas: e.target.value })}
          />
          <input
            type="text"
            value={editedSiswa.jurusan}
            onChange={(e) => setEditedSiswa({ ...editedSiswa, jurusan: e.target.value })}
          />
          <input
            type="text"
            value={editedSiswa.nisn}
            onChange={(e) => setEditedSiswa({ ...editedSiswa, nisn: e.target.value })}
          />
          <input
            type="text"
            value={editedSiswa.asalSekolah}
            onChange={(e) => setEditedSiswa({ ...editedSiswa, asalSekolah: e.target.value })}
          />
          <button onClick={handleEdit}>Simpan</button>
        </div>
      )}
    </div>
  );
}

export default SiswaCard;

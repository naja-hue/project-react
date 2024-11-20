import React, { useState } from 'react';

function GuruCard({ guru, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedGuru, setEditedGuru] = useState(guru);

  const handleEdit = () => {
    onEdit(editedGuru);
    setIsEditing(false);
  };

  return (
    <div className="data-card">
      {!isEditing ? (
        <>
          <p><strong>Nama:</strong> {guru.nama}</p>
          <p><strong>Mapel:</strong> {guru.mapel}</p>
          <p><strong>NIK:</strong> {guru.nik}</p>
          <p><strong>Jenis Kelamin:</strong> {guru.jk}</p>
          <p><strong>Jabatan:</strong> {guru.jabatan}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={onDelete}>Hapus</button>
        </>
      ) : (
        <div>
          <input
            type="text"
            value={editedGuru.nama}
            onChange={(e) => setEditedGuru({ ...editedGuru, nama: e.target.value })}
          />
          <input
            type="text"
            value={editedGuru.mapel}
            onChange={(e) => setEditedGuru({ ...editedGuru, mapel: e.target.value })}
          />
          <input
            type="text"
            value={editedGuru.nik}
            onChange={(e) => setEditedGuru({ ...editedGuru, nik: e.target.value })}
          />
          <select
            value={editedGuru.jk}
            onChange={(e) => setEditedGuru({ ...editedGuru, jk: e.target.value })}
          >
            <option value="L">Laki-laki</option>
            <option value="P">Perempuan</option>
          </select>
          <input
            type="text"
            value={editedGuru.jabatan}
            onChange={(e) => setEditedGuru({ ...editedGuru, jabatan: e.target.value })}
          />
          <button onClick={handleEdit}>Simpan</button>
        </div>
      )}
    </div>
  );
}

export default GuruCard;

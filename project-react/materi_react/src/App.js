import React, { useState } from 'react';
import './App.css';
import GuruForm from './components/GuruForm';
import SiswaForm from './components/SiswaForm';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  const [guruData, setGuruData] = useState([
    { id: 1, nama: "John Doe", mapel: "Matematika", nik: "12345", jk: "L", jabatan: "Guru" },
    { id: 2, nama: "Jane Smith", mapel: "Biologi", nik: "67890", jk: "P", jabatan: "Guru" }
  ]);
  const [siswaData, setSiswaData] = useState([
    { id: 1, nama: "Ahmad", kelas: "10", jurusan: "IPA", nisn: "001", asalSekolah: "SMA 1" },
    { id: 2, nama: "Siti", kelas: "12", jurusan: "IPS", nisn: "002", asalSekolah: "SMA 2" }
  ]);
  const [showGuruForm, setShowGuruForm] = useState(false);
  const [showSiswaForm, setShowSiswaForm] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("dashboard");

  const addGuru = (guru) => {
    setGuruData([...guruData, guru]);
  };

  const addSiswa = (siswa) => {
    setSiswaData([...siswaData, siswa]);
  };

  const deleteGuru = (id) => {
    setGuruData(guruData.filter(guru => guru.id !== id));
  };

  const deleteSiswa = (id) => {
    setSiswaData(siswaData.filter(siswa => siswa.id !== id));
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <div className="App">
      <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} handleMenuClick={handleMenuClick} />

      <div className={`content-container ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        {activeMenu === "dashboard" && (
          <>
            <h1>Dashboard</h1>
            <div className="cards-container">
              <div className="card">
                <h2>Data Guru</h2>
                <p>{guruData.length} Guru Terdaftar</p>
                <button onClick={() => setActiveMenu("guru")}>Lihat Data Guru</button>
              </div>

              <div className="card">
                <h2>Data Siswa</h2>
                <p>{siswaData.length} Siswa Terdaftar</p>
                <button onClick={() => setActiveMenu("siswa")}>Lihat Data Siswa</button>
              </div>
            </div>
          </>
        )}

        {activeMenu === "guru" && (
          <>
            <h1>Data Guru</h1>
            <button className="tambah" onClick={() => setShowGuruForm(true)}>Tambah Guru</button>
            <div className="table-container">
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
                        <button className="aksi aksi-edit">Edit</button>
                        <button className="aksi aksi-delete" onClick={() => deleteGuru(guru.id)}>Hapus</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {activeMenu === "siswa" && (
          <>
            <h1>Data Siswa</h1>
            <button className="tambah" onClick={() => setShowSiswaForm(true)}>Tambah Siswa</button>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
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
                      <td>{siswa.nama}</td>
                      <td>{siswa.kelas}</td>
                      <td>{siswa.jurusan}</td>
                      <td>{siswa.nisn}</td>
                      <td>{siswa.asalSekolah}</td>
                      <td>
                        <button className="aksi aksi-edit">Edit</button>
                        <button className="aksi aksi-delete" onClick={() => deleteSiswa(siswa.id)}>Hapus</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {showGuruForm && <GuruForm onSubmit={addGuru} onClose={() => setShowGuruForm(false)} />}
        {showSiswaForm && <SiswaForm onSubmit={addSiswa} onClose={() => setShowSiswaForm(false)} />}
      </div>
    </div>
  );
}

export default App;

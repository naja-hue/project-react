import React, { useEffect, useState } from 'react';
import './App.css';
import GuruForm from './components/GuruForm';
import SiswaForm from './components/SiswaForm';
import Sidebar from './components/Sidebar';

function App() {
  const [guruData, setGuruData] = useState([]);
  const [siswaData, setSiswaData] = useState([]);
  const [showGuruForm, setShowGuruForm] = useState(false);
  const [showSiswaForm, setShowSiswaForm] = useState(false);
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [editingGuru, setEditingGuru] = useState(null);
  const [editingSiswa, setEditingSiswa] = useState(null);

  useEffect(() => {
    fetchGuruData();
    fetchSiswaData();
  }, []);

  // Fetch data functions
  const fetchGuruData = async () => {
    try {
      const response = await fetch('http://localhost:5000/guru');
      const data = await response.json();
      setGuruData(data);
    } catch (error) {
      console.error("Error fetching guru data:", error);
    }
  };

  const fetchSiswaData = async () => {
    try {
      const response = await fetch('http://localhost:5000/siswa');
      const data = await response.json();
      setSiswaData(data);
    } catch (error) {
      console.error("Error fetching siswa data:", error);
    }
  };

  // Add functions
  const addGuru = async (guru) => {
    try {
      const response = await fetch('http://localhost:5000/guru', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(guru),
      });
      const newGuru = await response.json();
      setGuruData((prevData) => [...prevData, newGuru]);
      setShowGuruForm(false);
    } catch (error) {
      console.error("Error adding guru:", error);
    }
  };

  const addSiswa = async (siswa) => {
    try {
      const response = await fetch('http://localhost:5000/siswa', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(siswa),
      });
      const newSiswa = await response.json();
      setSiswaData((prevData) => [...prevData, newSiswa]);
      setShowSiswaForm(false);
    } catch (error) {
      console.error("Error adding siswa:", error);
    }
  };

  // Update functions
  const updateGuru = async (updatedGuru) => {
    try {
      const response = await fetch(`http://localhost:5000/guru/${updatedGuru.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedGuru),
      });
      const result = await response.json();
      setGuruData((prevData) => 
        prevData.map(guru => (guru.id === result.id ? result : guru))
      );
      setEditingGuru(null);
      setShowGuruForm(false);
    } catch (error) {
      console.error("Error updating guru:", error);
    }
  };

  const updateSiswa = async (updatedSiswa) => {
    try {
      const response = await fetch(`http://localhost:5000/siswa/${updatedSiswa.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedSiswa),
      });
      const result = await response.json();
      setSiswaData((prevData) => 
        prevData.map(siswa => (siswa.id === result.id ? result : siswa))
      );
      setEditingSiswa(null);
      setShowSiswaForm(false);
    } catch (error) {
      console.error("Error updating siswa:", error);
    }
  };

  // Delete functions
  const deleteGuru = async (id) => {
    try {
      await fetch(`http://localhost:5000/guru/${id}`, { method: 'DELETE' });
      setGuruData((prevData) => prevData.filter(guru => guru.id !== id));
    } catch (error) {
      console.error("Error deleting guru:", error);
    }
  };

  const deleteSiswa = async (id) => {
    try {
      await fetch(`http://localhost:5000/siswa/${id}`, { method: 'DELETE' });
      setSiswaData((prevData) => prevData.filter(siswa => siswa.id !== id));
    } catch (error) {
      console.error("Error deleting siswa:", error);
    }
  };

  // Menu handling
  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  const goToDashboard = () => {
    setActiveMenu("dashboard");
  };

  return (
    <div className="App">
      <Sidebar handleMenuClick={handleMenuClick} />

      <div className="content-container">
        {activeMenu === "dashboard" && (
          <>
            <h1 className="dashboard-title">Dashboard</h1>
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
            <button className="back-to-dashboard" onClick={goToDashboard}>Kembali ke Dashboard</button>
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
                        <button 
                          className="aksi aksi-edit"
                          onClick={() => {
                            setEditingGuru(guru);
                            setShowGuruForm(true);
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
          </>
        )}
        {activeMenu === "siswa" && (
          <>
            <h1>Data Siswa</h1>
            <button className="back-to-dashboard" onClick={goToDashboard}>Kembali ke Dashboard</button>
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
                        <button 
                          className="aksi aksi-edit"
                          onClick={() => {
                            setEditingSiswa(siswa);
                            setShowSiswaForm(true);
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
          </>
        )}
        {showGuruForm && (
          <GuruForm 
            onSubmit={editingGuru ? updateGuru : addGuru} 
            onClose={() => setShowGuruForm(false)} 
            initialData={editingGuru} 
          />
        )}
        {showSiswaForm && (
          <SiswaForm 
            onSubmit={editingSiswa ? updateSiswa : addSiswa} 
            onClose={() => setShowSiswaForm(false)} 
            initialData={editingSiswa} 
          />
        )}
      </div>
    </div>
  );
}

export default App;

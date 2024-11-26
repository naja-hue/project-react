import React, { useEffect, useState } from 'react';
import './App.css';
import GuruForm from './components/GuruForm';
import SiswaForm from './components/SiswaForm';
import Sidebar from './components/Sidebar';
import GuruTable from './components/GuruTable';
import SiswaTable from './components/SiswaTable';
import Dashboard from './components/Dashboard'; // Impor komponen Dashboard

function App() {
  const [guruData, setGuruData] = useState([]);
  const [siswaData, setSiswaData] = useState([]);
  const [showGuruForm, setShowGuruForm] = useState(false);
  const [showSiswaForm, setShowSiswaForm] = useState(false);
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [editingGuru, setEditingGuru] = useState(null);
  const [editingSiswa, setEditingSiswa] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchGuruData();
    fetchSiswaData();
  }, []);

  const fetchGuruData = async () => {
    try {
      const response = await fetch('http://localhost:5000/guru');
      if (!response.ok) throw new Error('Failed to fetch guru data');
      const data = await response.json();
      setGuruData(data);
    } catch (error) {
      setError("Error fetching guru data: " + error.message);
    }
  };

  const fetchSiswaData = async () => {
    try {
      const response = await fetch('http://localhost:5000/siswa');
      if (!response.ok) throw new Error('Failed to fetch siswa data');
      const data = await response.json();
      setSiswaData(data);
    } catch (error) {
      setError("Error fetching siswa data: " + error.message);
    }
  };

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

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  const goToDashboard = () => {
    setActiveMenu("dashboard");
  };

  return (
    <div className="App">
      <Sidebar handleMenuClick={handleMenuClick} />
      <div className="main-content"> 
      {error && <p className="error-message">{error}</p>}

      {activeMenu === "dashboard" && (
        <Dashboard guruData={guruData} siswaData={siswaData} setActiveMenu={setActiveMenu} />
      )}

      {activeMenu === "guru" && (
        <>
          <h1 className="data-guru-title">Data Guru</h1>
          <button className="back-to-dashboard" onClick={goToDashboard}>Kembali ke Dashboard</button>
          <button className="tambah" onClick={() => {
            setEditingGuru(null); // Reset editingGuru
            setShowGuruForm(true); // Tampilkan form tambah guru
          }}>Tambah Guru</button>
          <GuruTable 
            guruData={guruData} 
            setEditingGuru={setEditingGuru} 
            setShowGuruForm={setShowGuruForm} 
            deleteGuru={deleteGuru} 
          />
        </>
      )}
      
      {activeMenu === "siswa" && (
        <>
          <h1 className="data-siswa-title">Data Siswa</h1>
          <button className="back-to-dashboard" onClick={goToDashboard}>Kembali ke Dashboard</button>
          <button className="tambah" onClick={() => {
            setEditingSiswa(null); // Reset editingSiswa
            setShowSiswaForm(true); // Tampilkan form tambah siswa
          }}>Tambah Siswa</button>
          <SiswaTable 
            siswaData={siswaData} 
            setEditingSiswa={setEditingSiswa} 
            setShowSiswaForm={setShowSiswaForm} 
            deleteSiswa={deleteSiswa} 
          />
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

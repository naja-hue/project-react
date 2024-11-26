// Dashboard.js
import React from 'react';

const Dashboard = ({ guruData, siswaData, setActiveMenu }) => {
  return (
    <div className="dashboard">
      <h1 className="dashboard-title">مرحباً بك في لوحة المعلومات</h1>
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
    </div>
  );
};

export default Dashboard;

import React, { useState } from 'react';
import { FaChalkboardTeacher, FaUserGraduate, FaStar } from 'react-icons/fa'; // Importing icons from react-icons
import './Sidebar.css'; // Pastikan Anda memiliki file CSS untuk sidebar

const Sidebar = ({ handleMenuClick }) => {
  const [isOpen, setIsOpen] = useState(false); // Menggunakan useState untuk menangani status sidebar

  const toggleSidebar = () => {
    setIsOpen(prevState => !prevState); // Toggle status sidebar (buka/tutup)
  };

  const closeSidebar = () => {
    setIsOpen(false); // Menutup sidebar
  };

  return (
    <>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2 className="sidebar-title">
            <FaStar style={{ marginRight: '8px', color: '#ff69b4', fontSize: '28px' }} /> {/* Ikon bintang */}
            Penyu Arab
          </h2>
        </div>
        <ul className="sidebar-menu">
          <li className="sidebar-item" onClick={() => { handleMenuClick('guru'); closeSidebar(); }}>
            <FaChalkboardTeacher /> Data Guru
          </li>
          <li className="sidebar-item" onClick={() => { handleMenuClick('siswa'); closeSidebar(); }}>
            <FaUserGraduate /> Data Siswa
          </li>
        </ul>
      </div>

      {/* Tombol untuk membuka/tutup sidebar */}
      <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
        {isOpen ? 'Tutup Sidebar' : 'Buka Sidebar'}
      </button>
    </>
  );
};

export default Sidebar;

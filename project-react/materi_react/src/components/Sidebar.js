import React from 'react';
import { FaChalkboardTeacher, FaUserGraduate } from 'react-icons/fa'; // Importing icons from react-icons
import './Sidebar.css'; // Ensure you have your CSS for the sidebar

const Sidebar = ({ handleMenuClick }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2 className="sidebar-title">Peri Imut</h2>
      </div>
      <ul className="sidebar-menu">
        <li className="sidebar-item" onClick={() => handleMenuClick('guru')}>
          <FaChalkboardTeacher /> Data Guru
        </li>
        <li className="sidebar-item" onClick={() => handleMenuClick('siswa')}>
          <FaUserGraduate /> Data Siswa
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

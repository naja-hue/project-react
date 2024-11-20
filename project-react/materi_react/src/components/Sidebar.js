import React from 'react';
import './Sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar, handleMenuClick }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="menu">
        <a href="#dashboard" onClick={() => {handleMenuClick("dashboard"); toggleSidebar();}}>Dashboard</a>
        <a href="#data-guru" onClick={() => {handleMenuClick("guru"); toggleSidebar();}}>Data Guru</a>
        <a href="#data-siswa" onClick={() => {handleMenuClick("siswa"); toggleSidebar();}}>Data Siswa</a>
      </div>
      {/* Sidebar Toggle Button for mobile */}
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {isOpen ? "Close Menu" : "Open Menu"}
      </button>
    </div>
  );
};

export default Sidebar;

import React from 'react';
import './Navbar.css';

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="brand">My Dashboard</div>
      <div className="menu">
        <a href="#menu" onClick={toggleSidebar}>Menu</a>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Header.css';
import Search from 'antd/es/transfer/search';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import myimage from './image/shopping.png';

const Header = ({ onLoginClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      {/* Left Side Logo */}
      <img src={myimage} alt="logo" className="logo-img" />

      {/* Center Navigation List */}
      <ul className={`nav-list ${menuOpen ? 'show-menu' : ''}`}>
        <li><Link to="home" smooth duration={500} spy activeClass="active" onClick={closeMenu}>Home</Link></li>
        <li><Link to="about" smooth duration={500} spy activeClass="active" onClick={closeMenu}>About</Link></li>
        <li><Link to="Collection" smooth duration={500} spy activeClass="active" onClick={closeMenu}>Collection</Link></li>
        <li><Link to="services" smooth duration={500} spy activeClass="active" onClick={closeMenu}>Services</Link></li>
        <li><Link to="Contact" smooth duration={500} spy activeClass="active" onClick={closeMenu}>Contact</Link></li>
      </ul>

      {/* Right Side Search + Login + Cart */}
      <div className="right-section">
        <div className="search">
          <Search />
          <button className="login_btn" onClick={onLoginClick}>Login</button>
          <FaShoppingCart size={40} className="cart-icon" />
        </div>

        {/* Toggle Menu (Visible only on mobile) */}
        <div className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </div>
      </div>
    </header>
  );
};

export default Header;

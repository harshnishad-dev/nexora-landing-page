import React, { useState } from 'react';
import { Search, Leaf } from 'lucide-react';
import { navLinks } from '../data/homeData';

const Navbar = ({ onSearchClick }) => {
  const [activeItem, setActiveItem] = useState('Home');

  const handleNavClick = (label, href) => {
    setActiveItem(label);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar-container">
      <div className="navbar-inner">
        <a href="#home" className="navbar-brand" onClick={() => setActiveItem('Home')}>
          <div className="brand-logo-icon">
            <Leaf size={20} className="leaf-svg" />
          </div>
          <span className="brand-name">Nexora</span>
        </a>

        <nav className="desktop-nav">
          <ul className="nav-list">
            {navLinks.map((item) => (
              <li key={item.label} className="nav-item">
                <a
                  href={item.href}
                  className={`nav-link ${activeItem === item.label ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.label, item.href);
                  }}
                >
                  {item.label}
                  {activeItem === item.label && <span className="active-dot"></span>}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar-actions">
          <button
            type="button"
            className="action-icon-btn"
            onClick={onSearchClick}
            aria-label="Search products"
          >
            <Search size={18} />
          </button>
          
          <a href="#products" className="btn btn-primary nav-cta-btn">
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

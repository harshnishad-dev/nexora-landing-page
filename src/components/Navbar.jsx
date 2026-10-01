import React, { useState, useEffect } from 'react';
import { Search, Menu, X, Leaf } from 'lucide-react';
import { navLinks } from '../data/homeData';

const Navbar = ({ onSearchClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (label, href) => {
    setActiveItem(label);
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-container ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="#home" className="navbar-brand" onClick={() => setActiveItem('Home')}>
          <div className="brand-logo-icon">
            <Leaf size={22} className="leaf-svg" />
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

          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={toggleMobileMenu}>
          <div className="mobile-menu-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-top">
              <div className="navbar-brand">
                <div className="brand-logo-icon">
                  <Leaf size={20} className="leaf-svg" />
                </div>
                <span className="brand-name">Nexora</span>
              </div>
              <button
                type="button"
                className="mobile-close-btn"
                onClick={toggleMobileMenu}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>
            
            <ul className="mobile-nav-list">
              {navLinks.map((item) => (
                <li key={item.label} className="mobile-nav-item">
                  <a
                    href={item.href}
                    className={`mobile-nav-link ${activeItem === item.label ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.label, item.href);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mobile-menu-actions">
              <a
                href="#products"
                className="btn btn-primary w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

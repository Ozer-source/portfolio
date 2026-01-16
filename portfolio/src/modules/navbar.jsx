import { useState } from 'react'
import { useTranslation } from 'react-i18next';
import './Css/Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";


function Navbar() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => setMenuOpen((open) => !open);

  return (
    <div className="container-fluid custom-navbar">
      <div className="row align-items-center">
        <div className="col-6 col-md-4 d-flex align-items-center">
          <button className="hamburger d-md-none" onClick={handleMenuToggle} aria-label="Toggle navigation">
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
          </button>
        </div>
        <div className={`col-12 col-md-4 d-${menuOpen ? 'flex' : 'none'} d-md-flex justify-content-center flex-column flex-md-row align-items-center navbar-links`}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-button active" : "nav-button"
            }
            onClick={() => setMenuOpen(false)}
          >
            {t('navbar.home')}
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-button active" : "nav-button"
            }
            onClick={() => setMenuOpen(false)}
          >
            {t('navbar.about')}
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "nav-button active" : "nav-button"
            }
            onClick={() => setMenuOpen(false)}
          >
            {t('navbar.projects')}
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav-button active" : "nav-button"
            }
            onClick={() => setMenuOpen(false)}
          >
            {t('navbar.contact')}
          </NavLink>
        </div>
        <div className="col-6 col-md-4 justify-content-end d-flex align-items-center">
          <select
            className="form-select nav-lang w-auto"
            value={i18n.language}
            onChange={e => i18n.changeLanguage(e.target.value)}>
            <option className='nav-lang' value="en">English</option>
            <option className='nav-lang' value="nl">Nederlands</option>
            <option className='nav-lang' value="tr">Türkçe</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Navbar

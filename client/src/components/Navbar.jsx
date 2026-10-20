import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { API } from '../config';

export default function Navbar({ theme, toggle }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <div className="nav-inner">
        <Link to="/" className="logo">Harshita <span>Rathore</span></Link>
        <button className="burger" onClick={() => setOpen(!open)} aria-label="Menu">☰</button>
        <nav className={open ? 'links open' : 'links'} onClick={() => setOpen(false)}>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <a className="nav-cta" href={`${API}/api/resume/pdf`}>Résumé ↓</a>
          <button className="theme-btn" onClick={toggle}>
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
        </nav>
      </div>
    </header>
  );
}
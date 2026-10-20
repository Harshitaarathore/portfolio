import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Navbar({ theme, toggle }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <Link to="/" className="logo">Harshita <span>Rathore</span></Link>
      <button className="burger" onClick={() => setOpen(!open)}>☰</button>
      <nav className={open ? 'links open' : 'links'} onClick={() => setOpen(false)}>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <button className="theme-btn" onClick={toggle}>
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </nav>
    </header>
  );
}
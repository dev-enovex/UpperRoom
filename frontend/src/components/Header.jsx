import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import styles from './Header.module.css';

export default function Header() {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const closeMenu = () => setMenuOpen(false);
  const activeAbout = ['/about', '/vision', '/initiatives', '/leadership'].includes(location.pathname);

  return <header className={styles.header}>
    <div className={styles.inner}>
      <Link to="/" className={styles.brand} aria-label="Upper Room SOAR Company home" onClick={closeMenu}>
        <img src="/upperroom-soar-logo.png" alt="Upper Room SOAR Company" />
      </Link>
      <button className={styles.menuToggle} type="button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(v => !v)}>
        {menuOpen ? <X size={22}/> : <Menu size={22}/>}
      </button>
      <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`} aria-label="Main navigation">
        <NavLink to="/academy" onClick={closeMenu}>SOAR Academy</NavLink>
        <NavLink to="/events" onClick={closeMenu}>Events</NavLink>
        <NavLink to="/gallery" onClick={closeMenu}>Gallery</NavLink>
        <NavLink to="/library" onClick={closeMenu}>Library</NavLink>
        <NavLink to="/connect" onClick={closeMenu}>Get connected</NavLink>
        <NavLink to="/partner" onClick={closeMenu}>Partner</NavLink>
        <div className={`${styles.dropdown} ${activeAbout ? styles.dropdownActive : ''}`}>
          <button type="button" className={styles.dropdownTrigger} aria-haspopup="true">About <ChevronDown size={14}/></button>
          <div className={styles.dropdownMenu}>
            <NavLink to="/about" onClick={closeMenu}>Who We Are</NavLink>
            <NavLink to="/vision" onClick={closeMenu}>Our Vision &amp; Mission</NavLink>
            <NavLink to="/initiatives" onClick={closeMenu}>Initiatives</NavLink>
            <NavLink to="/leadership" onClick={closeMenu}>Leadership</NavLink>
          </div>
        </div>
        <div className={styles.mobileActions}>
          {user ? <><Link to={user.role === 'admin' ? '/admin' : '/dashboard'} onClick={closeMenu}>My account</Link><button onClick={() => { logout(); closeMenu(); }}>Sign out</button></> : <Link to="/account" onClick={closeMenu}>Sign in</Link>}
          <Link className={styles.mobileCta} to="/events" onClick={closeMenu}>Explore events</Link>
        </div>
      </nav>
      <div className={styles.actions}>
        {user ? <><Link className={styles.account} to={user.role === 'admin' ? '/admin' : '/dashboard'}>{user.firstName}</Link><button onClick={logout} className={styles.login}>Sign out</button></> : <><Link className={styles.login} to="/account">Sign in</Link><Link className={styles.cta} to="/events">Explore events</Link></>}
      </div>
    </div>
  </header>;
}

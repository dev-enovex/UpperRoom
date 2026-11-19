import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import styles from './Header.module.css';

export default function Header() {
  const { user, logout } = useAuth();
  return <header className={styles.header}>
    <div className={styles.inner}>
      <Link to="/" className={styles.brand} aria-label="Upper Room SOAR Company home">
        <img src="/upperroom-soar-logo.png" alt="Upper Room SOAR Summit" />
      </Link>
      <nav className={styles.nav} aria-label="Main navigation">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/vision">Our Vision</NavLink>
        <NavLink to="/initiatives">Initiatives</NavLink>
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/leadership">Leadership</NavLink>
        <NavLink to="/connect">Get Connected</NavLink>
        <NavLink to="/partner">Partner</NavLink>
      </nav>
      <div className={styles.actions}>
        {user ? <>
          <Link className={styles.account} to={user.role === 'admin' ? '/admin' : '/dashboard'}>{user.firstName}</Link>
          <button onClick={logout} className={styles.login}>Sign out</button>
        </> : <>
          <Link className={styles.login} to="/account">Sign in</Link>
          <Link className={styles.cta} to="/events">Explore events <span>↗</span></Link>
        </>}
      </div>
    </div>
  </header>;
}

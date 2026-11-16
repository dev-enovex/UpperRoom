import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import styles from './Header.module.css';
export default function Header() {
  const { user, logout } = useAuth();
  return <header className={styles.header}><div className={styles.inner}>
    <Link to="/" className={styles.brand}><span className={styles.mark}>UR</span><span>UPPERROOM<small>SOAR SUMMIT</small></span></Link>
    <nav className={styles.nav}><NavLink to="/">Home</NavLink><NavLink to="/about">About</NavLink><NavLink to="/events">Events</NavLink></nav>
    <div className={styles.actions}>{user ? <><Link className={styles.account} to={user.role === 'admin' ? '/admin' : '/dashboard'}>{user.firstName}</Link><button onClick={logout} className={styles.login}>Sign out</button></> : <><Link className={styles.login} to="/account">Sign in</Link><Link className={styles.cta} to="/account">Get tickets <span>↗</span></Link></>}</div>
  </div></header>;
}

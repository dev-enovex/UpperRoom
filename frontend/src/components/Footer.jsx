import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
export default function Footer(){return <footer className={styles.footer}>
 <div className={styles.inner}>
  <div className={styles.identity}><img src="/upperroom-soar-logo.png" alt="Upper Room SOAR Company"/><p>We tarry in the Upper Room so that we can manifest the wisdom, power and influence of Christ beyond its walls.</p></div>
  <div><strong>Discover</strong><Link to="/about">Who We Are</Link><Link to="/vision">Our Vision & Mission</Link><Link to="/leadership">Leadership</Link><Link to="/initiatives">Our Initiatives</Link><Link to="/gallery">Summit Gallery</Link><Link to="/library">Book Library</Link><Link to="/academy">SOAR Academy</Link></div>
  <div><strong>Take Part</strong><Link to="/events">SOAR Summit Events</Link><Link to="/connect">Get Connected</Link><Link to="/partner">Partner With Us</Link><Link to="/account">My Account</Link></div>
  <div><strong>Contact</strong><a href="mailto:hello@upperroomsoar.com">hello@upperroomsoar.com</a><span>Nigeria</span></div>
 </div>
 <div className={styles.bottom}>© {new Date().getFullYear()} Upper Room SOAR Company. All rights reserved.</div>
</footer>}

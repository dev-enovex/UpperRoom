import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Vision from './pages/Vision';
import Initiatives from './pages/Initiatives';
import Leadership from './pages/Leadership';
import Connect from './pages/Connect';
import Partner from './pages/Partner';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Library from './pages/Library';
import Academy from './pages/Academy';
import AcademyLearning from './pages/AcademyLearning';
import EventDetails from './pages/EventDetails';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';
import styles from './App.module.css';

function Guard({ children, admin = false }) {
  const { user, loading } = useAuth();
  if (loading) return <div className={styles.loading}>Preparing your Upper Room experience…</div>;
  if (!user) return <Navigate to="/account" replace />;
  if (admin && user.role !== 'admin') return <Navigate to="/dashboard" replace />;
  return children;
}
export default function App() {
  return <><Header /><main className={styles.main}><Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/vision" element={<Vision />} />
    <Route path="/initiatives" element={<Initiatives />} />
    <Route path="/leadership" element={<Leadership />} />
    <Route path="/connect" element={<Connect />} />
    <Route path="/partner" element={<Partner />} />
    <Route path="/events" element={<Events />} />
    <Route path="/gallery" element={<Gallery />} />
    <Route path="/library" element={<Library />} />
    <Route path="/academy" element={<Academy />} />
    <Route path="/academy/learning" element={<Guard><AcademyLearning /></Guard>} />
    <Route path="/events/:id" element={<EventDetails />} />
    <Route path="/account" element={<Auth />} />
    <Route path="/dashboard" element={<Guard><Dashboard /></Guard>} />
    <Route path="/admin" element={<Guard admin><Admin /></Guard>} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes></main><Footer /></>;
}

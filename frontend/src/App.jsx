import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import EventDetails from './pages/EventDetails';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';
import styles from './App.module.css';

function Guard({ children, admin = false }) {
  const { user, loading } = useAuth();
  if (loading) return <div className={styles.loading}>Preparing your UpperRoom experience…</div>;
  if (!user) return <Navigate to="/account" replace />;
  if (admin && user.role !== 'admin') return <Navigate to="/dashboard" replace />;
  return children;
}
export default function App() {
  return <><Header /><main className={styles.main}><Routes>
    <Route path="/" element={<Home />} /><Route path="/about" element={<About />} />
    <Route path="/events" element={<Events />} /><Route path="/events/:id" element={<EventDetails />} />
    <Route path="/account" element={<Auth />} />
    <Route path="/dashboard" element={<Guard><Dashboard /></Guard>} />
    <Route path="/admin" element={<Guard admin><Admin /></Guard>} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes></main><Footer /></>;
}

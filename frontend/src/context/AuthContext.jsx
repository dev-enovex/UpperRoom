import { createContext, useContext, useEffect, useState } from 'react';
import api from '../services/api';
const AuthContext = createContext(null);
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem('urs_token');
    if (!token) { setLoading(false); return; }
    api.get('/auth/me').then(r => setUser(r.data.user)).catch(() => localStorage.removeItem('urs_token')).finally(() => setLoading(false));
  }, []);
  const login = async (payload) => {
    const { data } = await api.post('/auth/login', payload);
    localStorage.setItem('urs_token', data.token); setUser(data.user); return data.user;
  };
  const register = async (payload) => {
    const { data } = await api.post('/auth/register', payload);
    localStorage.setItem('urs_token', data.token); setUser(data.user); return data.user;
  };
  const logout = () => { localStorage.removeItem('urs_token'); setUser(null); };
  return <AuthContext.Provider value={{ user, loading, login, register, logout }}>{children}</AuthContext.Provider>;
}
export const useAuth = () => useContext(AuthContext);

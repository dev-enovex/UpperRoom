import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import styles from './Auth.module.css';

export default function Auth() {
  const [mode, setMode] = useState('login');
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const { login, register } = useAuth();
  const navigate = useNavigate();

  const change = (event) => {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  async function submit(event) {
    event.preventDefault();
    setBusy(true);
    setError('');

    try {
      if (mode === 'login') {
        await login({ email: form.email, password: form.password });
      } else {
        await register(form);
      }
      navigate('/dashboard');
    } catch (err) {
      setError(
        err.response?.data?.message ||
          'Unable to continue. Check your details and try again.'
      );
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-label="Welcome to Upper Room">
        <div className={styles.heroInner}>
          <h1>Welcome to Upper Room</h1>
        </div>
      </section>

      <section className={styles.authArea}>
        <div className={styles.authCard}>
          <div className={styles.panel}>
            <p className={styles.intro}>
              Sign in or create an account to manage your event registration and
              tickets.
            </p>
            <div className={styles.tabs} role="tablist" aria-label="Account access">
              <button
                type="button"
                role="tab"
                aria-selected={mode === 'login'}
                className={mode === 'login' ? styles.active : ''}
                onClick={() => {
                  setMode('login');
                  setError('');
                }}
              >
                Sign in
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={mode === 'register'}
                className={mode === 'register' ? styles.active : ''}
                onClick={() => {
                  setMode('register');
                  setError('');
                }}
              >
                Create account
              </button>
            </div>

            <form className={styles.form} onSubmit={submit}>
              {mode === 'register' && (
                <div className={styles.nameRow}>
                  <input
                    name="firstName"
                    placeholder="First name"
                    value={form.firstName}
                    onChange={change}
                    autoComplete="given-name"
                    required
                  />
                  <input
                    name="lastName"
                    placeholder="Last name"
                    value={form.lastName}
                    onChange={change}
                    autoComplete="family-name"
                    required
                  />
                </div>
              )}

              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={form.email}
                onChange={change}
                autoComplete="email"
                required
              />

              {mode === 'register' && (
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  value={form.phone}
                  onChange={change}
                  autoComplete="tel"
                />
              )}

              <input
                type="password"
                name="password"
                placeholder="Password (at least 8 characters)"
                value={form.password}
                onChange={change}
                autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
                minLength={8}
                required
              />

              {error && <div className={styles.error} role="alert">{error}</div>}

              <button className={styles.submit} type="submit" disabled={busy}>
                {busy
                  ? 'Please wait…'
                  : mode === 'login'
                    ? 'Sign in'
                    : 'Create my account'}
              </button>
            </form>

            <small className={styles.privacyNote}>
              Your information is used to manage your account and event registrations.
            </small>
          </div>

          <aside className={styles.brandPanel} aria-label="Upper Room SOAR">
            <div className={styles.brandContent}>
              <span>SOAR</span>
              <p>Arise into all you were created to become.</p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
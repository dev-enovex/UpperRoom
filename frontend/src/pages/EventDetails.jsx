import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';
import styles from './Content.module.css';

export default function EventDetails() {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [ticketTypeId, setTicketTypeId] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [provider, setProvider] = useState('paystack');
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    api.get(`/events/${id}`).then(({ data }) => {
      setEvent(data.event);
      if (data.event.ticketTypes?.length) setTicketTypeId(data.event.ticketTypes[0]._id);
    }).catch(() => setMessage('Event information is not available yet.'));
  }, [id]);

  const selected = event?.ticketTypes?.find(t => t._id === ticketTypeId);
  async function checkout() {
    if (!user) return navigate('/account');
    if (!selected) return setMessage('Please select a ticket category.');
    setBusy(true); setMessage('');
    try {
      const { data } = await api.post('/payments/initialize', {
        eventId: event._id, ticketTypeId, quantity: Number(quantity), provider
      });
      window.location.assign(data.checkoutUrl);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Could not start checkout. Please try again.');
      setBusy(false);
    }
  }

  return <section className={styles.page}>
    <Link to="/events" className={styles.kicker}>← ALL EVENTS</Link>
    <h1>{event?.title || 'UpperRoom SOAR Summit'}</h1>
    <p className={styles.lead}>{event?.description || 'A gathering for encounter, growth and purpose.'}</p>
    <div className={styles.prose}>
      <h2>Event details</h2>
      <p>{event?.dateLabel || (event?.date ? new Date(event.date).toLocaleDateString() : 'Date to be announced')} · {event?.venue || 'Venue to be announced'}</p>
      <h2>Choose your place</h2>
      {event?.ticketTypes?.length ? event.ticketTypes.map(t => <label key={t._id} style={{display:'block',padding:'15px 0',borderBottom:'1px solid #e7e4dc'}}>
        <input type="radio" name="ticket" checked={ticketTypeId===t._id} onChange={()=>setTicketTypeId(t._id)} />
        <strong style={{marginLeft:10}}>{t.name}</strong>
        <p>{t.description}</p><strong>{`₦${Number(t.price).toLocaleString('en-NG')}`}</strong>
      </label>) : <p>Ticket categories will be announced soon.</p>}
      {selected && <>
        <p><label>Quantity&nbsp;
          <select value={quantity} onChange={e=>setQuantity(e.target.value)} style={{padding:8}}>
            {[1,2,3,4,5,6,7,8,9,10].map(n=><option key={n} value={n}>{n}</option>)}
          </select>
        </label></p>
        <p><label>Payment method&nbsp;
          <select value={provider} onChange={e=>setProvider(e.target.value)} style={{padding:8}}>
            <option value="paystack">Paystack</option><option value="flutterwave">Flutterwave</option>
          </select>
        </label></p>
        <strong>Total: ₦{(Number(selected.price)*Number(quantity)).toLocaleString('en-NG')}</strong>
      </>}
      <p>Account registration is required before ticket purchase. Tickets are issued only after the payment provider confirms payment.</p>
      {message && <p role="alert" style={{color:'#a33'}}>{message}</p>}
      <button disabled={busy || !selected} onClick={checkout} style={{background:'#d8b85c',border:0,padding:'14px 20px',fontWeight:700,cursor:'pointer',marginTop:10}}>
        {busy?'Redirecting to secure checkout…':user?'Continue to payment':'Sign in / Create account to continue'}
      </button>
    </div>
  </section>;
}

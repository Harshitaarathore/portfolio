import { useState } from 'react';
import { API } from '../config';

export default function Contact() {
  const empty = { name: '', email: '', message: '' };
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState('');

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  async function submit(e) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(`${API}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      setForm(empty);
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className="section">
      <h2 className="title">Get in touch</h2>
      <form className="card form" onSubmit={submit}>
        <input name="name" placeholder="Your name" value={form.name} onChange={change} required />
        <input name="email" type="email" placeholder="Your email" value={form.email} onChange={change} required />
        <textarea name="message" rows="6" placeholder="Your message" value={form.message} onChange={change} required />
        <button className="btn solid" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending...' : 'Send message'}
        </button>
        {status === 'success' && <p className="ok">✅ Message sent! I'll get back to you soon.</p>}
        {status === 'error' && <p className="err">❌ Something went wrong. Please try again.</p>}
      </form>
    </section>
  );
}
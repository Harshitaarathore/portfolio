import { useState } from 'react';
import { motion } from 'framer-motion';
import { API } from '../config';
import SectionHead from '../components/SectionHead';

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
      <div className="wrap">
        <SectionHead num="05" label="Contact" title={<>Say <em>hello</em></>} />
        <motion.form
          className="form-card"
          onSubmit={submit}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <input name="name" placeholder="Your name" value={form.name} onChange={change} required />
          <input name="email" type="email" placeholder="Your email" value={form.email} onChange={change} required />
          <textarea name="message" rows="6" placeholder="Your message" value={form.message} onChange={change} required />
          <button className="btn solid" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send message →'}
          </button>
          {status === 'success' && (
            <motion.p className="ok" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
              ✅ Message sent! I'll get back to you soon.
            </motion.p>
          )}
          {status === 'error' && (
            <motion.p className="err" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
              ❌ Something went wrong. Please try again.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
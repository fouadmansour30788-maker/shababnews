'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <div className="contact-form-glass">
      <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: 6, color: '#15b3b8' }}>Send us a message</h3>
      <p style={{ fontSize: 13.5, color: 'var(--text-2)', marginBottom: 26 }}>
        Get connected with us and all our readers — we usually reply within 24 hours.
      </p>
      {sent ? (
        <p style={{ color: 'var(--accent)', fontWeight: 600 }}>
          ✓ Email sent, thank you! We&apos;ll be in touch soon.
        </p>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
          <div className="form-row-2">
            <div className="form-grp">
              <label className="form-lbl">Full Name</label>
              <input type="text" className="form-inp" placeholder="Your full name" required />
            </div>
            <div className="form-grp">
              <label className="form-lbl">Age</label>
              <input type="number" className="form-inp" placeholder="Age" min={1} required />
            </div>
          </div>
          <div className="form-row-2">
            <div className="form-grp">
              <label className="form-lbl">Email</label>
              <input type="email" className="form-inp" placeholder="you@example.com" required />
            </div>
            <div className="form-grp">
              <label className="form-lbl">Phone Number</label>
              <input type="tel" className="form-inp" placeholder="03 000 000" required />
            </div>
          </div>
          <div className="form-grp">
            <label className="form-lbl">Message</label>
            <textarea className="form-inp" placeholder="Write your message here…" required />
          </div>
          <button type="submit" className="btn btn-accent btn-submit" style={{ background: '#15b3b8' }}>
            <i className="fas fa-paper-plane" /> Send
          </button>
        </form>
      )}
    </div>
  );
}

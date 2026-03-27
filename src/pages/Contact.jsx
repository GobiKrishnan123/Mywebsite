import { useState } from 'react';
import '../styles/contact.css';

export default function Contact() {

  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = e =>
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  const handleSubmit = async (e) => {

  e.preventDefault();

  try {

    const response = await fetch("http://localhost:5000/send-email", {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify(form)

    });

    if (response.ok) {

      setSubmitted(true);

    } else {

      alert("Failed to send email");

    }

  } catch (error) {

    console.log(error);
    alert("Server error");

  }

};
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <p className="section-label">Contact</p>
          <h1>Get in Touch</h1>
          <p>For research collaborations, academic inquiries, or student mentorship.</p>
        </div>
      </section>

      <div className="contact-body">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-details">
              <h2>Contact Information</h2>
              <p>Reach out through any of the following channels.</p>
              <div className="contact-detail-list">
                <div className="contact-detail-item">
                  <div className="cd-icon">👩🔬</div>
                  <div className="cd-text">
                    <h4>Dr. G. Kruthika</h4>
                    <p>Assistant Professor, Department of Physics</p>
                  </div>
                </div>
                <div className="contact-detail-item">
                  <div className="cd-icon">🏛️</div>
                  <div className="cd-text">
                    <h4>Institution</h4>
                    <p>Srinivasa Ramanujan Centre<br />SASTRA University<br />Kumbakonam, Tamil Nadu – 612 001</p>
                  </div>
                </div>
                <div className="contact-detail-item">
                  <div className="cd-icon">✉️</div>
                  <div className="cd-text">
                    <h4>Email</h4>
                    <a href="mailto:kruthikaganesan@gmail.com">kruthikaganesan@gmail.com</a>
                  </div>
                </div>
                <div className="contact-detail-item">
                  <div className="cd-icon">📞</div>
                  <div className="cd-text">
                    <h4>Phone</h4>
                    <a href="tel:+918838407178">+91-8838407178</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-wrap">
              {submitted ? (
                <div className="form-success">
                  <div className="success-icon">✅</div>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. Dr. Kruthika will respond within 2–3 business days.</p>
                </div>
              ) : (
                <>
                  <h2>Send a Message</h2>
                  <p>Fill in the form below and we'll get back to you shortly.</p>
                  <form onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-group">
                        <label>Full Name *</label>
                        <input name="name" required placeholder="Your name" value={form.name} onChange={handleChange} />
                      </div>
                      <div className="form-group">
                        <label>Email Address *</label>
                        <input name="email" type="email" required placeholder="your@email.com" value={form.email} onChange={handleChange} />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Subject *</label>
                      <input name="subject" required placeholder="Research collaboration / Student inquiry / Other" value={form.subject} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label>Message *</label>
                      <textarea name="message" required placeholder="Write your message here…" value={form.message} onChange={handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary form-submit">Send Message →</button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>

    
  );
}

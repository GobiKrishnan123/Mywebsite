import { Link } from 'react-router-dom';
import PublicationCard from '../components/PublicationCard';
import publications from '../data/publications';
import '../styles/home.css';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-content">
              <div className="hero-badge"><span></span> Available for Research Collaboration</div>
              <h1>Dr. G. Kruthika</h1>
              <p className="hero-role">Assistant Professor – Physics</p>
              <p className="hero-dept">Srinivasa Ramanujan Centre · SASTRA University, Kumbakonam</p>
              <p className="hero-bio">
                Physicist specializing in functional materials, metal oxide catalysis, and photovoltaic
                materials for solar energy applications. Research focuses on computational and experimental
                studies of materials used in energy conversion and storage technologies.
              </p>
              <div className="hero-actions">
                <Link to="/publications" className="btn hero-btn-primary">View Publications</Link>
                <Link to="/contact" className="btn hero-btn-outline">Get in Touch</Link>
              </div>
              <div className="hero-stats">
                <div className="stat-item"><div className="stat-num">9+</div><div className="stat-label">Publications</div></div>
                <div className="stat-item"><div className="stat-num">10+</div><div className="stat-label">Years Research</div></div>
                <div className="stat-item"><div className="stat-num">6</div><div className="stat-label">Awards</div></div>
                <div className="stat-item"><div className="stat-num">3</div><div className="stat-label">Students</div></div>
              </div>
            </div>
            <div className="hero-photo-wrap">
              <div className="hero-photo">👩‍🔬</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Publications */}
      <section className="section featured-pubs">
        <div className="container">
          <p className="section-label">Selected Works</p>
          <h2 className="section-title">Featured Publications</h2>
          <div className="divider" />
          <div className="pubs-grid">
            {publications.slice(0, 3).map(pub => (
              <PublicationCard key={pub.id} pub={pub} />
            ))}
          </div>
          <div style={{ marginTop: 32 }}>
            <Link to="/publications" className="btn btn-outline">View All Publications →</Link>
          </div>
        </div>
      </section>

      

      {/* Contact Preview */}
      <section className="section contact-preview">
        <div className="container">
          <div className="contact-preview-inner">
            <div>
              <p className="section-label">Get in Touch</p>
              <h2 className="section-title">Open to Collaboration</h2>
              <div className="divider" />
              <div className="contact-info-list">
                <div className="contact-info-item">
                  <div className="contact-icon">📍</div>
                  <div>
                    <h4>Location</h4>
                    <p>Srinivasa Ramanujan Centre, SASTRA University, Kumbakonam, Tamil Nadu</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-icon">✉️</div>
                  <div>
                    <h4>Email</h4>
                    <p>kruthikaganesan@gmail.com</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-icon">📞</div>
                  <div>
                    <h4>Phone</h4>
                    <p>+91-8838407178</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-cta-box">
              <h3>Interested in Collaboration?</h3>
              <p>Reach out for research collaborations, academic inquiries, or student mentorship opportunities.</p>
              <Link to="/contact" className="btn btn-primary">Send a Message</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

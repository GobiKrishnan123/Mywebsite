import '../styles/pages.css';

const education = [
  { icon: '🎓', degree: 'PhD – Materials Science', inst: 'CSIR Central Electro Chemical Research Institute, Karaikudi', year: '2012 – 2018' },
  { icon: '🎓', degree: 'MPhil – Physics', inst: 'Pondicherry University', year: '2011 – 2012' },
  { icon: '🎓', degree: 'MSc – Physics', inst: 'Madurai Kamaraj University', year: '2009 – 2011' },
  { icon: '🎓', degree: 'BSc – Physics', inst: 'SFR College for Women', year: '2006 – 2009' },
];

const skills = [
  'Density Functional Theory (DFT)', 'VASP', 'Quantum ESPRESSO', 'Materials Project API',
  'Computational Materials Science', 'Impedance Spectroscopy', 'Photovoltaic Characterization',
  'High-Performance Computing', 'Scientific Writing', 'Python', 'MATLAB', 'Origin Pro',
];

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="section-label">About</p>
          <h1>Dr. G. Kruthika</h1>
          <p>Assistant Professor · Department of Physics · SASTRA University</p>
        </div>
      </section>

      <div className="about-body">
        <div className="container">
          <div className="about-grid">
            <div className="about-sidebar">
              <div className="about-photo"><img src="../IMG_20260324_201818.png" alt="Description of image" />
</div>
              <div className="about-quick-info">
                <div className="quick-info-item"><span>🏛️</span><span>SASTRA University, Kumbakonam</span></div>
                <div className="quick-info-item"><span>🔬</span><span>Department of Physics</span></div>
                <div className="quick-info-item"><span>📧</span><span>kruthikaganesan@gmail.com</span></div>
                <div className="quick-info-item"><span>📞</span><span>+91-8838407178</span></div>
                <div className="quick-info-item"><span>📍</span><span>Kumbakonam, Tamil Nadu, India</span></div>
              </div>
            </div>

            <div className="about-content">
              <div className="about-section">
                <h2>Biography</h2>
                <div className="divider" />
                <p>
                  Dr. G. Kruthika is an Assistant Professor in the Department of Physics at the Srinivasa
                  Ramanujan Centre, SASTRA University, Kumbakonam, Tamil Nadu, India. She joined SASTRA
                  University in September 2022 and has been actively engaged in both teaching and research.
                </p>
                <p>
                  Her research interests span functional materials, metal oxide catalysis, and photovoltaic
                  materials for solar energy applications. She employs both computational (first-principles
                  DFT) and experimental approaches to investigate the structural, electronic, magnetic, and
                  catalytic properties of advanced materials.
                </p>
                <p>
                  Prior to joining SASTRA, Dr. Kruthika served as a UGC-DSK Post Doctoral Fellow at the
                  Central University of Tamil Nadu (2019–2022), where she focused on perovskite-based
                  photovoltaic materials. She completed her doctoral research at CSIR-CECRI, Karaikudi,
                  specializing in metal oxide nanostructures for electrocatalysis.
                </p>
              </div>

              <div className="about-section">
                <h2>Scientific Capabilities</h2>
                <div className="divider" />
                <p>
                  Dr. Kruthika has strong research and scientific writing skills, with extensive experience
                  in computational materials science using DFT-based codes (VASP, Quantum ESPRESSO).
                  She has collaborated with experimental researchers and has experience in high-performance
                  computing environments for large-scale simulations.
                </p>
                <div className="skills-grid">
                  {skills.map(s => <span key={s} className="skill-tag">{s}</span>)}
                </div>
              </div>

              <div className="about-section">
                <h2>Academic Background</h2>
                <div className="divider" />
                <div className="edu-list">
                  {education.map((e, i) => (
                    <div className="edu-item" key={i}>
                      <div className="edu-icon">{e.icon}</div>
                      <div className="edu-info">
                        <h4>{e.degree}</h4>
                        <p>{e.inst}</p>
                        <p style={{ marginTop: 4, fontSize: 12, color: 'var(--accent)', fontWeight: 600 }}>{e.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

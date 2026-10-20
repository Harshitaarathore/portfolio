import { Link } from 'react-router-dom';
import { API } from '../config';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-bgtext">LET'S TALK ·</div>
      <div className="wrap footer-inner">
        <div className="eyebrow-mono">Get in touch</div>
        <h2 className="footer-title">Let's build<br /><em>something.</em></h2>
        <p className="footer-lead">
          Open to internships, hackathon teams, and anything that involves building something that has to actually work.
        </p>
        <div className="btn-row">
          <Link className="btn solid" to="/contact">Send a message →</Link>
          <a className="btn outline" href={`${API}/api/resume/pdf`}>CV (PDF)</a>
          <a className="btn outline" href={`${API}/api/resume/docx`}>CV (Word)</a>
        </div>

        <div className="contact-links">
          <a className="contact-link" href="mailto:rharshita175@gmail.com">
            <span><span className="k">EMAIL</span><br />rharshita175@gmail.com</span><span>↗</span>
          </a>
          <a className="contact-link" href="https://www.linkedin.com/in/harshita-rathore-72006531a" target="_blank" rel="noreferrer">
            <span><span className="k">LINKEDIN</span><br />in/harshita-rathore</span><span>↗</span>
          </a>
          <a className="contact-link" href="https://github.com/Harshitaarathore" target="_blank" rel="noreferrer">
            <span><span className="k">GITHUB</span><br />Harshitaarathore</span><span>↗</span>
          </a>
          <a className="contact-link" href="https://leetcode.com/u/Harshita_Rathore/" target="_blank" rel="noreferrer">
            <span><span className="k">LEETCODE</span><br />Harshita_Rathore</span><span>↗</span>
          </a>
        </div>

        <div className="foot-bottom">
          <span>© 2026 Harshita Rathore</span>
          <span>Built with React, Node, Express &amp; MongoDB</span>
        </div>
      </div>
    </footer>
  );
}
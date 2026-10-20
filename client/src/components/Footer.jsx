import { API } from '../config';

export default function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Harshita Rathore</p>
      <div>
        <a href="https://github.com/Harshitaarathore" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/harshita-rathore-72006531a" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={`${API}/api/resume/pdf`}>Resume</a>
      </div>
    </footer>
  );
}
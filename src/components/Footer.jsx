import { FaFacebook, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-placeholder">V</div>
              <span className="logo-text">VEXTR</span>
            </div>
            <p className="footer-tagline">
              Building websites that make sense
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a onClick={() => scrollToSection('home')}>Home</a></li>
              <li><a onClick={() => scrollToSection('projects')}>Projects</a></li>
              <li><a onClick={() => scrollToSection('about')}>About</a></li>
              <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h4>Get In Touch</h4>
            <div className="contact-items">
              <a href="mailto:contact@vextr.dev" className="contact-item">
                <FaEnvelope />
                <span>Coming Soon</span>
              </a>
              <a href="#" className="contact-item" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
                <span>Coming Soon</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} VEXTR. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

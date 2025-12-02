import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';
import './Hero.css';

function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          {/* Avatar Placeholder */}
          <motion.div 
            className="hero-avatar"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="avatar-placeholder">V</div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Hi, We're <span className="highlight">VEXTR</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p 
            className="hero-tagline"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Building Websites Students & Companies<br />
            Can Actually Understand
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="hero-cta"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <button className="btn btn-primary btn-large" onClick={scrollToProjects}>
              View Our Work
            </button>
            <button className="btn btn-secondary btn-large" onClick={scrollToContact}>
              Message Us
            </button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            className="scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            onClick={scrollToProjects}
          >
            <FaArrowDown className="scroll-icon" />
            <span>Scroll Down</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

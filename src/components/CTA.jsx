import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './CTA.css';

function CTA() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="cta" ref={ref}>
      <div className="cta-overlay"></div>
      <div className="container">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Ready to Build Your Website?</h2>
          <p>Let's work together to create something amazing</p>
          <div className="cta-buttons">
            <button className="btn btn-primary btn-large" onClick={scrollToContact}>
              Message Us
            </button>
            <button className="btn btn-secondary btn-large" onClick={scrollToProjects}>
              View Projects Again
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTA;

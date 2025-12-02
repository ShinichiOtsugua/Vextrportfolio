import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaFacebook } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="contact section section-dark" id="contact" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center">Get In Touch</h2>
          <p className="contact-intro text-center">
            Have a project in mind? We'd love to hear from you!
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Email */}
          <motion.div
            className="contact-card"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="contact-icon">
              <FaEnvelope />
            </div>
            <h3>Email</h3>
            <div className="contact-placeholder">
              <p>Coming Soon</p>
              <span>We're setting up our email</span>
            </div>
          </motion.div>

          {/* Facebook */}
          <motion.div
            className="contact-card"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="contact-icon">
              <FaFacebook />
            </div>
            <h3>Facebook</h3>
            <div className="contact-placeholder">
              <p>Coming Soon</p>
              <span>Follow us on Facebook</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="contact-note"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p>Contact information will be available soon!</p>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;

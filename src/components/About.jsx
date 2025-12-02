import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaNodeJs, FaPhp, FaDatabase, FaJs, FaHtml5 } from 'react-icons/fa';
import { SiVite } from 'react-icons/si';
import './About.css';

function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const techStack = [
    { name: 'React', icon: <FaReact /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'PHP', icon: <FaPhp /> },
    { name: 'MySQL', icon: <FaDatabase /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'HTML/CSS', icon: <FaHtml5 /> },
    { name: 'Vite', icon: <SiVite /> }
  ];

  return (
    <section className="about section section-light" id="about" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center">About Us</h2>
          <p className="about-intro text-center">
            We are a duo team passionate about making web development accessible. 
            We help students and companies create websites that are not just functional, 
            but easy to understand and maintain.
          </p>
        </motion.div>

        <div className="about-grid">
          {/* Tech Stack */}
          <motion.div 
            className="about-card"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Tech Stack</h3>
            <div className="tech-stack-grid">
              {techStack.map((tech, index) => (
                <div key={index} className="tech-item">
                  <div className="tech-icon">{tech.icon}</div>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div 
            className="about-card"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3>Experience</h3>
            <div className="stat-box">
              <div className="stat-number">2</div>
              <div className="stat-label">Years Building Websites</div>
            </div>
          </motion.div>

          {/* Projects */}
          <motion.div 
            className="about-card"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3>Projects</h3>
            <div className="stat-box">
              <div className="stat-number">2+</div>
              <div className="stat-label">Completed Projects</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;

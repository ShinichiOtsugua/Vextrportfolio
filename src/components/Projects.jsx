import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt, FaArrowRight, FaPlay } from 'react-icons/fa';
import { projects } from '../data/projects';
import './Projects.css';

function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="projects section section-light" id="projects" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center">Our Projects</h2>
          <p className="projects-intro text-center">
            Building solutions that make a difference
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              {/* Video/GIF Placeholder */}
              <div className="project-media">
                <div className="video-placeholder">
                  <FaPlay className="play-icon" />
                  <p>Video Demo</p>
                  <span>Coming Soon</span>
                </div>
              </div>

              {/* Project Info */}
              <div className="project-info">
                <h3>{project.title}</h3>
                <p className="project-description">{project.shortDescription}</p>

                {/* Tech Stack */}
                <div className="tech-badges">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="project-actions">
                  <Link 
                    to={`/project/${project.slug}`} 
                    className="btn btn-secondary"
                  >
                    View Details <FaArrowRight />
                  </Link>
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Live Demo <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Future Projects Placeholder */}
          <motion.div
            className="project-card project-placeholder"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="placeholder-content">
              <div className="placeholder-icon">+</div>
              <h3>More Projects Coming Soon</h3>
              <p>We're constantly working on new and exciting projects</p>
            </div>
          </motion.div>

          <motion.div
            className="project-card project-placeholder"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="placeholder-content">
              <div className="placeholder-icon">+</div>
              <h3>Future Project</h3>
              <p>Stay tuned for more amazing work</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Projects;

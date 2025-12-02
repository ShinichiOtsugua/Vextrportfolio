import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaExternalLinkAlt, FaCheckCircle, FaPlay } from 'react-icons/fa';
import { projects } from '../data/projects';
import './ProjectDetail.css';

function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="project-detail">
        <div className="container">
          <div className="not-found">
            <h2>Project Not Found</h2>
            <Link to="/" className="btn btn-primary">Back to Home</Link>
          </div>
        </div>
      </div>
    );
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="project-detail">
      {/* Back Button */}
      <div className="back-bar">
        <div className="container">
          <Link to="/" className="back-link" onClick={scrollToTop}>
            <FaArrowLeft /> Back to Projects
          </Link>
        </div>
      </div>

      <div className="container">
        {/* Project Header */}
        <motion.div
          className="project-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>{project.title}</h1>
          <p className="project-category">{project.category} • {project.year}</p>
        </motion.div>

        {/* Video/GIF Placeholder */}
        <motion.div
          className="project-media-large"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="video-placeholder-large">
            <FaPlay className="play-icon-large" />
            <p>Project Demo Video/GIF</p>
            <span>Add your video or animated GIF here</span>
          </div>
        </motion.div>

        {/* Project Overview */}
        <motion.div
          className="project-overview"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2>Project Overview</h2>
          <p>{project.description}</p>
        </motion.div>

        {/* Key Features */}
        <motion.div
          className="project-features"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2>Key Features</h2>
          <div className="features-grid">
            {project.features.map((feature, index) => (
              <div key={index} className="feature-item">
                <FaCheckCircle className="check-icon" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Technologies Used */}
        <motion.div
          className="project-tech"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2>Technologies Used</h2>
          <div className="tech-badges-large">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-badge-large">{tech}</span>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="project-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a 
            href={project.demoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary btn-large"
          >
            View Live Demo <FaExternalLinkAlt />
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default ProjectDetail;

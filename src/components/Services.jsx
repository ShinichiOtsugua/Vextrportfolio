import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaLaptopCode, FaCog, FaCalendarAlt } from 'react-icons/fa';
import './Services.css';

function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const services = [
    {
      id: 1,
      title: "Custom Website Development",
      description: "Tailored websites built specifically for your needs, whether you're a student project or a growing business.",
      icon: <FaCode />
    },
    {
      id: 2,
      title: "Web Applications",
      description: "Interactive web applications with user-friendly interfaces and powerful backend systems.",
      icon: <FaLaptopCode />
    },
    {
      id: 3,
      title: "CMS Systems",
      description: "Easy-to-manage content management systems that you can update without technical knowledge.",
      icon: <FaCog />
    }
  ];

  const timeline = [
    { phase: "Planning", duration: "1-2 weeks" },
    { phase: "Development", duration: "4-8 weeks" },
    { phase: "Testing", duration: "1-2 weeks" },
    { phase: "Launch & Support", duration: "Ongoing" }
  ];

  return (
    <section className="services section section-dark" id="services" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center">What We Offer</h2>
        </motion.div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          className="timeline-section"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-center">
            <FaCalendarAlt className="timeline-icon" />
            Typical Project Timeline
          </h3>
          <div className="timeline">
            {timeline.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-phase">{item.phase}</div>
                  <div className="timeline-duration">{item.duration}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;

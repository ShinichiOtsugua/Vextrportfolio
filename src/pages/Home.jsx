import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Projects from '../components/Projects';
import CTA from '../components/CTA';
import Contact from '../components/Contact';

function Home() {
  return (
    <div className="home">
      <Hero />
      <About />
      <Services />
      <Projects />
      <CTA />
      <Contact />
    </div>
  );
}

export default Home;

import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";

function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Experience />
      <Testimonials />
      <CTA />
      <FAQ />
      <Contact />
    </main>
  );
}

export default Home;
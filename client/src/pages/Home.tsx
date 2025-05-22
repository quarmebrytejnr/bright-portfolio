import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Skills from "@/components/home/Skills";
import Experience from "@/components/home/Experience";
import Projects from "@/components/home/Projects";
import Dashboards from "@/components/home/Dashboards";
import Contact from "@/components/home/Contact";

const Home = () => {
  useEffect(() => {
    // Add custom CSS for the header clip path
    const style = document.createElement('style');
    style.innerHTML = `
      .header-clip {
        clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
      }
      .timeline-item:not(:last-child)::after {
        content: "";
        position: absolute;
        width: 2px;
        background-color: #0A2342;
        top: 24px;
        bottom: -24px;
        left: 11px;
      }
      .dark .timeline-item:not(:last-child)::after {
        background-color: #4B5563;
      }
      .project-card {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      .project-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
      }
      .bg-gradient {
        background: linear-gradient(135deg, #0A2342 0%, #1B6CA8 100%);
      }
      .dark .bg-gradient {
        background: linear-gradient(135deg, #111827 0%, #1E3A8A 100%);
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-dark dark:text-gray-100">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Dashboards />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;

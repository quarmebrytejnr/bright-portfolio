import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";
import { useEffect, useState } from "react";
import { ArrowDown, FileText, Github, Linkedin } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typing, setTyping] = useState("");
  const fullText = "Analytics Engineer";
  
  // Typewriter effect
  useEffect(() => {
    setIsVisible(true);
    
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < fullText.length) {
        setTyping(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100);
    
    return () => clearInterval(typeInterval);
  }, []);

  const handleNavClick = (href: string) => {
    const sectionId = href.replace("#", "");
    scrollToSection(sectionId);
  };

  return (
    <header id="home" className="bg-gradient-primary header-clip relative pt-24 pb-32 md:pt-36 md:pb-44">
      <div className="absolute inset-0 bg-grid-white/[0.1] bg-[length:20px_20px]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="md:flex items-center">
          <div className={`md:w-1/2 md:pr-8 text-white slide-in-left ${isVisible ? 'animate-in' : 'opacity-0'}`}>
            <div className="inline-block mb-2 text-xs font-semibold tracking-wider bg-white/20 text-white px-3 py-1 rounded-full backdrop-blur-sm">
              PASSIONATE ABOUT DATA & AI
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              Bright Kwame Dogbey
              <div className="h-12">
                <span className="block text-2xl md:text-3xl font-medium mt-2 text-secondary">
                  {typing}<span className="animate-pulse">|</span>
                </span>
              </div>
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl">
              Data and AI Solutions Specialist with 8+ years of experience designing cloud-native data architectures, implementing AI-driven analytics, and enabling enterprise-scale digital transformation.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Button 
                onClick={() => handleNavClick("#projects")}
                variant="outline" 
                className="bg-white text-primary hover:bg-gray-100 hover-lift hover:scale-105 transition-all duration-300"
              >
                View Projects
              </Button>
              <Button 
                onClick={() => handleNavClick("#contact")}
                className="bg-secondary hover:bg-secondary/90 text-white hover-lift hover:scale-105 transition-all duration-300"
              >
                Contact Me
              </Button>
            </div>
            
            <div className="flex items-center space-x-5">
              <a 
                href="https://linkedin.com/in/bright-kwame-dogbey" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-secondary transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://bit.ly/bkd-portfolio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-secondary transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="/attached_assets/Bright Kwame Dogbey Analytics Engineer CV.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-secondary transition-colors"
                aria-label="Download CV"
              >
                <FileText className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className={`md:w-1/2 mt-10 md:mt-0 flex justify-center slide-in-right ${isVisible ? 'animate-in' : 'opacity-0'}`}>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl hover-shadow overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/40 to-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                src="/attached_assets/image_1747916296923.png"
                alt="Bright Kwame Dogbey"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
        
        <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => handleNavClick("#about")} 
            className="text-white hover:text-secondary transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown className="h-8 w-8" />
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="fill-white dark:fill-gray-900">
          <path d="M0,96L60,112C120,128,240,160,360,160C480,160,600,128,720,128C840,128,960,160,1080,160C1200,160,1320,128,1380,112L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
    </header>
  );
};

export default Hero;

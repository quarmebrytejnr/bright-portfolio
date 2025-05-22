import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";

const Footer = () => {
  const handleNavClick = (href: string) => {
    const sectionId = href.replace("#", "");
    scrollToSection(sectionId);
  };

  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <span className="text-white font-bold text-2xl">
              BKD<span className="text-secondary">.</span>
            </span>
            <p className="mt-2 text-white/70 max-w-md">
              Analytics Engineer with expertise in cloud-native data architectures and AI-driven analytics.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            <div>
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="#home" 
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick("#home");
                    }}
                    className="text-white/70 hover:text-secondary"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a 
                    href="#about" 
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick("#about");
                    }}
                    className="text-white/70 hover:text-secondary"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a 
                    href="#skills" 
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick("#skills");
                    }}
                    className="text-white/70 hover:text-secondary"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a 
                    href="#projects" 
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick("#projects");
                    }}
                    className="text-white/70 hover:text-secondary"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://linkedin.com/in/bright-kwame-dogbey" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white/70 hover:text-secondary"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a 
                    href="https://bit.ly/bkd-portfolio" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white/70 hover:text-secondary"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white/70 hover:text-secondary"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick("#contact");
                    }}
                    className="text-white/70 hover:text-secondary"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70">© {new Date().getFullYear()} Bright Kwame Dogbey. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-white/70 hover:text-secondary">Privacy Policy</a>
            <span className="mx-2 text-white/30">|</span>
            <a href="#" className="text-white/70 hover:text-secondary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

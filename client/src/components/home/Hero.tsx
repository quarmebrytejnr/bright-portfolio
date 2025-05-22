import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";
import profileImagePath from "@/assets/profile.svg";

const Hero = () => {
  const handleNavClick = (href: string) => {
    const sectionId = href.replace("#", "");
    scrollToSection(sectionId);
  };

  return (
    <header id="home" className="bg-gradient-to-r from-primary to-accent header-clip relative pt-24 pb-32 md:pt-32 md:pb-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex items-center">
          <div className="md:w-1/2 md:pr-8 text-white">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Bright Kwame Dogbey
              <span className="block text-2xl md:text-3xl font-medium mt-2">Analytics Engineer</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl">
              Data and AI Solutions Specialist with 8+ years of experience designing cloud-native data architectures, implementing AI-driven analytics, and enabling enterprise-scale digital transformation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => handleNavClick("#projects")}
                variant="outline" 
                className="bg-white text-primary hover:bg-gray-100"
              >
                View Projects
              </Button>
              <Button 
                onClick={() => handleNavClick("#contact")}
                className="bg-secondary hover:bg-secondary/90 text-white"
              >
                Contact Me
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img
                src="/attached_assets/image_1747916296923.png"
                alt="Bright Kwame Dogbey"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
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
